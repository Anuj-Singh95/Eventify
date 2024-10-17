import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp.jsx";
// import LogIn from "./Pages/LogIn/LogIn";
import LogIn from "./Pages/LogIn/LogIn.jsx";
// import EventPage from "./Pages/Events/EventPage";
// import CreateEvent from "./Pages/CreateEvent/CreateEvent";
// import Contact from "./Component/Contact us/Contact";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ChangeEvents from "./Pages/ChangeEvent/ChangeEvent.jsx";
import CreateEvent from "./Pages/CreateEvent/CreateEvent.jsx";
import ListedEvents from "./Pages/ListedEvents/ListedEvents.jsx";
import EditEventForm from "./Pages/EditEventPage/EditEventForm.jsx";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      console.log("bye");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/events" element={<ListedEvents />}></Route>
        <Route path="/change-events" element={<ChangeEvents />}></Route>
        <Route path="/create-event" element={<CreateEvent />}></Route>
        <Route path="/admin/events/edit/:eventId" element={<EditEventForm />} />
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
        <Route path="/login" element={<LogIn />}></Route>
        {/* <Route path="/events" element={<EventPage />}></Route>
        <Route path="/create-event" element={<CreateEvent />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
