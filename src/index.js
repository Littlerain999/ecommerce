const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const CONNECTTION = require("./config/database");

console.clear();
CONNECTTION(app);

