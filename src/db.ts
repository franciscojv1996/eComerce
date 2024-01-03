import mongoose, { mongo } from "mongoose";
import {congifServer} from "./config/envConfig"

mongoose.connect(congifServer.BASE)

export const db = mongoose.connection
db.once("open", () =>{
    console.log(`Mongodb connected successfully! ${congifServer.BASE}`)
})

