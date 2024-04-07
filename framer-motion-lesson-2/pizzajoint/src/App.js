import React, { useState } from "react";
// 3. import this useLocation hook
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
// 2. import AnimatePresence
import { AnimatePresence } from "framer-motion";

function App() {
  // 4.we store the state inside this variable , whenever the route changes it stores it here
  const location = useLocation;
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  // we want to animate the switch routes using the dom so we wrap the AnimatePresence outside the switch
  return (
    <>
      <Header />
      {/* 1.we wrap it here, we now help it know when the route location changes and we will use the  
      useLocation hook to get info about your location  note that it is a hook inside the react dom */}
      <AnimatePresence>
        {/* 5. we now pass the location avariable inside the switch */}
        {/* 6. the final step is to add an exit animation to each and every route that we prefare in this case all
         first lets add the animation or how we want it to look ie using the containerVariants to create variants */}
        {/*7. we now use the exit property inside the Home.js component */}
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
