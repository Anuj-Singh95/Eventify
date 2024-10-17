import React, { useEffect } from "react";
import Navbar from "../../Component/Navbar";
import "./Home.css";
import { Calendar } from "lucide-react";
import workshopImage from "./../../assets/Workshop.jpg";
import auditoriumImage from "./../../assets/auditorium-img2.jpg";
import kietEpoqueImage from "./../../assets/kietepoque.jpeg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-page-container">
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          {/* <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 mr-2" />
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
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-200">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-200">
                    Meet-Up
                  </a>
                </li>
              </ul>
            </nav>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
              Login
            </button>
          </header> */}

          <main className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  {" "}
                  <span className="text-pink-800">C</span>reating magical
                  moments you'll treasure forever
                </h1>
                <p className="text-xl mb-8">
                  Beautiful layouts, customizable UI, great user experience, and
                  a customer-oriented approach.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Event preview"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-purple-600 font-semibold">
                    Corporate Meetups
                  </h3>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg mt-8">
                  <img
                    src={workshopImage}
                    alt="Event preview"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-purple-600 font-semibold">Workshops</h3>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <img
                    src={auditoriumImage}
                    alt="Event preview"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-purple-600 font-semibold">Conferences</h3>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg mt-8">
                  <img
                    src={kietEpoqueImage}
                    alt="Event preview"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-purple-600 font-semibold">
                    Extra Curricular Activities
                  </h3>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
