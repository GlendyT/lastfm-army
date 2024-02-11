import React, { useState, useEffect } from 'react';

export const LastFmData = ({ userName, apiKey}) => {
  const [lfmData, updateLfmData] = useState({});


  useEffect(() => {
    fetch(`${process.env.REACT_APP_PUBLIC_URL}?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=30&nowplaying=true&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
      );
  }, [apiKey, userName]);
  
  const buildLastFmData = () => {
    const  { error } = lfmData;
    const track = lfmData?.recenttracks?.track;

    console.log(track)
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!track) {
      return <p>Loading</p>;
    }
  
    const [
      { name: songName, artist: { '#text': artistName } = {} } = {}
    ] = track;
  
    return <h3>: {songName} by {artistName}</h3>;
  };

  return buildLastFmData();
};


