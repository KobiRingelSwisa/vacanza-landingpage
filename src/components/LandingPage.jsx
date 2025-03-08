import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/VACANZA-removebg-preview.png";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center text-center p-8 text-white font-serif">
      {/* Hero Section: */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <img
          src={logo}
          alt="Vacanza Logo"
          className="w-40 mx-auto mb-6 drop-shadow-lg bg-white rounded-full border-yellow-400"
        />
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400 italic">
          Escape. Explore. Experience
        </h1>
        <p className="text-lg mt-4 opacity-90 text-gray-300">
          Your AI-powered all-in-one travel planner - flights, hotels, car
          rentals & itineraries in one app!
        </p>
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-3 shadow-lg w-full max-w-md border border-yellow-400">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-none focus:ring-0 p-3 rounded-l-full text-white bg-transparent placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-100 text-black font-semibold px-8 py-3 rounded-full border border-yellow-400 hover:shadow-yellow-50 transition-all">
              Join Waitlist
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-yellow-400">
          Why Choose Vacanza ?
        </h2>
        <div className="">
          {[
            {
              title: "AI-Powered Planner",
              desc: "Smart recommendations tailored to you.",
            },
            {
              title: "One-Click Booking",
              desc: "Flights, hotels & cars in one place.",
            },
            {
              title: "Personalized Itineraries",
              desc: "Discover hidden gems effortlessly.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg border border-yellow-400"
            >
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-md mt-3 opacity-90 text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className=" mt-20 max-w-4xl">
        <h2 className="text-3xl font-bold text-yellow-400">How It Works</h2>
        <ol className="mt-6 space-y-6">
          {[
            "Tell us your dream trip – destination, budget, preferences.",
            "Vacanza AI creates your perfect itinerary.",
            "Book everything in one tap – flights, hotels, cars.",
            "Travel stress-free with real-time assistance.",
          ].map((step, index) => (
            <li
              key={index}
              className="text-lg flex items-center space-x-3 text-gray-300"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-50 text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-md">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Call To Action */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-yellow-400">
          Elevate Your Travel Experience
        </h2>
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-3 shadow-lg w-full max-w-md border border-yellow-400">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-none focus:ring-0 p-3 rounded-l-full text-white bg-transparent placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-50 text-black font-semibold px-8 py-3 rounded-full border border-yellow-400 hover:shadow-yellow-400/40 transition-all">
              Request VIP Access
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=" mt-20 text-gray-400 text-md opacity-80">
        <p>© 2025 Vacanza. All rights reserved.</p>
        <p className="mt-3">
          Foolow us on{" "}
          <a href="#" className="text-yellow-400 hover:underline">
            Instagram
          </a>{" "}
          |{" "}
          <a href="#" className="text-yellow-400 hover:underline">
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
