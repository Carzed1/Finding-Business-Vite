import React, { useState } from "react";
import { motion } from "framer-motion";
import unitecoImg from "../../assets/uniteco.jpg";
import capitalismImg from "../../assets/capitalism.jpg";
import aiImg from "../../assets/ai.jpg";
import accountancyImg from "../../assets/accountancy.jpg";

const courseList = [
  {
    title: "Unit Economics",
    imgSrc: unitecoImg,
    description:
      "Understand how analyzing costs and revenues per unit impacts business profitability and informs strategic decision-making for sustainable growth and efficient resource allocation.",
  },
  {
    title: "Capitalism and Its Fundamentals",
    imgSrc: capitalismImg,
    description:
      "Explore the economic framework of capitalism, crucial for businesses navigating free markets, understanding private property rights, competition dynamics, and governmental influences on commerce and entrepreneurship..",
  },
  {
    title: "AI For Business",
    imgSrc: aiImg,
    description:
      "Delve into AI's transformative potential for businesses, empowering them with machine learning, natural language processing, and computer vision capabilities to enhance operations, customer experiences, and innovation strategies.",
  },
  {
    title: "Accountancy and Sales Techniques",
    imgSrc: accountancyImg,
    description:
      "Mastering accounting essentials is vital for businesses in financial management, compliance, and informed decision-making. Understand financial statements, analysis techniques, and regulatory requirements for sound business stewardship.",
  },
];

const Consult = () => {
  const [isHovered, setIsHovered] = useState(false);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAlert = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-5xl font-bold text mb-5 ">Expert Courses</h1>
        <button
          onClick={handleAlert}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Book One on One Expert Counselling Session
        </button>
      </div>
      <div className="flex justify-around">
        {courseList.map((course) => (
          <motion.div
            key={course.title}
            variants={item}
            whileHover={{ scale: 1.1 }}
            className={`group flex flex-col items-center gap-4 bg-white p-4 rounded-md transition-all duration-300 ${
              isHovered ? "expanded" : ""
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <motion.img
              src={course.imgSrc}
              alt={`Course ${course.title}`}
              style={{ width: "180px", height: "180px" }}
              className={`text-4xl text-Teal ${
                isHovered ? "filter-blur-title" : ""
              }`}
            />
            <div>
              <div className="text-lg font-bold">{course.title}</div>{" "}
              {/* Display course title with bold and bigger font */}
            </div>
            {isHovered && (
              <div className="text-sm text-gray group-hover:filter-none">
                {course.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Consult;
