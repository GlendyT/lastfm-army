
import React, { useState, useEffect } from 'react';


export const AuthLast = ({apiKey}) => {
  const [token, setToken] = useState(null);
  const [authorized, setAuthorized] = useState(false);


  useEffect(() => {
    // Step 1: Get the request token
    const authorizeUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizedToken = urlParams.get('token');

    if (authorizedToken) {
        setToken(authorizedToken);
        setAuthorized(true);
        console.log('Authorized Token:', authorizedToken);

      
        try{ 
          const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getInfo&api_key=${apiKey}&format=json&token=${authorizedToken}`);
          const data = await response.json();
          console.log('User data:', data.user);
        } catch(error){
          console.error("Error getting user info:", error)
        }
        } else { 
          try {
            const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=auth.gettoken&api_key=${apiKey}&format=json`);
            const data = await response.json();
            const requestToken = data.token;
          

          const callbackPath = "/LastFmUserData";
          window.location.href = `http://www.last.fm/api/auth/?api_key=${apiKey}&token=${requestToken}&cb=${window.location.origin}${callbackPath}`;
        } catch (error) {
          console.error("Error getting request token:", error)
        }
      }
    };
    authorizeUser();
  }, [apiKey]);

  if (authorized) {
    return (
      <div>
        <h1>Authorized!</h1>
      </div>
    );
  }

  // Render loading spinner or other UI while waiting for authorization
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default AuthLast;

/*    fetch(`http://ws.audioscrobbler.com/2.0/?method=auth.gettoken&api_key=${apiKey}&format=json`)
      .then(response => response.json())
      .then(data => {
        const requestToken = data.token;
        setToken(requestToken);

        */