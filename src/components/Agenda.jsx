function Agenda() {
  return (
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
    </div>
  );
}

export default Agenda;
