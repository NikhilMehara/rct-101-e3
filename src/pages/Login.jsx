// import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

   const {isAuth,setIsAuth} = useContext(AuthContext);
   const navigate = useNavigate();
   const [data, setData] = useState({});

   const handleChange =(e)=>{
      let name = e.target.name;
      setData({...data,[name]:e.target.value});
      console.log(data);
   }

  const handleSubmit = (e)=>{
      e.preventDefault();
      setIsAuth(!isAuth);
      navigate("/");
  }

  return (
    <div>
      <input type="email" name="email"  data-cy="login-email" onChange={handleChange}/>
      <input type="password" name="password"  data-cy="login-password" onChange={handleChange}/>
      <button onClick={handleSubmit} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
