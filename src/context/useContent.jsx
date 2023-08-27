import { useState } from "react"

export const useContent = () => {
  const [userType, setUserType] = useState("")
  const [formData, setFormData] = useState({})

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }))
  }

  return { userType, setUserType, formData, updateFormData }
}
