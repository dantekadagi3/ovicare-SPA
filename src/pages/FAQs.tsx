import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is OvicaRe?",
    answer:
      "OvicaRe is a platform that connects users with various services and resources to enhance their reproductive health experience. It helps detect ovarian cyst symptoms early and bridges the gap between patients and doctors.",
  },
  {
    id: 2,
    question: "How do I create an account?",
    answer:
      "Click on the 'Register' button at the top right of the homepage. Fill in your details, and you'll be ready to access personalized care and support.",
  },
  {
    id: 3,
    question: "What are the benefits of using OvicaRe?",
    answer:
      "OvicaRe offers personalized symptom tracking, doctor connectivity, guidance for natural care, and even USSD access for women in remote areas.",
  },
];

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-pink-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-[var(--color-primary-pink)] mb-10">
          Frequently Asked Questions
        </h2>

        {questions.map((item) => (
          <div
            key={item.id}
            className="mb-6 border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(item.id)}
              className="w-full flex justify-between items-center p-4 bg-pink-50 hover:bg-pink-100 transition-colors duration-300"
            >
              <span className="text-lg font-semibold text-gray-800">
                {item.question}
              </span>
              {activeQuestion === item.id ? (
                <Minus className="text-[var(--color-primary-pink)]" />
              ) : (
                <Plus className="text-[var(--color-primary-pink)]" />
              )}
            </button>

            <AnimatePresence>
              {activeQuestion === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-700 bg-white"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
