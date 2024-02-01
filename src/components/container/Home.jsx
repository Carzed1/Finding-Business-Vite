import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 2,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.5,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.5,
      },
    },
  };

  const logosVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.5,
      },
    },
  };

  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start("visible");
  };

  React.useEffect(() => {
    startAnimation();
  }, []); // Run the animation on component mount

  return (
    <div className="section" id="home">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="md:flex items-center justify-center"
      >
        <motion.div variants={textVariants}>
          <div>
            <div className="font-bold text-2xl text-Teal mb-4">
              Your Business Partner
            </div>
            <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
              This is <br /> the new way <br /> to find business location
            </div>
            <p className="text-xl leading-7 text-pink-900 max-w-sm mt-5">
              Redefine How You Grow Your Business
            </p>
            <div className="mt-6">
              <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                Get Started
              </button>
              <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
                Discover
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div variants={imageVariants} className="md:w-[60%]">
          <img src={hero} alt="" />
        </motion.div>
      </motion.div>

      

    
    </div>
  );
};

export default Home;
