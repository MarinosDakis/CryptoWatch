import express from "express";

import { GetPrices } from "../controllers/crypto.js";

const router = express.Router();

router.get("/", GetPrices);

export default router;