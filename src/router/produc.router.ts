import { Router } from "express";
import { ProducController } from "../controller/produc.controller";
const produc = new ProducController()
const router = Router();

router.post("/", produc.create());


export default router