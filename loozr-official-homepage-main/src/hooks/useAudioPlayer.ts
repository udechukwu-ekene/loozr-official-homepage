import { useState, useEffect } from "react";

function useAudioPlayer(index: null | number) {
  const [duration, setDuration] = useState<undefined | number>();
  const [curTime, setCurTime] = useState<undefined | number>();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById(`audio-${index}`) as HTMLAudioElement;
 
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause(); 

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, [clickedTime, curTime, index, playing]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
}

export default useAudioPlayer;
