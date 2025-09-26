require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors");

const app = express();
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is healthy" });
});

// Routes
app.use("/api/subscribers", require("./routes/subscriber.routes"));
app.use("/api/packages", require("./routes/package.routes"));
app.use("/api/radacct", require("./routes/radacct.routes")); 


// DB Connection & Server Start
sequelize.authenticate()
  .then(() => {
    console.log("✅ Database connected");
    return sequelize.sync(); // Sync models
  })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch(err => console.error("❌ DB connection error:", err.message));
