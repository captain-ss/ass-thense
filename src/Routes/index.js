import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./allRoutes";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Index = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.component}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default Index;
