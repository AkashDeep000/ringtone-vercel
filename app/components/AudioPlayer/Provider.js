import {
  useReducer
} from "react";
import Context from "./Context.js";


const reducer = (state, action) => {

  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        isPlayReq: true,
        src: action.src,
        ref: action.ref,
        isT: true
      }
    case 'PAUSE':
      return {
        ...state,
        isPlayReq: false,
        isT: false
      }

    case 'SET':
      return {
        ...state,
        playerState: action.playerState,
      }

    default:
      return state;
  }
}

export default function Provider( {
  children
}) {

  const [state,
    dispatch] = useReducer(reducer)

  return (
    <Context.Provider value={[state, dispatch]}>
        {children}
    </Context.Provider>
  );
}