import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import EventCard from "./EventCard";
import Loader from "../../Component/Loader/Loader";

const EventPage = () => {
  // This is dummy data. In a real application, you'd fetch this from your API

  console.log("event page rerender");
  const [isLoading, setIsLoading] = useState(true);
  const [regOrCancelReg, setRegOrCancelReg] = useState(true);

  const onRegOrCancelRegHandler = () => {
    setRegOrCancelReg(!regOrCancelReg);
  };
  const onloading = (value) => {
    setIsLoading(value);
  };

  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const getEvents = async () => {
    let result = await fetch("http://localhost:5000/api/v1/events", {
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    result = await result.json();
    setEvents(result.events);
    setIsLoading(false);
    // console.log(result);
  };

  const getRegisteredEvents = async () => {
    let result = await fetch("http://localhost:5000/api/v1/registered-events", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
        contentType: "application/json",
      },
    });
    result = await result.json();
    setRegisteredEvents(result.registeredEvents);
    // setIsLoading(false);
    // console.log(result);
  };

  useEffect(() => {
    getEvents();
  }, []);
  useEffect(() => {
    getRegisteredEvents();
  }, [regOrCancelReg]);
  // const events = [
  //   {
  //     eventName: "Tech Conference 2024",
  //     description: "Join industry leaders for the latest in tech innovation.",
  //     eventType: "Conference",
  //     date: new Date("2024-06-15"),
  //     startTime: "09:00 AM",
  //     endTime: "05:00 PM",
  //     location: "San Francisco Convention Center",
  //     capacity: 1000,
  //     organizerName: "TechCorp",
  //     contactMobileNo: 1234567890,
  //     contactEmail: "info@techconference.com",
  //     imageUrl: "/api/placeholder/800/600",
  //   },
  //   {
  //     eventName: "Marketing Workshop",
  //     description: "Learn cutting-edge digital marketing strategies.",
  //     eventType: "Workshop",
  //     date: new Date("2024-07-08"),
  //     startTime: "10:00 AM",
  //     endTime: "03:00 PM",
  //     location: "New York Business Center",
  //     capacity: 100,
  //     organizerName: "Marketing Pros",
  //     contactMobileNo: 9876543210,
  //     contactEmail: "contact@marketingworkshop.com",
  //     imageUrl: "/api/placeholder/700/500",
  //   },
  //   {
  //     eventName: "Startup Networking Night",
  //     description: "Connect with fellow entrepreneurs and investors.",
  //     eventType: "Networking",
  //     date: new Date("2024-08-03"),
  //     startTime: "07:00 PM",
  //     endTime: "10:00 PM",
  //     location: "Austin Startup Hub",
  //     capacity: 200,
  //     organizerName: "Startup Austin",
  //     contactMobileNo: 5551234567,
  //     contactEmail: "network@startupaustin.com",
  //     imageUrl: "/api/placeholder/750/550",
  //   },
  //   {
  //     eventName: "Design Thinking Seminar",
  //     description: "Explore innovative approaches to problem-solving.",
  //     eventType: "Seminar",
  //     date: new Date("2024-09-12"),
  //     startTime: "09:00 AM",
  //     endTime: "04:00 PM",
  //     location: "Chicago Innovation Center",
  //     capacity: 150,
  //     organizerName: "Design Innovators",
  //     contactMobileNo: 3129876543,
  //     contactEmail: "seminar@designinnovators.com",
  //     imageUrl: "/api/placeholder/720/540",
  //   },
  // ];

  if (isLoading == true) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <Navbar />
      {/* <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Eventify</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-purple-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-200">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-200">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
          Sign Up
        </button>
      </header> */}

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onLoadingHandler={onloading}
              registeredEvents={registeredEvents}
              onRegOrCancelReg={onRegOrCancelRegHandler}
            />
          ))}
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p>&copy; 2024 Eventify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EventPage;
