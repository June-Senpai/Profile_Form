const SideProfilePic = ({ image }) => {
  return (
    <span className="flex justify-end m-4 mr-12">
      <span className="text-xl  bg-[#d9d9d9] rounded-full w-8 h-8 mr-4 flex justify-center items-center">
        <ion-icon name="notifications-outline"></ion-icon>
      </span>
      {image && (
        <img
          src={image}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      )}
    </span>
  )
}

export default SideProfilePic
