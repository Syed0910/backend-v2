const CoaRequest = require("../models/CoaRequest.model");

// Get latest CoA requests with optional limit (default 100)
exports.getAllCoaRequests = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const requests = await CoaRequest.findAll({
      order: [["created_at", "DESC"]],
      limit,
    });

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error("Error fetching CoA requests:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch CoA requests",
      error: error.message,
    });
  }
};

// Get CoA requests by subscriber ID
exports.getCoaRequestsBySubscriberId = async (req, res) => {
  try {
    const { subscriberId } = req.params;

    if (!subscriberId) {
      return res.status(400).json({
        success: false,
        message: "Subscriber ID is required",
      });
    }

    const requests = await CoaRequest.findAll({
      where: { subscriber_id: subscriberId },
      order: [["created_at", "DESC"]],
      limit: 200,
    });

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error("Error fetching CoA requests by subscriber ID:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch CoA requests by subscriber ID",
      error: error.message,
    });
  }
};

// Get CoA requests by username
exports.getCoaRequestsByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required",
      });
    }

    const requests = await CoaRequest.findAll({
      where: { action_by_username: username },
      order: [["created_at", "DESC"]],
      limit: 200,
    });

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error("Error fetching CoA requests by username:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch CoA requests by username",
      error: error.message,
    });
  }
};

// Get a single CoA request by ID
exports.getCoaRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await CoaRequest.findByPk(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: `No CoA request found with ID ${id}`,
      });
    }

    res.status(200).json({ success: true, data: request });
  } catch (error) {
    console.error("Error fetching CoA request by ID:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch CoA request",
      error: error.message,
    });
  }
};

// Create a new CoA request (optional)
exports.createCoaRequest = async (req, res) => {
  try {
    const newRequest = await CoaRequest.create(req.body);

    res.status(201).json({
      success: true,
      message: "CoA request created successfully",
      data: newRequest,
    });
  } catch (error) {
    console.error("Error creating CoA request:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create CoA request",
      error: error.message,
    });
  }
};

// Update a CoA request by ID
exports.updateCoaRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await CoaRequest.findByPk(id);
    if (!request) {
      return res.status(404).json({
        success: false,
        message: `No CoA request found with ID ${id}`,
      });
    }

    await request.update(req.body);

    res.status(200).json({
      success: true,
      message: "CoA request updated successfully",
      data: request,
    });
  } catch (error) {
    console.error("Error updating CoA request:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update CoA request",
      error: error.message,
    });
  }
};

// Delete a CoA request by ID
exports.deleteCoaRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await CoaRequest.findByPk(id);
    if (!request) {
      return res.status(404).json({
        success: false,
        message: `No CoA request found with ID ${id}`,
      });
    }

    await request.destroy();

    res.status(200).json({
      success: true,
      message: "CoA request deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting CoA request:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to delete CoA request",
      error: error.message,
    });
  }
};
