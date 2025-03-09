import { div } from "framer-motion/client";
import React, { useState } from "react";

function TravelQuiz() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ flight: "", stay: "", vip: "" });

  const handleNext = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="mt-10 max-w-lg bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-400">
      <h2 className="text-2xl font-bold text-yellow-400">
        What's Your Favorite Travel Style?
      </h2>
      {!quizCompleted ? (
        <div className="mt-6">
          {step === 1 && (
            <div>
              <p className="text-lg text-gray-300">How do you prefer to fly?</p>
              <button
                className="mt-4 w-full bg-yellow-400 text-black p-3 rounded-md"
                onClick={() => handleNext("flight", "Private Jet")}
              >
                Private Jet
              </button>
              <button
                className="mt-4 w-full bg-yellow-400 text-black p-3 rounded-md"
                onClick={() => handleNext("flight", "First Class")}
              >
                First class
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="text-lg text-gray-300">
                Where would you rather stay?
              </p>
              <button
                className="mt-4 w-full bg-yellow-400 text-black p-3 rounded-md"
                onClick={() => handleNext("stay", "Luxury Villa")}
              >
                Luxury Villa
              </button>
              <button
                className="mt-4 w-full bg-yellow-400 text-black p-3 rounded-md"
                onClick={() => handleNext("stay", "5-Star Hotel")}
              >
                5-Star Hotel
              </button>
            </div>
          )}
          {step === 3 && (
            <div>
              <p className="text-lg text-gray-300">
                Do you want VIP event access?
              </p>
              <button
                className="mt-4 w-full bg-yellow-400 text-black p-3 rounded-md"
                onClick={() => handleNext("vip", "Yes")}
              >
                Yes
              </button>
              <button
                className="mt-4 w-full bg-yellow-400 text-black p-3 rounded-md"
                onClick={() => handleNext("vip", "No")}
              >
                No
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-6">
          <p className="text-lg text-gray-300">Your ideal travel experience:</p>
          <p className="mt-3 text-xl text-yellow-400 font-bold">
            <ul>
              <li>{answers.flight}</li>
              <li>{answers.stay}</li>
              <li>
                {answers.vip === "Yes"
                  ? "with VIP Events"
                  : "without VIP Events"}
              </li>
            </ul>
          </p>
          <p className="mt-3 text-gray-400">
            Join Vacanza for tailored luxury experiences.
          </p>
          <button className="mt-4 w-full bg-yellow-400 text-black p-3 rounded-md">
            Request VIP Access
          </button>
        </div>
      )}
    </div>
  );
}

export default TravelQuiz;
