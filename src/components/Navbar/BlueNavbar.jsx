import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function BlueNavbar({ activePage, toggleHidden }) {
  const [hoverIndex, setHoverIndex] = useState(null)
  const navigate = useNavigate()

  const menus = [
    { name: "Home", link: "/", icon: "home-outline" },
    {
      name: "Notifications",
      link: "/notifications",
      icon: "notifications-outline",
    },
    { name: "Work Bench", link: "/workbench", icon: "barbell-outline" },
    { name: "Trending", link: "/trending", icon: "trending-up-outline" },
    { name: "User", link: "/user", icon: "person-outline" },
    {
      name: "Settings",
      // link: "/settings",
      icon: "settings-outline",
      margin: true,
    },
  ]
  return (
    <div className="bg-[#4d85f1] w-24 ">
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=313.75,fit=crop/YBgEM3a4QltXgBWD/full_logo-removebg-preview-YX42wDrBLEceplO6.png"
        alt=""
        onClick={() => navigate("/")}
        className="mt-2 h-16 cursor-pointer"
      />
      <div className="mt-4 flex flex-col  relative items-center justify-center">
        {menus?.map((menu, i) => {
          return (
            <Link
              to={menu?.link}
              key={i}
              onClick={() => {
                if (menu.name === "Settings") {
                  toggleHidden()
                }
              }}
              className={` ${
                menu?.margin &&
                "mt-72 text-3xl text-white py-1 px-2 bg-[#ff7008] rounded-full items-center justify-center "
              }
              flex items-center p-2 text-2xl mt-4 font-medium text-[#ff4d01] hover:bg-blue-400 hover:rounded-full ${
                activePage === menu.name.toLowerCase() && "text-yellow-200"
              }
              `}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="relative">
                <ion-icon name={menu.icon}></ion-icon>
                {hoverIndex === i && (
                  <span className="absolute top-0 left-10 bg-white text-black rounded px-2 py-1 text-sm shadow-md z-30 whitespace-pre">
                    {menu.name}
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
