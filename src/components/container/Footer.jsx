import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-5"
    >
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  place-items-start gap-8 text-white">
        <div className="ml-8 text-left">
          <div className="font-bold mb-2 text-center">Get Started</div>
          <p className="text-sm leading-7 text-center">
          Hope, This site will give you better exposure and understanding of business/startups</p>
        </div>
        <div className="text-center">
          <div className="font-bold mb-2 text-center">Copyright</div>
          <p className="text-sm leading-7 text-center">
          &copy; 2024 Your Website. All rights reserved by Area51.
          </p>
        </div>
      
        <div className="text-right">
          <div className="font-bold mb-4 text-center">Follow us</div>

          <div className="flex gap-4 mt-2 text-center">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;





