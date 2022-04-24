import {
  FaPlay,
  FaPause
} from 'react-icons/fa';

import {
  useState,
  useEffect,
  useRef,
  useContext,
  useMemo
} from 'react'

import Context from 'app/components/AudioPlayer/Context'

export default function Player( {
  props
}) {

  const [state,
    dispatch] = useContext(Context)
  const ref = useRef();
  const render = useRef(0)


  const handleClick = () => {

    if (state?.ref !== ref.current || !state?.isPlayReq) {
      dispatch({
        type: "PLAY",
        src: `https://download.samplelib.com/mp3/sample-3s.mp3`,
        ref: ref.current,
      })
    } else {
      dispatch({
        type: "PAUSE",

      })
    }
  }
  //const [isPlaying, setIsPlaying] = useState(false)
  // console.log(render.current++, ref.current, state)
  render.current++
  return (
    <div onClick={handleClick} ref={ref} id={props.id} className="rounded-full bg-cyan-400 grid place-items-center p-4">
      {state?.ref === ref.current && state?.isPlayReq ?
      <FaPause className="text-white w-9 h-9" />:
      <FaPlay className=" text-white w-9 h-9 ml-1 mr-[-.25rem]" />

      }
      {state?.playerState}
            {render.current}
    </div>

  )
}