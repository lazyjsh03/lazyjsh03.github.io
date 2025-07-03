import InfoCard from "./InfoCard";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col w-96 justify-center gap-10">
      <InfoCard text={"name"} info={"Seunghyeon Je"} />
      <InfoCard text={"age"} info={"23"} />
      <InfoCard text={"organization"} info={"Tech University of Korea"} />
      <InfoCard text={"github"} info={"github.com/lazyjsh03"} />
    </div>
  );
};

export default ProfileInfo;
