import 'reflect-metadata';
import express, { Application } from "express"
import cors from "cors"
import db from "./dbConnection"
import {config} from "./src/utils/config"


const app : Application = express()
const PORT = config.PORT || 3002


db.connect((err) => {
    if(err) throw err;
    console.log("Connected to MySQL");
});
app.use(cors())
app.use(express.json({limit:50000}))

app.get("/",(req,res) => {
    res.status(200).json({data:"Hello World"});
})

app.listen(PORT, () => {
    console.log(`Server is Fire at http://localhost:${PORT}`);
})