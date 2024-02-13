import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";

import Login from "./pages/Login";
import { LastFmUserData } from "./pages/LastFmUserData";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<AuthLayout/>}>
        <Route index element={<Login/>}/>
        <Route path="LastFmUserData" element={<LastFmUserData/>}/>
      </Route>
     </Routes>
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
