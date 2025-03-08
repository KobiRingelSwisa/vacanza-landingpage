function Features() {
  return (
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
  );
}

export default Features;
