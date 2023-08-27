import { useNavigate } from "react-router-dom"

const Home = ({ userType, formData }) => {
  const navigate = useNavigate()

  return (
    <div className="text-center flex items-center justify-center ml-52 text-3xl dark:text-white">
      {userType && Object.keys(formData).length > 0 ? (
        <p className=" font-bold">
          Thanks for creating your profile {userType},
          <br />
          {formData.firstName} {formData.managerName} have a nice day!
        </p>
      ) : userType ? (
        <p>
          Hi, we got to know you are a {userType}. Let's create your profile!
          <br />
          <button
            onClick={() => navigate("/editprofile")}
            className="bg-blue-400 text-white p-2 mt-2 rounded-lg px-4"
          >
            Profile
          </button>
        </p>
      ) : (
        <p className="ml-8 font-bold">
          Hey, We would love to know what you do.
          <br />
          <button
            onClick={() => navigate("/user")}
            className="bg-blue-400 text-white p-2 mt-2 rounded-lg px-4"
          >
            Position
          </button>
        </p>
      )}
    </div>
  )
}

export default Home
