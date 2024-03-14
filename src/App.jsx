import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";

import Login from "./pages/Login";
import { LastFmUserData } from "./pages/LastFmUserData";
import RutaProtegida from "./layout/RutaProtegida";
import Register from "./pages/Register";

import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider> 
     <Routes>
      <Route path="/" element={<AuthLayout/>}>
        <Route index element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
      <Route path="/lastFmUserData" element={<RutaProtegida/>}/>
     </Routes>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

/* 
      <LastFmUserData
        userName={`${process.env.REACT_APP_CLIENT_ID}`}
      />
      <LastFmData
        userName={`${process.env.REACT_APP_CLIENT_ID}`}
        apiKey={`${process.env.REACT_APP_API_KEY}`}
      />
*/
