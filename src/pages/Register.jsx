import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
          <Link
        className="block text-center my-5 text-slate-500 uppercase text-sm"
        to="https://www.last.fm/es/join"
        target="_blank"
       >
        No tienes una Cuenta? Registrate
       </Link>
    </div>
  )
}

export default Register