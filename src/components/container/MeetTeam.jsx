// MeetTeam.js
import React from "react";
import { motion } from "framer-motion";

import shubham from "../../assets/shubham.jpg";
import karan from "../../assets/karan.jpg";
import naveen from "../../assets/naveen.jpg";
import deepak from "../../assets/deepak.jpg";

const teamMembers = [
  { name: "Shubham", image: shubham },
  { name: "Karan", image: karan },
  { name: "Naveen", image: naveen },
  { name: "Deepak", image: deepak },
];

const MeetTeam = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>

      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="m-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-44 h-44"
            />

            <p className="text-center mt-2">{member.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
