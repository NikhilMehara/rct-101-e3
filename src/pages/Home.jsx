import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products/Products";

const Home = () => {
  return <div>
    {/* Code here */}
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/products" element={<Products />} />
     </Routes>
    </div>;
};

export default Home;
