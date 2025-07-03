import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

const ProfileBox = () => {
  return (
    <div className="flex flex-col items-center w-1/3 mt-10 ml-5 border h-screen ">
      <ProfileImage />
      <ProfileInfo />
    </div>
  );
};

export default ProfileBox;
