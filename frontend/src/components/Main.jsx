import ProfileBox from "./Profile/ProfileBox";
import PostingBox from "./Posting/PostingBox";

const Main = () => {
  return (
    <div className="flex">
      <ProfileBox />
      <PostingBox />
    </div>
  );
};

export default Main;
