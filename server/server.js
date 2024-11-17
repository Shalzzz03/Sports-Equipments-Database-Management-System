const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const db = require('./dbConnect');
const bodyParser = require('body-parser');
const app = express();


//For allowing the urls to be accessed by the server
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['PUT', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Parse JSON bodies
app.use(bodyParser.json());







//Insert data in table Active Users
app.post('/input_active_users', async (req, res) => {
  const { equipment, quantity, timereq, full_name, reg_no, contact_no, branch, division } = req.body;

  try {
    const qry = `INSERT INTO sems.active_users (equipment, quantity, timereq, full_name, reg_no, contact_no, branch, division) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    await db.execute(qry, [equipment, quantity, timereq, full_name, reg_no, contact_no, branch, division]);
    console.log('Data inserted into MySQL table');
    res.status(200).send('Data received and inserted into MySQL successfully');
  } catch (error) {
    console.error('Error executing MySQL query:', error);
    res.status(500).send('Error inserting data into MySQL');
  }
});




//Accessing the data from the table Active_Users
app.get('/data_of_active_users', async (req, res) => {
  try {
    await db.query('SELECT * FROM active_users')
    .then((result)=>{
      res.json(result);
    })
  } catch (error) {
    console.error('Error fetching data from MySQL:', error);
    res.status(500).json({ error: 'Error fetching data from MySQL' });
  }
});

app.get('/data_of_equip_avai', async (req, res) => {
  try {
    await db.query('SELECT * FROM equipments_table')
    .then((result)=>{
      res.json(result);
    })
  } catch (error) {
    console.error('Error fetching data from MySQL:', error);
    res.status(500).json({ error: 'Error fetching data from MySQL' });
  }
});

app.post('/update_table', async (req, res) => {
  const { equipment, quantity, timereq, full_name, reg_no, contact_no, branch, division } = req.body;
  let equip = equipment.toLowerCase(); // Convert equipment name to lowercase
  // console.log(equip);
  try {
    const qry1 = 'SELECT available FROM equipments_table WHERE equipment_name = ?';
    const result = await db.query(qry1, [equip]);
    console.log(result);
    if (result[0].length > 0) {
      const avail_quantity = result[0][0].available;
      const insert_val = avail_quantity - quantity;
      // console.log("avail_quantity" + avail_quantity);
      // console.log("Inser_val" + insert_val);

      if ((insert_val*1) >= 0) {
        const qry = 'UPDATE equipments_table SET taken = ?, available = ?, remaining = ? WHERE equipment_name = ?';
        await db.query(qry, [quantity, insert_val, insert_val, equip]);
        res.status(200).json({ message: 'Table updated successfully' });
      } else {
        res.status(400).json({ error: 'Insufficient quantity available' });
      }
    } else {
      res.status(404).json({ error: 'Equipment not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MySQL:', error);
    res.status(500).json({ error: 'Error fetching data from MySQL' }); // Return specific error message
  }
});
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// **********************************************************************************************************************************************
// app.post('/api/return', (req, res) => {
//   console.log('Request received with body:', req.body);
//   const { registrationId } = req.body;

//   if (!registrationId) {
//     return res.status(400).json({ success: false, error: 'Invalid registration ID.' });
//   }

//   const sql3 = 'SELECT quantity FROM active_users WHERE reg_no = ?';
//   const sql2 = 'SELECT equipment FROM active_users WHERE reg_no = ?';
//   const sql1 = 'UPDATE equipments_table SET taken = taken + ?, available = available + ?, remaining = remaining + ? WHERE equipment_name = ?';

//   // Query to get quantity
//   db.query(sql3, [registrationId], (err, quantResult) => {
//     if (err) {
//       console.error('Error executing SQL query3:', err);
//       return res.status(500).json({ success: false, error: 'Error retrieving quantity: ' + err.message });
//     }

//     if (quantResult.length === 0) {
//       return res.status(404).json({ success: false, error: 'No matching record found for the provided registration ID.' });
//     }

//     console.log('Quantity result:', quantResult);
//     let quant = parseInt(quantResult[0]?.quantity, 10);

//     if (isNaN(quant)) {
//       return res.status(404).json({ success: false, error: 'Invalid quantity retrieved for the given registration ID.' });
//     }

//     // Query to get equipment
//     db.query(sql2, [registrationId], (err, equipResult) => {
//       if (err) {
//         console.error('Error executing SQL query2:', err);
//         return res.status(500).json({ success: false, error: 'Error retrieving equipment: ' + err.message });
//       }

//       if (equipResult.length === 0) {
//         return res.status(404).json({ success: false, error: 'No matching record found for the provided registration ID.' });
//       }

//       console.log('Equipment result:', equipResult);
//       const equip = equipResult[0]?.equipment;

//       if (!equip) {
//         return res.status(404).json({ success: false, error: 'Invalid equipment retrieved for the given registration ID.' });
//       }

//       // Query to update equipment
//       db.query(sql1, [quant, quant, quant, equip], (err, updateResult) => {
//         if (err) {
//           console.error('Error executing SQL query1:', err);
//           return res.status(500).json({ success: false, error: 'Error updating equipment: ' + err.message });
//         }

//         console.log('Update result:', updateResult);
//         res.status(200).json({ success: true, message: 'Item returned successfully.' });
//       });
//     });
//   });
// });
app.post('/api/return', async (req, res) => {
  console.log('Request received with body:', req.body);
  const { registrationId } = req.body;

  if (!registrationId) {
    return res.status(400).json({ success: false, error: 'Invalid registration ID.' });
  }

  const sql1 = 'SELECT quantity, equipment FROM active_users WHERE reg_no = ?';
  const sql2 = 'UPDATE equipments_table SET taken = taken - ?, available = available + ?, remaining = remaining + ? WHERE equipment_name = ?';
  const sql3 = 'DELETE FROM active_users WHERE reg_no = ?'; // The DELETE query to remove the row

  let connection;
  try {
    // Start a transaction using promise-based API
    connection = await db.getConnection();  // Ensure connection is using promises
    await connection.beginTransaction();

    // Execute first query to get quantity and equipment
    const [results] = await connection.query(sql1, [registrationId]);

    if (results.length === 0) {
      await connection.rollback();
      return res.status(404).json({ success: false, error: 'No matching record found for the provided registration ID.' });
    }

    const quant = parseInt(results[0].quantity, 10);
    const equip = results[0].equipment;

    if (isNaN(quant) || !equip) {
      await connection.rollback();
      return res.status(404).json({ success: false, error: 'Invalid quantity or equipment retrieved for the given registration ID.' });
    }

    // Execute second query to update the equipment
    await connection.query(sql2, [quant, quant, quant, equip]);

    // Execute third query to delete the row from active_users
    await connection.query(sql3, [registrationId]);

    // Commit the transaction
    await connection.commit();
    console.log('Transaction completed successfully');
    res.status(200).json({ success: true, message: 'Item returned successfully and record deleted.' });
  } catch (err) {
    console.error('Error in transaction:', err);
    if (connection) await connection.rollback();
    return res.status(500).json({ success: false, error: 'Error in transaction: ' + err.message });
  } finally {
    if (connection) await connection.release();  // Ensure connection is released
  }
});

  
    






//Run python file get the key, run query using key and send user details to the frontend
app.all('/rundemo', (req, res) => {
  const pythonProcess = exec('python script.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      return res.status(500).send(`Error executing Python script: ${error}`);
    }

    console.log(`Python script stdout: ${stdout}`);

     const key = stdout.trim();
      
     db.execute('SELECT * FROM USERS WHERE reg_no = ? ',[key])
      .then((result)=>{
        // const registrationNo = result[0][0].reg_no;
        // const fullname = result[0][0].full_name;
        // console.log(result[0][0]);
        // const data = {
        //   vari1 : registrationNo,
        //   vari2 : fullname
        // }
        res.json(result);
      })
      .catch((err)=>{console.log(err)})

    console.error(`Python script stderr: ${stderr}`);
  });

  pythonProcess.on('exit', (code) => {
    console.log(`Python script process exited with code ${code}`);
  });
});




app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
