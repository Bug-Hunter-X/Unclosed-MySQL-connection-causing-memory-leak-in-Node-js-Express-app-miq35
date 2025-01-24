const express = require('express');
const mysql = require('mysql2/promise'); // Use promise-based version for async/await
const app = express();
app.get('/', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'mydatabase'
    });
    const [results] = await connection.execute('SELECT * FROM mytable');
    res.send(results);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server error');
  } finally {
    if (connection) connection.end();
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));