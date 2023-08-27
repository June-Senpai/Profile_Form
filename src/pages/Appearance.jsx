import useThemeSwitcher from "../hooks/useThemeSwitcher"

const Appearance = () => {
  const [mode, setMode] = useThemeSwitcher()
  return (
    <div className="flex items-center justify-center m-72 text-3xl">
      <h1 className="dark:text-white">Change theme :-</h1>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className=" dark:bg-white p-2 flex items-center justify-center rounded-full"
      >
        {mode === "dark" ? (
          <>
            <h1>Dark Theme</h1>
            <img src="/dark.svg" alt="dark" height={56} width={56} />
          </>
        ) : (
          <>
            <h1>Light Theme</h1>
            <img src="/sun.svg" alt="sun" height={78} width={78} />
          </>
        )}
      </button>
    </div>
  )
}

export default Appearance
