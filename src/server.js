require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

// Import routes
const subscriberRoutes = require("./routes/subscriber.routes");
const packageRoutes = require("./routes/package.routes");
const radacctRoutes = require("./routes/radacct.routes");

const app = express();

// Middleware
app.use(express.json());

// CORS configuration for frontend
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is healthy" });
});

// API routes
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/radacct", radacctRoutes);

// 404 route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// DB Connection & Server Start
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");

    // Sync models
    await sequelize.sync({ alter: false });
    console.log("✅ Models synced");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB connection or server error:", err.message);
    process.exit(1);
  }
};

startServer();
