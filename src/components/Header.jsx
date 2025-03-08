import { motion } from "framer-motion";
import logo from "../assets/VACANZA-removebg-preview.png";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl "
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
        Your AI-powered all-in-one travel planner - flights, hotels, car rentals
        & itineraries in one app!
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
  );
}

export default Header;
