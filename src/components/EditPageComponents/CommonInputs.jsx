const CommonInputs = ({
  email,
  setEmail,
  emailValid,
  setEmailValid,
  mobileNumber,
  setMobileNumber,
  mobileNumberValid,
  setMobileNumberValid,
  password,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  // Use props passed from parent component

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})?$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setEmailValid(validateEmail(event.target.value))
  }

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value)
    setMobileNumberValid(validateMobileNumber(event.target.value))
  }

  const validateMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^[0-9]{10}$/
    return mobileNumberRegex.test(mobileNumber)
  }

  return (
    <>
      <div className="flex flex-col mt-4 z-10">
        <label htmlFor="email" className="mb-1 font-bold text-gray-700">
          Email
        </label>
        <div className="relative">
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 text-gray-400 p-2 rounded-md w-full"
          />
          {emailValid === true && (
            <span className="absolute top-2 right-2 text-green-500">✅</span>
          )}
          {emailValid === false && (
            <span className="absolute top-2 right-2 text-red-500">❌</span>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="mobileNumber" className="mb-2 font-bold text-gray-700">
          Mobile Number
        </label>
        <div className="relative">
          <input
            required
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="border border-gray-300 p-2 rounded-md w-full text-gray-400"
          />
          {mobileNumberValid === true && (
            <span className="absolute top-2 right-2 text-green-500 ">✅</span>
          )}
          {mobileNumberValid === false && (
            <span className="absolute top-2 right-2 text-red-500">❌</span>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="password" className="mb-2 font-bold text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 text-gray-400 p-2 rounded-md w-full px-4"
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-2 right-2 text-gray-500 text-xl"
          >
            {showPassword ? (
              <ion-icon name="eye-outline"></ion-icon>
            ) : (
              <ion-icon name="eye-off-outline"></ion-icon>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default CommonInputs
