import mysql2 from "mysql2"
import { config } from "./src/utils/config";

const connection = mysql2.createConnection({
    host:"localhost",
    user:config.DB_NAME,
    password:config.DB_PASSWORD,
    // database:"rent-a-car",
    
});

export default connection