import React from "react";
import hero from "../../assets/hero.png";

import { motion, useAnimation } from "framer-motion";
// import SignUp from "./Signup";\
import Modal from "./Modal";
import NavLink from "../Navbar/NavLink";

const Home = () => {
  const [showModal, setShowModal] = React.useState(0);
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

  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start("visible");
  };

  React.useEffect(() => {
    startAnimation();
  }, []); // Run the animation on component mount

  {
    localStorage.setItem("showModal", showModal);
  }
  return (
    <>
      <div
        style={{ zIndex: 999 }}
        className="shadow-lg bg-Solitude fixed w-full top-0 left-0 z-20 "
      >
        {setShowModal && (
          <Modal type={showModal} onClose={() => setShowModal(0)}></Modal>
        )}
      </div>
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
              <p className="text-xl leading-7 text-amber-900 max-w-sm mt-5">
                Redefine How You Grow Your Business
              </p>
              <div className="mt-6">
                <button
                  className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm"
                  onClick={() => {
                    setShowModal(2);
                  }}
                >
                  Get Started
                </button>
                <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm text-center">
                  <NavLink id="6" href="community" link="Discover" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={imageVariants} className="md:w-[60%]">
            <img src={hero} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
