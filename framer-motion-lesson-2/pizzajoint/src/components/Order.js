import React from "react";
// 2.number two explains animation of the dom removal of a div and animate it
//2. so we import the AnimatePresence property and use a useState to remove and edit it
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    // ONN LINE 13 IS WHERE WE WANT TO MAKE THE CHILDREN ELEMENT TO DELAY AND DISPLAY ITSELF
    // AFTER THE PARENT ELEMENTS ANIMATION AHS FULLY BEEN COMPLETED
    // NOTE THAT WE USE THE WHEN:{} PROPERTY AND THE ARGUMENT IS THE beforeChildren
    // we could also have the afterChildren which in this case displays the div before the transition staerts
    // note that the children properties are assiggned to the div that we want it to display after the parent transition has been completed
    transition: {
      type: "spring",
      // these can only be used with the spring
      // with a heigher mass it means it moves a bit slower and lower mass it means faster
      //u can try zero u will see the osolating is mooving faster from left to right
      mass: 0.2,
      // we use the damping force to make the dumping force a bit bigger
      //  to stop the opolation
      damping: 6,
      when: "beforeChildren",

      // by adding the staggerChildren it slows down the time it displays thechildren
      // after selecting your items
      staggerChildren: ".4",
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
