const mysql = require('mysql2')
const pool = mysql.createPool({
  host: 'localhost:3306',
  user: 'root',
  password: 'stxaviers',
  database: 'sems'
})


module.exports = pool.promise();

// pool.connect()

// pool.query('SELECT * from users', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The database is ', rows);
// })


