const express = require("express");
const connectDB = require("./config/db");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

connectDB();

const authRoutes = require("./routes/routes");
app.use("/api", authRoutes);

// app.get("/all-exucess_and_situations", (req, res) => {
//     res.send("Hello World 3!");
// });

// app.post("/exucesses/add", (req, res) => {
//     res.send("Hello World 4!");
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
