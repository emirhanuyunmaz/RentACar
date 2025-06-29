import dotenv from "dotenv"

dotenv.config()

export const config = {
    PORT:process.env.PORT,
    DB_NAME:process.env.DB_NAME,
    DB_PASSWORD:process.env.DB_PASSWORD
}