import React, { useState, useEffect, useRef } from 'react';

const VideoPlay = () => {

  const [playing, setPlaying] = useState(false);
  const vidRef = useRef();

  useEffect(() => {
    console.log(vidRef)
    playing ? vidRef.current.play() : vidRef.current.pause();
  }, [playing]);


  return (
    <div>
      <video ref={vidRef}>
        <source src={['https://media.w3.org/2010/05/sintel/trailer_hd.mp4']} type="video/mp4" />
      </video>
      <button onClick={() => setPlaying(true)}> Play </button>
      <button onClick={() => setPlaying(false)}> Pause </button>

    </div>
  )
}



export default VideoPlay;
