// Modified Subscriber Controller with Search Functionality
// This controller includes both CRUD operations and search functionality

const Subscriber = require("../models/subscriber.model");

// Create a new subscriber
exports.createSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.create(req.body);
    res.status(201).json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all subscribers
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.findAll();
    res.json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get subscriber by ID
exports.getSubscriberById = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByPk(req.params.id);
    if (!subscriber) return res.status(404).json({ message: "Subscriber not found" });
    res.json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update subscriber by ID
exports.updateSubscriber = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    const [updated] = await Subscriber.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: "Subscriber not found" });
    const updatedSubscriber = await Subscriber.findByPk(req.params.id);
    res.json(updatedSubscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete subscriber by ID
exports.deleteSubscriber = async (req, res) => {
  try {
    const deleted = await Subscriber.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Subscriber not found" });
    res.json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * Search subscribers by various fields
 * GET /api/subscribers/search?q={searchTerm}&limit={limit}&offset={offset}
 */
exports.searchSubscribers = async (req, res) => {
  try {
    const { q, limit = 10, offset = 0 } = req.query;
    console.log("🔥 Reached searchSubscribers with query:", req.query.q);
    if (!q || q.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const searchTerm = `%${q.trim()}%`;
    
    // Using Sequelize ORM to search across multiple fields
    const { Op } = require('sequelize');
    
    const whereClause = {
      [Op.or]: [
        { username: { [Op.like]: searchTerm } },
        { fullname: { [Op.like]: searchTerm } },
        { phone: { [Op.like]: searchTerm } },
        { email: { [Op.like]: searchTerm } },
        
      ]
    };

    // Get search results with pagination
    const { count, rows } = await Subscriber.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [
        // Priority order: exact username match first, then fullname, then others
        [Subscriber.sequelize.literal(`CASE WHEN username LIKE '${q.trim()}' THEN 1 WHEN fullname LIKE '${q.trim()}' THEN 2 ELSE 3 END`)],
        ['created_at', 'DESC']
      ]
    });

    res.json({
      success: true,
      data: rows,
      pagination: {
        total: count,
        limit: parseInt(limit),
        offset: parseInt(offset),
        hasMore: (parseInt(offset) + parseInt(limit)) < count
      }
    });

  } catch (error) {
    console.error('Error searching subscribers:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

/**
 * Get subscriber suggestions for autocomplete
 * GET /api/subscribers/suggestions?q={searchTerm}&limit={limit}
 */
exports.getSubscriberSuggestions = async (req, res) => {
  try {
    const { q, limit = 5 } = req.query;
    
    if (!q || q.trim().length < 2) {
      return res.json({
        success: true,
        data: []
      });
    }

    const searchTerm = `%${q.trim()}%`;
    
    // Using Sequelize ORM for suggestions
    const { Op } = require('sequelize');
    
    const whereClause = {
      [Op.or]: [
        { username: { [Op.like]: searchTerm } },
        { fullname: { [Op.like]: searchTerm } },
        { phone: { [Op.like]: searchTerm } }
      ]
    };

    const suggestions = await Subscriber.findAll({
      where: whereClause,
      attributes: ['id', 'username', 'fullname', 'phone', 'email'],
      limit: parseInt(limit),
      order: [
        // Priority order: exact username match first, then fullname, then phone
        [Subscriber.sequelize.literal(`CASE WHEN username LIKE '${q.trim()}' THEN 1 WHEN fullname LIKE '${q.trim()}' THEN 2 WHEN phone LIKE '${q.trim()}' THEN 3 ELSE 4 END`)],
        ['username', 'ASC']
      ]
    });

    res.json({
      success: true,
      data: suggestions
    });

  } catch (error) {
    console.error('Error getting subscriber suggestions:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

/**
 * Get subscriber by ID with detailed information
 * GET /api/subscribers/:id/details
 */
exports.getSubscriberDetails = async (req, res) => {
  try {
    const { id } = req.params;
    
    // If you have Package and Branch models, you can include them
    // For now, we'll just get the subscriber details
    const subscriber = await Subscriber.findByPk(id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found'
      });
    }

    res.json({
      success: true,
      data: subscriber
    });

  } catch (error) {
    console.error('Error fetching subscriber details:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// If you want to include package and branch details, you can use this version instead:
/*
exports.getSubscriberDetails = async (req, res) => {
  try {
    const { id } = req.params;
    
    const subscriber = await Subscriber.findByPk(id, {
      include: [
        {
          model: Package, // Make sure to import your Package model
          as: 'package',
          attributes: ['id', 'name', 'price']
        },
        {
          model: Branch, // Make sure to import your Branch model
          as: 'branch',
          attributes: ['id', 'name', 'address']
        }
      ]
    });

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found'
      });
    }

    res.json({
      success: true,
      data: subscriber
    });

  } catch (error) {
    console.error('Error fetching subscriber details:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};
*/

