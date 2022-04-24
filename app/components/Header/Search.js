import {
  MdClose
} from "react-icons/md";
import {
  FiSearch
} from "react-icons/fi"
import {
  useState,
  useRef
} from "react"
import {
  useNavigate
} from "react-router-dom";

export default function Search( {
  props
}) {
  const navigate = useNavigate();
  const [searchOpen,
    setSearchOpen] = props;

  const inputRef = useRef()
  const searchCloseHandler = () => {
    setSearchOpen(false)
  }
  const hadleSearchClick = () => {
    const url = `/ringtone/search/${inputRef.current.value}`

    navigate(url, {
      replace: true
    })
    // alert(inputRef.current.value)
  }
  const hadleKeyPress = (e) => {
    if (e.key === 'Enter') {
      hadleSearchClick()
      inputRef.current.blur()
    }
  }

  return (
    <div className="grid grid-cols-[auto_1fr_auto] bg-white sticky top-0 w-full shadow-sm">
     <FiSearch className="text-slate-500 p-3.5 w-14 h-14" />
    <input type="text"
      className="p-2 my-1.5 rounded-md border-2 border-slate-300 text-slate-600 focus:outline-none"
      autofocus="autofocus"
      ref={inputRef}
      onKeyDown={hadleKeyPress}
      placeholder="Search the site..." />
          <MdClose onClick={searchCloseHandler} className="float-right text-slate-500 p-2.5 w-14 h-14" />
    </div>
  )
}