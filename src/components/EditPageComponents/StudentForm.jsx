import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CommonInputs from "./CommonInputs"

const StudentForm = ({ updateFormData }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [collegeStartDate, setCollegeStartDate] = useState("")
  const [collegeEndDate, setCollegeEndDate] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)

  const [email, setEmail] = useState("")
  const [emailValid, setEmailValid] = useState(null)
  const [mobileNumber, setMobileNumber] = useState("")
  const [mobileNumberValid, setMobileNumberValid] = useState(null)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleCancel = () => {
    navigate("/")
  }

  const handleSave = (event) => {
    event.preventDefault()
    const formData = {
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
      collegeStartDate,
      collegeEndDate,
    }
    updateFormData(formData)
    navigate("/")
  }

  return (
    <form className="mt-0 ml-2 font-bold " onSubmit={handleSave}>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mr-4">
          <label htmlFor="firstName" className="mb-2 font-bold text-gray-700">
            First Name
          </label>
          <input
            required
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 p-3 px-5 w-[450px] rounded-md text-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-2 font-bold text-gray-700">
            Last Name
          </label>
          <input
            required
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
          <label
            htmlFor="collegeStartDate"
            className="mb-2 font-bold text-gray-700"
          >
            College Start Date
          </label>
          <input
            required
            type="date"
            id="collegeStartDate"
            value={collegeStartDate}
            onChange={(e) => setCollegeStartDate(e.target.value)}
            className="border text-gray-400 px-4 border-gray-300 p-2 rounded-md  w-[450px]"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="collegeEndDate"
            className="mb-2 font-bold text-gray-700"
          >
            College End Date
          </label>
          <input
            required
            type="date"
            id="collegeEndDate"
            value={collegeEndDate}
            onChange={(e) => setCollegeEndDate(e.target.value)}
            className="border text-gray-400 px-4 border-gray-300 p-2 rounded-md w-[450px]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="resumeUpload" className="font-bold text-gray-700">
          Resume
        </label>
        <div className="flex justify-between">
          <label className="w-full bg-white text-gray-400 py-2 px-8 rounded cursor-pointer hover:bg-blue-600 hover:text-white flex justify-between">
            <span>{selectedFile ? selectedFile.name : "Upload File"}</span>
            <span>
              <ion-icon name="folder" style={{ color: "black" }}></ion-icon>
            </span>
            <input
              required
              type="file"
              id="resumeUpload"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="flex justify-start mt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="bg-white border border-[#08b5ff] hover:bg-red-600 hover:text-black hover:border-none text-[#0889ff] py-2  rounded mr-2 w-36"
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

export default StudentForm
