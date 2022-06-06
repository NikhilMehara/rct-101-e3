import axios from "axios";
import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

   const {setIsAuth} = useContext(AuthContext);
   const navigate = useNavigate();
   const [data, setData] = useState({});

   useEffect(()=>{
     axios.get("https://reqres.in/api/login").then((r)=>console.log(r));
   },[])

   const handleChange =(e)=>{
     console.log(e.target);
      const {name,value} = e.target;
      setData([name]=[value]);
   }

  const handleSubmit = (e)=>{
      e.preventDefault();
      setIsAuth(true);
      navigate("/");
  }

  return (
    <div>
      <input type="email" name="email" value={data.email} data-cy="login-email" onChange={handleChange}/>
      <input type="password" name="password" value={data.password} data-cy="login-password" onChange={handleChange}/>
      <button onClick={handleSubmit} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
