import { useState } from "react"
import { useNavigate } from "react-router-dom"

const User = ({ userType, setUserType }) => {
  const [selectedOption, setSelectedOption] = useState(userType)

  const navigate = useNavigate()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setUserType(selectedOption)
    navigate("/")
  }

  const handleReset = () => {
    setUserType(null)
    setSelectedOption(null)
    navigate("/")
  }

  return (
    <div className="flex items-center justify-center ml-96 font-bold">
      {!userType && (
        <form className="mt-0 ml-2 font-bold" onSubmit={handleFormSubmit}>
          <div className="flex flex-col mr-4">
            <label className="mb-2 font-bold text-2xl text-gray-700">
              Are you a manager or student?
            </label>
            <div className="flex items-center ml-16 text-xl text-gray-400">
              <input
                type="radio"
                id="manager"
                value="manager"
                checked={selectedOption === "manager"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="manager" className="mr-4">
                Manager
              </label>
              <input
                type="radio"
                id="student"
                value="student"
                checked={selectedOption === "student"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="student">Student</label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-24 bg-[#086bff] hover:bg-green-600 text-white py-2 rounded w-36"
          >
            Save
          </button>
        </form>
      )}

      {userType && (
        <>
          <h1 className="text-2xl">Do you want to change your position</h1>
          <button
            onClick={handleReset}
            className="ml-24 bg-[#086bff] hover:bg-green-600 text-white py-1 rounded w-36"
          >
            Reset
          </button>
        </>
      )}
    </div>
  )
}

export default User
