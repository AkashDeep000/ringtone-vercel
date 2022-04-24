import {
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext
} from "react";
import Context from './Context'

export default function AudioPlayer() {
  const [state,
    dispatch] = useContext(Context)
    let audio;
  if (state?.src) {
   audio = typeof Audio !== "undefined" ? useMemo(() => new Audio(state.src), [state.src]): undefined
  }
  



  // Managing the playing state
  /* const [isPlaying,
    setIsplaying] = useState(false);
  const [isLoading,
    setIsLoading] = useState(false);
    */
  console.log("audio")
  // play function to play the audio


  /*
  // Toggle between play and pause
  const toggle = () => {
    console.log("toggle"+"isPlaying"+isPlaying)
    return isPlaying ? pause(): play()

  };
*/
  useEffect(() => {
    if (audio) {
      if (state.isPlayReq) {

        dispatch({
          type: "SET",
          playerState: "loading"
        })
        audio
        .play()
        .then(() => {
          dispatch({
            type: "SET",
            playerState: "playing"
          })
        })
        .catch((error) => {
          dispatch({
            type: "SET",
            playerState: "error"
          })
          console.log(error);
          //  options.onError?.(error);
        });
      };

      // pause the audio
      if (sate?.playerState === "playing" && !state?.isPlayReq) {

        audio.pause()
        .then(() => {
          dispatch({
            type: "SET",
            playerState: "paused"
          })
        });
      };

      // Loop the audio if loop is true, default is false
      // audio.loop = options.loop || false;

      // Adjust the volume of the audio, default is 1(max)
      //  audio.volume = options.volume || 1;

      // Mute the audio if muted is true, default is false
      // audio.muted = options.muted || false;

      // Execute the onLoadedData function after finishing the loading of audio
      //  audio.onloadeddata = (e) => options.onLoadedData?.(e);

      // Execute after the ending of the audio
      audio.addEventListener('ended', (e) => {
        // Execute the onEnded function
        //    options.onEnded?.(e);

        // Play again the audio after the end if loop is true
        //   options.loop ? audio.play():
        dispatch({
          type: "SET",
          playerState: "playing"
        })
      });

      // Cleanup
      return () => {
        // !options.loop &&
        audio.removeEventListener('ended', () => {
          dispatch({
            type: "SET",
            playerState: "ended"
          })
        });
      };
    }
  },
    [audio,
      state]);

  /*Returning isPlaying, play, pause, toogle
  return {
    isPlaying, isLoading, play, pause, toggle
  };*/
  return (
    <> <h1>Player</h1> < />
  )
};