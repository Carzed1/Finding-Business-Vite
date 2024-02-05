import React, { useState } from "react";
import { motion } from "framer-motion";

const categoryDescriptions = {
  "View Map of the Area":
    "Easily navigate your business surroundings with our interactive map, providing a visual overview of the area's key features and amenities.",
  "Finding Perfect Business Location":
    "Let our AI guide you to the optimal business location, considering factors like footfall, transportation, and demographics for strategic alignment.",
  "Get List of Similar Businesses ":
    "Receive a curated list of similar businesses in your area, empowering you with insights to understand your local competitive landscape.",
  "Analyse Transportation Facilities":
    "Ensure seamless accessibility by analyzing transportation facilities, including public transit and road networks, to enhance connectivity for customers and employees.",
};



const Categories = ({ icon, category }) => {
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

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className={`group flex items-center flex-col gap-4 bg-white p-8 rounded-md transition-all duration-300 ${isHovered ? 'expanded' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`text-4xl text-Teal ${isHovered ? "filter-blur-title" : ""}`}
      >
        {icon}
      </div>
      <div>{category}</div>
      {isHovered && (
        <div className="text-sm text-gray group-hover:filter-none">
          {categoryDescriptions[category]}
        </div>
      )}
    </motion.div>
  );
};

export default Categories;

