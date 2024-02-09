import { LastFmData } from "./components/LastFmData";
import { LastFmUserData} from "./components/LastFmUserData"
import React from "react";
function App() {
  return (
    <div className="App">
      <LastFmUserData
        userName={"JungCarly"}
      />
      <LastFmData
        userName={"JungCarly"}
        apiKey={`${process.env.REACT_APP_API_KEY}`}
      />

    </div>
  );
}

export default App;
