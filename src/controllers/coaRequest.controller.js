const CoaRequest = require("../models/CoaRequest.model");

/**
 * ✅ Create a new CoA Request
 * POST /api/coa-requests
 */
exports.createCoaRequest = async (req, res) => {
  try {
    const newRequest = await CoaRequest.create(req.body);
    res.status(201).json({ success: true, data: newRequest });
  } catch (error) {
    console.error("Error creating CoA Request:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create CoA Request",
      error: error.message,
    });
  }
};

/**
 * ✅ Get all CoA Requests (limited to latest 100 by default)
 * GET /api/coa-requests?limit=100
 */
exports.getAllCoaRequests = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;

    const requests = await CoaRequest.findAll({
      order: [["id", "DESC"]],
      limit,
    });

    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error) {
    console.error("Error fetching CoA Requests:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch CoA Requests",
      error: error.message,
    });
  }
};

/**
 * ✅ Get a single CoA Request by ID
 * GET /api/coa-requests/:id
 */
exports.getCoaRequestById = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await CoaRequest.findByPk(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: `CoA Request with ID ${id} not found`,
      });
    }

    res.status(200).json({ success: true, data: request });
  } catch (error) {
    console.error("Error fetching CoA Request by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch CoA Request",
      error: error.message,
    });
  }
};

/**
 * ✅ Update a CoA Request by ID
 * PUT /api/coa-requests/:id
 */
exports.updateCoaRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await CoaRequest.findByPk(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: `CoA Request with ID ${id} not found`,
      });
    }

    await request.update(req.body);

    res.status(200).json({
      success: true,
      message: "CoA Request updated successfully",
      data: request,
    });
  } catch (error) {
    console.error("Error updating CoA Request:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update CoA Request",
      error: error.message,
    });
  }
};

/**
 * ✅ Delete a CoA Request by ID
 * DELETE /api/coa-requests/:id
 */
exports.deleteCoaRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await CoaRequest.findByPk(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: `CoA Request with ID ${id} not found`,
      });
    }

    await request.destroy();

    res.status(200).json({
      success: true,
      message: "CoA Request deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting CoA Request:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete CoA Request",
      error: error.message,
    });
  }
};
