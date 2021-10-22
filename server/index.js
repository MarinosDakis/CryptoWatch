import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
// routes
import cryptoRoutes from "./routes/cryptoRoutes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// every route inside cryptoRoutes will start with /prices
app.use("/prices", cryptoRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to CryptoWatch API")
});

// setting up port
const PORT = process.env.PORT;

try {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
} catch (error) {
    console.log(error);
}