// const mysql = require('mysql2')
// const pool = mysql.createPool({
//   host: 'localhost:3306',
//   user: 'root',
//   password: 'stxaviers',
//   database: 'sems'
// })

const mysql = require('mysql2/promise');  // Changed to mysql2/promise

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'stxaviers',
  database: 'sems',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log('✅ Successfully connected to MySQL database');
  } catch (error) {
    console.error('❌ Database Connection Error');
    console.error('Error Message:', error.message);
    
    process.exit(1);
  } finally {
    if (conn) {
      conn.release();
    }
  }
}

// Test connection on startup
testConnection();

// Export the pool (no need for .promise() since we're already using mysql2/promise)
module.exports = pool;

// pool.connect()

// pool.query('SELECT * from users', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The database is ', rows);
// })


