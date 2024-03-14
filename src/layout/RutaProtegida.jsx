import { Outlet } from "react-router-dom";
import AuthLast from "../authorization/AuthLast";


const RutaProtegida = () => {

  return (
    <main className="p-10 flex-1">
        <Outlet/>
        
    </main>
  )
}

export default RutaProtegida