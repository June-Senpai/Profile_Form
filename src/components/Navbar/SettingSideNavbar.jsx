import { Link } from "react-router-dom"

export function SettingSideNavbar({
  activePage,
  openSide,
  isHidden,
  toggleOpenSide,
}) {
  const menus = [
    { name: "Edit Profile", link: "/editprofile", icon: "pencil-outline" },
    {
      name: "Notifications",
      link: "/notifications",
      icon: "notifications-outline",
      //   margin: true,
    },
    {
      name: "Security",
      link: "/security",
      icon: "lock-closed-outline",
      margin: true,
    },
    {
      name: "Appearance",
      link: "/appearance",
      icon: "settings-outline",
    },
    { name: "Help", link: "/help", icon: "help-circle-outline" },
  ]

  // const [openSide, setOpenSide] = useState(true)

  return (
    <div
      className={`border-r border-[#858585] ${
        openSide ? "w-52" : "w-16"
      } duration-500 ${isHidden && "hidden"}`}
    >
      <div className="p-3 font-bold dark:text-white z-30 ">
        <div onClick={toggleOpenSide} className="cursor-pointer">
          <span>
            {openSide ? (
              <ion-icon name="chevron-back-outline"></ion-icon>
            ) : (
              <ion-icon name="chevron-forward-outline"></ion-icon>
            )}
          </span>

          <span
            className={`ml-6 duration-500 text-2xl  ${
              !openSide && "opacity-0"
            }`}
          >
            settings
          </span>
        </div>
        <div className="mt-14 flex flex-col relative ml-2">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin && "mt-3 mb-2"
              } group flex items-center text-xl mt-2 p-2 font-medium text-gray-400 hover:rounded-full ${
                openSide ? "hover:bg-blue-400 hover:text-gray-600" : ""
              } ${!openSide && "hover:text-blue-300 hover:bg-none"} ${
                activePage === menu.name.toLowerCase() &&
                "active:font-bold text-black  "
              }`}
            >
              <div
                className={` ${!openSide && " -mt-16"} ${
                  activePage === menu.name.toLowerCase() &&
                  "active:font-bold text-black dark:text-blue-300 "
                }`}
              >
                <ion-icon name={menu?.icon}></ion-icon>
              </div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`ml-4 mb-2 whitespace-pre duration-500 ${
                  activePage === menu.name.toLowerCase() &&
                  "active:font-bold text-black dark:text-blue-300 "
                } ${!openSide && "opacity-0 translate-x-28 "} `}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  openSide && "hidden"
                } absolute -mt-10 left-48 bg-white font-semibold whitespace-pre text-gray-600 rounded-md drop-shadow-lg p-0 w-0 overflow-hidden group-hover:p-2 group-hover:left-14 group-hover:duration-300
                group-hover:w-fit z-50 `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
