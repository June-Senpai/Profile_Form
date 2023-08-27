import { useState } from "react"
import BlueNavbar from "./BlueNavbar"
import { SettingSideNavbar } from "./SettingSideNavbar"
export default function SideMainNavbar({ isActive }) {
  const [openSide, setOpenSide] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  const toggleOpenSide = () => {
    setOpenSide((prevOpenSide) => !prevOpenSide)
  }

  const toggleHidden = () => {
    setIsHidden((prevIsHidden) => !prevIsHidden)
  }

  return (
    <aside className="">
      <nav className="min-h-screen flex">
        <BlueNavbar activePage={isActive} toggleHidden={toggleHidden} />
        <SettingSideNavbar
          activePage={isActive}
          openSide={openSide}
          isHidden={isHidden}
          toggleOpenSide={toggleOpenSide}
        />
      </nav>
    </aside>
  )
}
