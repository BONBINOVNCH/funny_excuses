const express = require("express");
const connectDB = require("./config/db");

const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

connectDB();

const authRoutes = require("./routes/routes");
app.use("/api", authRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
