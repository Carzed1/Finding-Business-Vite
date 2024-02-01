// components/QuestionForm.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful submission
    onSubmit(question);
    setQuestion("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto mt-8 p-4 bg-white rounded shadow-md"
    >
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question..."
        className="w-full h-24 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </motion.button>
    </motion.form>
  );
};

export default QuestionForm;
