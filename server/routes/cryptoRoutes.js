import express from "express";
const router = express.Router();

import { COINBASE_API, BINANCE_API } from "../controllers/crypto.js";

router.post("/prices", COINBASE_API);
router.post("/prices", BINANCE_API);

export default router;