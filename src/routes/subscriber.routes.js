const express = require("express");
const router = express.Router();
const subscriberController = require("../controllers/subscriber.controller");


router.get('/search', subscriberController.searchSubscribers);
router.get('/suggestions', subscriberController.getSubscriberSuggestions);
router.get('/:id/details', subscriberController.getSubscriberDetails);

router.post("/", subscriberController.createSubscriber); // create
router.get("/", subscriberController.getAllSubscribers); // read all
router.get("/:id", subscriberController.getSubscriberById); // read one
router.put("/:id", subscriberController.updateSubscriber);
router.put("/:id/password", subscriberController.updateSubscriber); // update
router.delete("/:id", subscriberController.deleteSubscriber); // delete

module.exports = router;
