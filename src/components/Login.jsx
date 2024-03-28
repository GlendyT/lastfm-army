import React, { useState } from "react";
import Register from "./Register";

const LastFmUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [error, setError] = useState("");

  const fetchUserInfo = async () => {
    try {
      const apiKey = `${process.env.REACT_APP_API_KEY}`;
      //const url = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${usernameInput}&api_key=${apiKey}&format=json`;
      const url = `${process.env.REACT_APP_PUBLIC_URL}?method=user.gettopartists&user=${usernameInput}&api_key=${apiKey}&format=json`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        // Handle error if there is one
        setError(data.message);
      } else {
        //setUserInfo(data.topartists); //.artist[0]
        const topArtists = data.topartists.artist.slice(0, 8);
        setUserInfo(topArtists);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      setError("Error fetching user info. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    fetchUserInfo();
  };

  return (
    <div className="p-5">
    <form onSubmit={handleSubmit} className="text-center">
      <input
        type="text"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder="Enter Last.fm username"
        required
      />
      <button 
      type="submit"
      className="rounded-md text-white bg-black p-1"
      >Get User Info</button>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {userInfo ? (
        <>
          <p>Most listened artist:</p>
          <p>
            {" "}
            {userInfo.map((artist, index) => (
              <li key={index}>
                Artist Name: {artist.name} {""}
                All time Scrobles: {artist.playcount}
                
              </li>
              
            ))}
          </p>
        </>
      ) : (
        <p>No user information found</p>
      )}
    </form>
</div> 
  );
};

export default LastFmUserInfo;
