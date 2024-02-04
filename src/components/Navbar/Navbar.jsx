import React, { useEffect, useState } from "react";
import Modal from "../container/Modal";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const [showModal, setShowModal] = useState(0);
  // const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  const handleLoginClick = () => {
    setShowModal(1);
  };

  const handleSignUpClick = () => {
    setShowModal(2);
  };

  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-2 ml-8">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-4xl text-rose-700 uppercase tracking-wide font-bold">
              Finding Business
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <div className="flex gap-4">
            <button
              className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray bg-white"
              style={{ width: "120px", fontSize: "16px" }}
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray bg-green-400"
              style={{ width: "120px", fontSize: "16px" }}
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </motion.div>
          )}

          <Modal type={showModal} onClose={() => setShowModal(0)}>
            {/* You can include your Login component here */}
            {/* Add your login form or login-related content here */}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
