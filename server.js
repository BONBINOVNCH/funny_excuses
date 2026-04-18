const express = require("express");
const connectDB = require("./config/db");

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.get("/exucesses", (req, res) => {
    res.send("Hello World 1!");
});

app.get("/situations", (req, res) => {
    res.send("Hello World 2!");
});

app.get("/all-exucess_and_situations", (req, res) => {
    res.send("Hello World 3!");
});

app.post("/exucesses/add", (req, res) => {
    res.send("Hello World 4!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
