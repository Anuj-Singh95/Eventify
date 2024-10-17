import React, { useEffect, useState } from "react";
const EventCard = ({
  event,
  onLoadingHandler,
  registeredEvents,
  onRegOrCancelReg,
}) => {
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(registeredEvents);
  const {
    _id,
    eventName,
    description,
    eventType,
    date,
    startTime,
    endTime,
    location,
    capacity,
    organizerName,
    contactMobileNo,
    contactEmail,
    imageUrl,
  } = event;

  // console.log(registeredEvents);
  const checkRegistration = () => {
    let flag = 0;
    if (registeredEvents != []) {
      registeredEvents.forEach((registration) => {
        if (registration.event_id == _id) {
          // console.log("registered");
          // setIsRegistered(true);
          flag = 1;
          // return;
        }
      });
    }
    if (flag == 1) {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  };

  useEffect(() => {
    checkRegistration();
  }, [registeredEvents]);

  const registerHandler = async (e) => {
    console.log(e.target.value);
    onLoadingHandler(true);
    const token = localStorage.getItem("token");
    const data = {
      eventId: e.target.value,
    };
    let response = await fetch("http://localhost:5000/api/v1/register-event", {
      method: "POST",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);
    onLoadingHandler(false);
    alert("Successfully registered!");
    onRegOrCancelReg();
  };

  const cancelRegistrationHandler = async (e) => {
    console.log(e.target.value);
    onLoadingHandler(true);
    const token = localStorage.getItem("token");
    const data = {
      eventId: e.target.value,
    };
    let response = await fetch(
      "http://localhost:5000/api/v1/cancel-registration",
      {
        method: "POST",
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    response = await response.json();
    console.log(response);
    onLoadingHandler(false);
    alert("Event Registration has been cancelled!");
    console.log("registration cancelled");
    // setIsRegistered(true);
    onRegOrCancelReg();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* <img
        src={imageUrl}
        alt={eventName}
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">
          {eventName}
        </h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-600 mb-1">Type: {eventType}</p>
        <p className="text-gray-600 mb-1">
          Date: {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-1">
          Time: {startTime} - {endTime}
        </p>
        <p className="text-gray-600 mb-1">Location: {location}</p>
        <p className="text-gray-600 mb-1">Capacity: {capacity}</p>
        <p className="text-gray-600 mb-1">Organizer: {organizerName}</p>
        <p className="text-gray-600 mb-1">Contact: {contactMobileNo}</p>
        <p className="text-gray-600 mb-1">Email: {contactEmail}</p>

        {isRegistered === false ? (
          <button
            value={_id}
            onClick={registerHandler}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Register Now
          </button>
        ) : (
          <button
            value={_id}
            onClick={cancelRegistrationHandler}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Cancel Registration
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
