import { useState } from "react"
import ProfilePic from "../components/EditPageComponents/ProfilePic"
import SideProfilePic from "../components/EditPageComponents/SideProfilePic"
import StudentForm from "../components/EditPageComponents/StudentForm"
import ManagerForm from "../components/EditPageComponents/ManagerForm"

const EditProfile = ({ userType, updateFormData }) => {
  const [image, setImage] = useState(null)
  return (
    <div className="ml-20 w-full ">
      <SideProfilePic image={image} />
      <div className=" mt-0 w-[1000px]">
        <div className="flex justify-between">
          <div className="text-black font-bold text-3xl dark:text-white">
            Edit profile
          </div>
          <ProfilePic image={image} setImage={setImage} />
        </div>
        {userType === "student" ? (
          <StudentForm updateFormData={updateFormData} />
        ) : (
          <ManagerForm updateFormData={updateFormData} />
        )}
      </div>
    </div>
  )
}

export default EditProfile
