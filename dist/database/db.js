import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
var Pool = pkg.Pool;
export var connection = new Pool({
    connectionString: process.env.DATABASE_URL
});
