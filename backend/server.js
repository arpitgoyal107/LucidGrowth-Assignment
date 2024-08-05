const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@pf-lg.joqpiht.mongodb.net/?retryWrites=true&w=majority&appName=PF-LG`
  )
  .then(console.log("MongoDB Connected Successfully!"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

// import Routes from api/routes
const userRoutes = require("./api/routes/userRoutes");
const projectRoutes = require("./api/routes/projectRoutes");
const skillRoutes = require("./api/routes/skillRoutes");
const experienceRoutes = require("./api/routes/experienceRoutes");

// Routes
app.use("/user", userRoutes);
app.use("/images", express.static("uploads"));
app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);
app.use("/experiences", experienceRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Assignment Server!");
});

// Port
PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
