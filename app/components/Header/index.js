import {
  HiOutlineMenu
} from 'react-icons/hi';
import {
  FiSearch
} from "react-icons/fi"
import Menu from "./Menu";
import Search from "./Search";

import {
  useState
} from "react"

export default function Header() {
  const [menuOpen,
    setMenuOpen] = useState(false);
  const [searchOpen,
    setSearchOpen] = useState(false);
  const menuClickHandler = () => {
    setMenuOpen(true)
  }
  const searchClickHandler = () => {
    setSearchOpen(true)
  }
  return (
    <>
    {
      !searchOpen ?
      <div className="backdrop-blur-md grid justify-between grid-cols-[auto_auto] bg-white/70 sticky top-0 w-full shadow-sm">
      <HiOutlineMenu onClick={menuClickHandler} className="text-slate-500 p-2.5 w-14 h-14" />
      <FiSearch onClick={searchClickHandler} className="text-slate-500 p-3.5 w-14 h-14" />
      </div> :
      <Search props={[searchOpen, setSearchOpen]} />
    }
    {
      menuOpen ? <Menu props={[menuOpen, setMenuOpen]} />: null
    } < />
  )
}