import React, { useState, useEffect } from "react";

const AudioPlayerView = () => {
  const [audioUrl, setAudioUrl] = useState(
    "https://fopradiowebcasting.top/listen/qradio/Qradio.aac"
  );
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio-element");

    // Event listener to handle audio playback state changes
    audio.onplay = () => {
      setIsPlaying(true);
    };
    audio.onpause = () => {
      setIsPlaying(false);
    };
  }, []);

  

  return (
    <div className="w-full flex justify-center pb-10">
      <audio
        controls
        id="audio-element"
        className="w-full max-w-[39rem]"
        src={audioUrl}
      >
        Your browser does not support the audio element.
      </audio>
     
    </div>
  );
};

export default AudioPlayerView;
