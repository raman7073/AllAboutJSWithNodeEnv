/*
  createPool() method is used to create a pool of connections to the MySQL database.
  createConnection() method is used to create a single connection to the MySQL database.

  As Api is sharing data , it is called REST API.
*/

const express = require("express");
const app = express();
const pool = require("./db");

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Something went wrong connecting to the database ...", err);
  }
  if (connection) {
    pool.query(
      /*
      "Create Table test (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))",
      (err, result) => {
        if (err) {
          console.log("Error in creating the users table:", err);
        } else {
          console.log(" table created successfully");
        }
      }
    );*/
      pool.query("SHOW TABLES FROM jobber_auth", (err, tables) => {
        if (err) {
          console.log("Error in retrieving tables from the database:", err);
        } else {
          console.log("Tables from the database:");
          console.log(tables);
        }
      })
    );
    pool.query(
      "INSERT INTO users (name, email, password) VALUES ('John', 'john@gmail.com', 'john123')",
      (err, result) => {
        if (err) {
          console.log("Error in inserting data into the users table:", err);
        } else {
          console.log("Data inserted into the users table successfully");
        }
      }
    );
    //update data
    pool.query(
      "UPDATE users SET name = 'Doe' WHERE name = 'John'",
      (err, result) => {
        if (err) {
          console.log("Error in updating data in the users table:", err);
        } else {
          console.log("Data updated in the users table successfully");
        }
      }
    );
    //delete data
    pool.query("DELETE FROM users WHERE id =1 ", (err, result) => {
      if (err) {
        console.log("Error in deleting data from the users table:", err);
      } else {
        console.log("Data deleted from the users table successfully");
      }
    });

    pool.query("SELECT * FROM users", (err, rows) => {
      if (err) {
        console.log("Error in retrieving data from the users table:", err);
      } else {
        console.log("Data received from the users table:");
        console.log(rows);
      }
    });
    //secure method to query
    pool.execute("SELECT * FROM users WHERE name = ?", ["Doe"], (err, rows) => {
      if (err) {
        console.log("Error in retrieving data from the users table:", err);
      } else {
        console.log("Data received from the users table:");
        console.log(rows);
      }
    });
    //connection.release();//
    console.log("Connected to the database ...");
  }
  return;
});
const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

console.log(server);
