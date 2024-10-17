const mongoose = require("mongoose");

const RegistrationSchema = {
  user_id: {
    type: "ObjectId",
    ref: "Users", // References the Users collection
    required: true,
  },
  event_id: {
    type: "ObjectId",
    ref: "Events", // References the Events collection
    required: true,
  },
  registration_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
};

// Export the model
module.exports = mongoose.model("Registration", RegistrationSchema);
