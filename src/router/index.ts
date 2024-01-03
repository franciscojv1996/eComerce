import express, { Express } from "express";
const router = express.Router()

import Produc from "./produc.router"

router.use("/produc", Produc)

export default router