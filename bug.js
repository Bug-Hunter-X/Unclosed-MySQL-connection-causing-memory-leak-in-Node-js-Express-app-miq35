const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause a memory leak if the connection is never closed
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
  });
  connection.query('SELECT * FROM mytable', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));