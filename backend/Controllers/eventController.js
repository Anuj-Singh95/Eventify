const Event = require("./../Models/eventModel");
const Registration = require("./../Models/registrationModel");

const createEvent = async (req, res) => {
  try {
    const data = req.body;
    const event = new Event(data);
    await event.save();
    res.status(200).json({
      success: "true",
      message: "event has been successfully created",
      event,
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: `Error: ${error.message}`,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    const events = await Event.find().skip(skip).limit(limit);

    res.status(200).json({
      success: "true",
      events,
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: "Failed to Access Events",
    });
  }
};

const registerEvent = async (req, res) => {
  try {
    const registration = new Registration({
      user_id: req.user.id,
      event_id: req.body.eventId,
    });
    const result = await registration.save();
    res.status(200).json({
      success: "true",
      message: "Sucessfully registered",
      registationDetails: result,
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: `error: ${error.message}`,
    });
  }
};

const alreadyRegisteredEvents = async (req, res) => {
  try {
    const registeredEvents = await Registration.find({ user_id: req.user.id });
    res.status(200).json({
      success: "true",
      registeredEvents,
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: `error: ${error.message}`,
    });
  }
};

const cancelRegistration = async (req, res) => {
  try {
    const response = await Registration.deleteOne({
      user_id: req.user.id,
      event_id: req.body.eventId,
    });
    res.status(200).json({
      success: "true",
      message: "Registration has been canceled",
      deleted: response,
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: `error: ${error.message}`,
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    res.status(200).json({
      success: "true",
      event,
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: "Failed to Access Events",
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.eventId,
      req.body
    );

    res.status(200).json({
      success: "true",
      updatedEvent,
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: `error: ${error.message}`,
    });
  }
};
module.exports = {
  getEventById,
  createEvent,
  getAllEvents,
  registerEvent,
  alreadyRegisteredEvents,
  cancelRegistration,
  updateEvent,
};
