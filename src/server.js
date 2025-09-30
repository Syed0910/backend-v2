/**
 * Entry point for the Express backend API
 * ---------------------------------------
 * This server connects to the MySQL database using Sequelize
 * and exposes API routes for subscribers, packages, radacct, and NAS.
 */

require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database"); // Sequelize DB connection

// ------------------------- Import Routes -------------------------
const subscriberRoutes = require("./routes/subscriber.routes");
const packageRoutes = require("./routes/package.routes");
const radacctRoutes = require("./routes/radacct.routes");

const ledgerRoutes = require("./routes/Ledger.routes");
const radpostauthRoutes = require("./routes/radpostauth.routes");

const nasRoutes = require("./routes/nas.routes"); // NAS routes


// ------------------------- Initialize App ------------------------
const app = express();

// ------------------------- Middleware ---------------------------
// Parse JSON request bodies
app.use(express.json());

// Configure CORS to allow requests from frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ------------------------- Health Check -------------------------
// Simple endpoint to check if API is running
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is healthy" });
});

// ------------------------- API Routes ---------------------------
// Subscribers CRUD endpoints
app.use("/api/subscribers", subscriberRoutes);

// Packages CRUD endpoints
app.use("/api/packages", packageRoutes);

// Radacct endpoints
app.use("/api/radacct", radacctRoutes);
app.use("/api/ledgers", ledgerRoutes);
app.use("/api/radpostauth",radpostauthRoutes );

// NAS CRUD endpoints
app.use("/api/nas", nasRoutes);

// ------------------------- 404 Handler --------------------------
// Catch-all route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ------------------------- Start Server -------------------------
const startServer = async () => {
  try {
    // Test DB connection
    await sequelize.authenticate();
    console.log("✅ Database connected");

    // Sync models
    // - In development, use alter:true to auto-update tables
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: true });
      console.log("✅ Models synced (development mode)");
    } else {
      await sequelize.sync();
      console.log("✅ Models synced");
    }

    // Start Express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB connection or server error:", err.message);
    process.exit(1);
  }
};

// Launch server
startServer();
