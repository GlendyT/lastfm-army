import Register from "../pages/Register"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AuthLast from "../authorization/AuthLast";


const Login = () => {

  const {hola} = useAuth();

  console.log(hola);



  return (
    <>
      <h1 className="text-purple-600 font-black text-6xl capitalize">
        Login and start your journey of scrobles with
        <span className="text-slate-700">LASTFM</span>
      </h1>

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
      >
        <input
          type="submit"
          value="Login with your LASTFM"
          className="bg-purple-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-purple-800 transition-colors"
        />
      </form>
      <AuthLast
       apiKey={process.env.REACT_APP_API_KEY}
      />
      <Register/>
    </>
  );
};

export default Login;

/*   
       <LastFmData
        userName={`${process.env.REACT_APP_CLIENT_ID}`}
        apiKey={`${process.env.REACT_APP_API_KEY}`}
      />
        
        */
