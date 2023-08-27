import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Notifications from "./pages/Notifications"
import WorkBench from "./pages/WorkBench"
import Trending from "./pages/Trending"
import User from "./pages/User"
import Settings from "./pages/Setting"
import { NavbarWithActivePage } from "./components/Navbar/NavbarWithActivePage"
import EditProfile from "./pages/EditProfile"
import { useContent } from "./context/useContent"
import Appearance from "./pages/Appearance"

function App() {
  const { userType, setUserType, formData, updateFormData } = useContent()

  return (
    <div className="dark:bg-black h-screen bg-slate-50">
      <Router>
        <div className="flex">
          <NavbarWithActivePage />
          <Routes>
            <Route
              path="/"
              element={<Home userType={userType} formData={formData} />}
            />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/workbench" element={<WorkBench />} />
            <Route path="/trending" element={<Trending />} />
            <Route
              path="/user"
              element={<User userType={userType} setUserType={setUserType} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/editprofile"
              element={
                <EditProfile
                  userType={userType}
                  setUserType={setUserType}
                  updateFormData={updateFormData}
                />
              }
            />
            <Route path="/appearance" element={<Appearance />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
