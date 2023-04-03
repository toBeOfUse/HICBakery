const sqlite = require("better-sqlite3");
const db = sqlite("bakery.db");

// this file creates a database and seeds it with useful data for the website.
// run it from the command line with `node seed.js`

db.prepare("create table if not exists test_data (message string)").run();
const test_message = "hello world";
db.prepare("insert into test_data (message) values (?)").run(test_message);
