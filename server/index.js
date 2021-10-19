import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// every route inside postRoutes will start with /posts
//app.use("/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Cryptowatch api");
});

// setting up port
const PORT = process.env.PORT;

try {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
} catch (error) {
    console.log(error);
}