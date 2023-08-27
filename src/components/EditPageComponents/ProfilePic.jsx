import { useRef } from "react"

const ProfilePic = ({ image, setImage }) => {
  const fileInputRef = useRef(null)

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  const handleImageRemove = () => {
    setImage(null)
    fileInputRef.current.value = ""
  }

  const handleFileInputClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="relative group">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            width={70}
            height={70}
            className="rounded-full"
          />
          <button
            onClick={handleImageRemove}
            className="absolute top-16 left-2 bg-white rounded-full p-1 cursor-pointer group-hover:block hidden"
          >
            Remove
          </button>
          <label
            htmlFor="file-input"
            className="absolute top-0 right-0 bg-white rounded-full p-1 cursor-pointer group-hover:block hidden"
          >
            Edit
          </label>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div
            onClick={handleFileInputClick}
            className="border-dotted border-4 dark:text-white border-gray-400 rounded-full w-20 h-20 flex items-center justify-center text-center cursor-pointer"
          >
            No file chosen
          </div>
          <label
            htmlFor="file-input"
            className="bg-white rounded-full p-1 cursor-pointer mt-2"
          >
            Choose file
          </label>
        </div>
      )}
      <input
        required
        type="file"
        id="file-input"
        onChange={handleImageChange}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  )
}

export default ProfilePic
