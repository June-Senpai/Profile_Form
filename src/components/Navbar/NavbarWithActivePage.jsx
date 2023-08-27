import { useLocation } from "react-router-dom"
import SideMainNavbar from "./SideMainNavbar"

export const NavbarWithActivePage = () => {
  const location = useLocation()
  let activePage
  if (location.pathname === "/") {
    activePage = "home"
  } else if (location.pathname === "/notifications") {
    activePage = "notifications"
  } else if (location.pathname === "/workbench") {
    activePage = "work bench"
  } else if (location.pathname === "/trending") {
    activePage = "trending"
  } else if (location.pathname === "/user") {
    activePage = "user"
  } else if (location.pathname === "/settings") {
    activePage = "settings"
  } else if (location.pathname === "/editprofile") {
    activePage = "edit profile"
  } else if (location.pathname === "/security") {
    activePage = "security"
  } else if (location.pathname === "/appearance") {
    activePage = "appearance"
  } else if (location.pathname === "/help") {
    activePage = "help"
  }
  return <SideMainNavbar isActive={activePage} />
}
