/**
 * Entry point for the Express backend API
 * ---------------------------------------
 * This server connects to the MySQL database using Sequelize
 * and exposes API routes for subscribers, packages, users, NAS, etc.
 */

require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database"); // Sequelize DB connection

// ------------------------- Initialize App ------------------------
const app = express();

// ------------------------- Middleware ---------------------------
// Parse JSON request bodies
app.use(express.json());

// Configure CORS to allow requests from frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5174", // configurable frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ------------------------- Import Routes -------------------------
const subscriberRoutes = require("./routes/subscriber.routes");
const packageRoutes = require("./routes/package.routes");
const radacctRoutes = require("./routes/radacct.routes");

const ledgerRoutes = require("./routes/Ledger.routes");
const radpostauthRoutes = require("./routes/radpostauth.routes");

const nasRoutes = require("./routes/nas.routes"); // NAS routes



// ------------------------- Health Check -------------------------
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is healthy" });
});


// ------------------------- Routes -------------------------------

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
app.use("/api/ledgers", require("./routes/Ledger.routes"));
app.use("/api/radpostauth", require("./routes/radpostauth.routes"));
app.use("/api/radgroupcheck", require("./routes/radgroupcheck.routes"));
app.use("/api/model-has-permissions", require("./routes/modelHasPermission.routes"));
app.use("/api/model-has-roles", require("./routes/modelHasRole.routes"));
app.use("/api/nas-details", require("./routes/nasDetails.routes"));
app.use("/api/nas-groups", require("./routes/nasGroups.routes"));
app.use("/api/notices", require("./routes/notice.routes"));
app.use("/api/otps", require("./routes/otp.routes"));
app.use("/api/package-accounting", require("./routes/packageAccounting.routes"));
app.use("/api/package-extra-fees", require("./routes/packageExtraFee.routes"));
app.use("/api/password-reset-tokens", require("./routes/passwordResetToken.routes"));
app.use("/api/payments", require("./routes/payments.routes"));
app.use("/api/permissions", require("./routes/permissions.routes"));
app.use("/api/personal-access-tokens", require("./routes/personalAccessToken.routes"));
app.use("/api/pgw-transactions", require("./routes/pgwTransaction.routes"));
app.use("/api/predictions", require("./routes/prediction.routes"));
app.use("/api/prepaid-cards", require("./routes/prepaidCard.routes"));
app.use("/api/prepaid-vouchers", require("./routes/prepaidVoucher.routes"));
app.use("/api/radacct-archive", require("./routes/radacctArchive.routes"));
app.use("/api/radcheck", require("./routes/radcheck.routes"));
app.use("/api/radpostauth-archive", require("./routes/radpostauthArchive.routes"));
app.use("/api/radreply", require("./routes/radreply.routes"));
app.use("/api/radusergroup", require("./routes/radusergroup.routes"));
app.use("/api/reseller_distributions", require("./routes/reseller_distribution.routes"));
app.use("/api/restricted_connections", require("./routes/restricted_connection.routes"));
app.use("/api/role-permissions", require("./routes/roleHasPermission.routes"));
app.use("/api/roles", require("./routes/role.routes"));
app.use("/api/sessions", require("./routes/session.routes"));
app.use("/api/settings", require("./routes/settings.routes"));
app.use("/api/sms_deliveries", require("./routes/smsDeliveries.routes"));
app.use("/api/sms_post_settings", require("./routes/smsPostSettings.routes"));
app.use("/api/sms_templates", require("./routes/smsTemplates.routes"));
app.use("/api/subscriber_mac_addresses", require("./routes/subscriberMacAddress.routes"));
app.use("/api/subscriber-macaddresses", require("./routes/subscriberMacaddresses.routes"));
app.use("/api/subscriber-services", require("./routes/subscriberServices.routes"));
app.use("/api/team-invitations", require("./routes/teamInvitation.routes"));
app.use("/api/team-user", require("./routes/teamUser.routes"));
app.use("/api/teams", require("./routes/team.routes"));
app.use("/api/third-party-invoices", require("./routes/thirdPartyInvoice.routes"));
app.use("/api/ticket-categories", require("./routes/ticketCategory.routes"));
app.use("/api/ticket-notes", require("./routes/ticketNote.routes"));
app.use("/api/ticket-replies", require("./routes/ticketReply.routes"));
app.use("/api/tickets", require("./routes/ticket.routes"));
app.use("/api/vendor-notices", require("./routes/vendorNotice.routes"));
app.use("/api/voucher-cards", require("./routes/voucherCard.routes"));
app.use("/api/vouchers", require("./routes/vouchers.routes"));
app.use("/api/nas", require("./routes/nas.routes"));
app.use("/api/radgroupreply", require("./routes/radGroupReply.routes"));

app.use("/api/job-batches", require("./routes/jobBatch.routes"));

app.use("/api/users", require("./routes/user.routes")); 
// ------------------------- Start Server -------------------------


const startServer = async () => {
  try {
    // Test DB connection
    await sequelize.authenticate();
    console.log("✅ Database connected");

    // Sync models
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: true }); // auto-update in dev
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
