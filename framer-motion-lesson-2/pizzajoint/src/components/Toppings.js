import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
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
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.5, originX: 0, color: "yellow" }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
