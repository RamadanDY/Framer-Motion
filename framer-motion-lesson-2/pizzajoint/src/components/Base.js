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
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 10px 10px rgb(255,255,255)",
                boxShadow: "0px 10px 10px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
