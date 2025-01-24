# Unclosed MySQL Connection in Node.js Express App

This repository demonstrates a common error in Node.js applications: an unclosed database connection leading to a memory leak. The provided code creates an Express app that connects to a MySQL database to fetch data. However, the connection is never explicitly closed, causing resources to remain allocated even after the request is handled. This will eventually lead to the application consuming excessive memory and eventually crashing.

## Bug Report

The bug lies in the `app.get` handler where a MySQL connection is created using `mysql.createConnection()`, but there's no mechanism to close the connection after it is used to make the query.

## Solution

The bug is fixed by ensuring the connection is closed after the query is executed using `connection.end()`.  The solution utilizes the `finally` block to guarantee the connection is closed even if errors occur during the query execution. 