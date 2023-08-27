import { useState } from "react"
import CommonInputs from "./CommonInputs"
import { useNavigate } from "react-router-dom"

const ManagerForm = ({ updateFormData }) => {
  const [companyName, setCompanyName] = useState("")
  const [websiteURL, setWebsiteURL] = useState("")
  const [managerName, setManagerName] = useState("")
  const [managerFunction, setManagerFunction] = useState("")
  const [industry, setIndustry] = useState("")

  const [email, setEmail] = useState("")
  const [emailValid, setEmailValid] = useState(null)
  const [mobileNumber, setMobileNumber] = useState("")
  const [mobileNumberValid, setMobileNumberValid] = useState(null)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate("/")
  }

  const handleSave = (event) => {
    event.preventDefault()
    const formData = {
      companyName,
      websiteURL,
      email,
      mobileNumber,
      password,
      managerName,
      managerFunction,
      industry,
    }
    updateFormData(formData)
    navigate("/")
  }

  return (
    <form className="mt-0 ml-2 font-bold  " onSubmit={handleSave}>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mr-4">
          <label htmlFor="companyName" className="mb-2 font-bold text-gray-700">
            Company Name
          </label>
          <input
            required
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-gray-300 p-3 px-5 w-[450px] rounded-md text-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="websiteURL" className="mb-2 font-bold text-gray-700">
            Website URL
          </label>
          <input
            required
            type="text"
            id="websiteURL"
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
            className="border border-gray-300 p-3 px-5 w-[450px] rounded-md text-gray-400"
          />
        </div>
      </div>
      <CommonInputs
        email={email}
        setEmail={setEmail}
        emailValid={emailValid}
        setEmailValid={setEmailValid}
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}
        mobileNumberValid={mobileNumberValid}
        setMobileNumberValid={setMobileNumberValid}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <div className="flex flex-col mr-4">
          <label htmlFor="managerName" className="mb-2 font-bold text-gray-700">
            Account Manager Name
          </label>
          <input
            required
            type="text"
            id="managerName"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            className="border text-gray-400 px-4 border-gray-300 p-2 rounded-md w-[450px]"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="managerFunction"
            className="mb-2 font-bold text-gray-700"
          >
            Account Manager Function
          </label>
          <input
            required
            type="text"
            id="managerFunction"
            value={managerFunction}
            onChange={(e) => setManagerFunction(e.target.value)}
            className="border text-gray-400 px-4 border-gray-300 p-2 rounded-md w-[450px]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="industry" className="font-bold text-gray-700">
          Industry
        </label>
        <input
          required
          type="text"
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="border text-gray-400 px-4 border-gray-300 p-2 rounded-md w-[1000px]"
        />
      </div>
      <div className="flex justify-start mt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="bg-white border border-[#08b5ff] hover:bg-red-600 hover:text-black hover:border-none text-[#0889ff] py-2 rounded mr-2 w-36"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-8 bg-[#086bff] hover:bg-green-600 text-white py-2 rounded w-36 "
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default ManagerForm
