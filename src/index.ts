import express from "express"
import morgan from "morgan"
import cors from "cors"
import fileUpload from 'express-fileupload';
require("./db")

import {congifServer} from "./config/envConfig"
import router from "./router"

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(fileUpload());
app.use(express.urlencoded({extended: false}))

app.listen(congifServer.PORT, () =>{
    console.log(`server on port ${congifServer.PORT}`)
})

app.use(router)

app.all("*", (req, res, next) => {
    next(
      new Error(`No puedo encontrar ${req.originalUrl} en este servidor ${404}`)
    );
  });