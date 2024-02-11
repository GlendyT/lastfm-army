import { Link } from "react-router-dom";

import { LastFmData } from "../components/LastFmData";

const Login = ({apiKey}) => {
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

      <Link
        className="block text-center my-5 text-slate-500 uppercase text-sm"
        to="https://www.last.fm/es/join"
       >
        No tienes una Cuenta? Registrate
       </Link>
       <LastFmData
        apiKey={`${process.env.REACT_APP_API_KEY}`}
       />

    </>
  );
};

export default Login;

/*   

        
        */