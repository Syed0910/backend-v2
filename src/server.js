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
// Routes
app.use("/api/subscribers", require("./routes/subscriber.routes"));
app.use("/api/packages", require("./routes/package.routes"));
app.use("/api/radacct", require("./routes/radacct.routes"));
app.use("/api/accounts", require("./routes/account.routes")); 
app.use("/api/activation-extra-fees", require("./routes/activationExtraFee.routes"));
app.use("/api/activation-records", require("./routes/activationRecord.routes"));
app.use("/api/activity-log", require("./routes/activityLog.routes"));
app.use("/api/area-groups", require("./routes/areaGroup.routes"));
app.use("/api/areas", require("./routes/area.routes"));
app.use("/api/auto-renew-failed-logs", require("./routes/autoRenewFailedLog.routes"));
app.use("/api/branches", require("./routes/branch.routes"));
app.use("/api/bw-allocations", require("./routes/bwAllocation.routes"));
app.use("/api/captive-portal-settings", require("./routes/captivePortalSetting.routes"));
app.use("/api/cashflow-categories", require("./routes/cashflowCategory.routes"));
app.use("/api/cashflows", require("./routes/cashflow.routes"));
app.use("/api/coa-requests", require("./routes/coaRequest.routes"));
app.use("/api/data-usage", require("./routes/dataUsageByPeriod.routes"));
app.use("/api/departments", require("./routes/department.routes"));
app.use("/api/documents", require("./routes/document.routes"));
app.use("/api/email-deliveries", require("./routes/emailDelivery.routes"));
app.use("/api/email-templates", require("./routes/emailTemplate.routes"));
app.use("/api/failed-jobs", require("./routes/failedJob.routes"));
app.use("/api/import-faileds", require("./routes/importFailed.routes"));
app.use("/api/inventory-assignments", require("./routes/inventoryAssignment.routes"));
app.use("/api/inventory-categories", require("./routes/inventoryCategory.routes"));
app.use("/api/inventory-items", require("./routes/inventoryItem.routes"));
app.use("/api/inventory-suppliers", require("./routes/inventorySupplier.routes"));
app.use("/api/invoice-package-extra-fees", require("./routes/invoicePackageExtraFee.routes"));
app.use("/api/invoice-setting-items", require("./routes/invoiceSettingItem.routes"));
app.use("/api/invoice-settings", require("./routes/invoiceSetting.routes"));
app.use("/api/invoices", require("./routes/invoice.routes"));
app.use("/api/ip-address-subscribers", require("./routes/ipAddressSubscriber.routes"));
app.use("/api/ip-addresses", require("./routes/ipAddress.routes"));
app.use("/api/ip-pools", require("./routes/ipPool.routes"));
app.use("/api/isps", require("./routes/isp.routes"));
app.use("/api/jobs", require("./routes/job.routes"));
app.use("/api/migrations", require("./routes/migration.routes"));


















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
