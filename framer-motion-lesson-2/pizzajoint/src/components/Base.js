import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

////1.we create an object called containerVariants
const containerVariants = {
  //// 2.the hidden could be any name which serves as a variable that stores stuffs
  ///2.this serves as the initial state ie the properties stored in it makes it hidden
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  //  3. the visible also is a var that represents the state at which the thing becomes visible
  // 3. after this lets apply these properties inside the div that we want to add it to
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 1.5 },
  },
};

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
// this is the next variants
const nextVariants = {
  hidden: {
    initial: { x: "-100vw" },
  },
  vissible: {
    animate: { x: 0 },
    transition: { type: "spring", stiffness: 120 },
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      //4. this is where we want to add it to so we use the  variants ={containerVariants} this brings the whole variables properties onside this div
      variants={containerVariants}
      // 5. now lets declare them. the  initial="" is a method that recieves what we want to do initially or the first time we run the site. in this case we use the hidden variable which has the properties that make smt hidden
      initial="hidden"
      // 6. the animate also takes the variable visible ,which makes the site visible
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.5, originX: 0, color: "yellow" }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
          // transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
