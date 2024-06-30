import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import Modal from "./Modal";

const QuizOffer = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      question: "What does G stand for?",
      options: ["Gut", "Greed", "Gain", "Gratitude"],
      coupons: ["GUT10", "GREED10", "GAIN10", "GRAT10"],
    },
    // Add more questions as needed
  ];

  const handleOptionSelect = (option, coupon) => {
    setSelectedOption(option);
    setCoupon(coupon);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Handle end of quiz
    }
  };

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold mb-4 text-[#74DF00] animate-bounce">
          Get Your Personalized Diet Plan!
        </h2>
        <p className="text-lg mb-8 animate-fade-in">
          Take our quiz to receive a customized diet plan tailored to your
          fitness goals. It's quick, easy, and free!
        </p>
        <div className="w-full md:w-1/2">
          <CSSTransition
            in={!isModalOpen}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="quiz-card p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                {questions[questionIndex].question}
              </h3>
              <div className="flex flex-col gap-4">
                {questions[questionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      handleOptionSelect(
                        option,
                        questions[questionIndex].coupons[idx]
                      )
                    }
                    className="py-3 px-4 rounded-md border border-gray-300 hover:bg-[#74DF00] hover:text-white transition-colors duration-300"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>

      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal onClose={handleModalClose}>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">
              You selected: {selectedOption}
            </h3>
            <p className="text-lg mb-4">
              Congratulations! You have received a coupon code:
            </p>
            <div className="bg-gray-200 p-4 rounded-md text-lg font-bold">
              {coupon}
            </div>
            <button
              onClick={handleModalClose}
              className="mt-6 bg-[#74DF00] text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </Modal>
      </CSSTransition>
    </section>
  );
};

export default QuizOffer;
