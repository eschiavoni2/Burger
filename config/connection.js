// Set up MySQL connection.
var mysql = require("mysql");
// Global for connection
var connection;
// If on Heroku use the Envirnmental Variable for JawsDB
if (process.env.JAWSDB_URL){
  connection = mysq.creatConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "M1qu3tt314!",
  database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
