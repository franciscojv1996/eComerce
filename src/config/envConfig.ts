import {config} from "dotenv"
config()

export const congifServer = {
    PORT: process.env.PORT || 5051,
    BASE: process.env.MONGODB || "mongodb://localhost:27017/base"
}