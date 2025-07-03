import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-between pt-10 pb-8 border-b-2">
      <div>
        <h1 className="font-['SBAggroB'] text-5xl pl-10">😊 제소리</h1>
      </div>
      <div className="flex gap-10 text-xl pr-10">
        <Button text="HOME" type="header" />
        <Button text="PROFILE" type="header" />
        <Button text="POSTING" type="header" />
        <Button text="New Posting" type="positive" />
      </div>
    </div>
  );
};

export default Header;
