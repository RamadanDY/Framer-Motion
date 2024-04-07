import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  // 1. // use this hover if u want to have a limit
  // hover: {
  //   //  using th key frame
  //   //the figures in the [] determines when to start in this case from one to 1.1 to one again to 1.1 aaaaaaup to 1 itself
  //   // what we just did will eventualy stop but if we use the yoyo property it makes it infinite
  //   scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
  //   textShadow: "0px 10px 10px rgb(255,255,255)",
  //   boxShadow: "0px 10px 10px rgb(255,255,255)",
  // },

  // 2.  no limit when u hover
  hover: {
    // we set it back to 1.1 and add atransition to it
    scale: 1.1,
    textShadow: "0px 10px 10px rgb(255,255,255)",
    boxShadow: "0px 10px 10px rgb(255,255,255)",
    transition: {
      // it wont stop if we use the infinity but will beat five times if we use 10
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.7, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 animate={{}}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          // animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
