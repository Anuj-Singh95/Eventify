const express = require("express");
const {
  createEvent,
  getAllEvents,
  registerEvent,
  alreadyRegisteredEvents,
  cancelRegistration,
  getEventById,
  updateEvent,
} = require("../Controllers/eventController");
const {
  isAuthenticated,
  isAuthenticatedAdmin,
} = require("../Middleware/isAuthenticated");

const router = express.Router();

router.post("/create-event", isAuthenticatedAdmin, createEvent);
router.put("/events/:eventId", isAuthenticatedAdmin, updateEvent);
router.get("/events/:eventId", getEventById);

router.get("/events", getAllEvents);
router.post("/register-event", isAuthenticated, registerEvent);
router.get("/registered-events", isAuthenticated, alreadyRegisteredEvents);
router.post("/cancel-registration", isAuthenticated, cancelRegistration);

module.exports = router;
