import React from "react";
import Header from "./Header";
import Features from "./Features";
import Agenda from "./Agenda";
import Footer from "./Footer";
import Counter from "./Counter";
import TravelQuiz from "./TravelQuiz";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center text-center p-8 text-white font-serif">
      <Header />
      <Counter />
      <Features />
      <Agenda />
      <TravelQuiz />
      <Footer />
    </div>
  );
}

export default LandingPage;
