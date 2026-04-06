const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = require("./config/db");
const mealsRoutes = require("./routes/meal");
const catRoutes = require("./routes/cat");
const imgRoutes = require("./routes/img");

const PORT = process.env.PORT || 3000;

connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/meals", mealsRoutes);
app.use("/api/meals/categories", catRoutes);
app.use("/api/meals/images", imgRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
