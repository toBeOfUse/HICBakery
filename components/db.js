const sqlite = require("better-sqlite3");
const db = sqlite("bakery.sqlite3");
export default db;
