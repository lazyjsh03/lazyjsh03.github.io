const Header = () => {
  return (
    <div className="flex justify-between pt-10 pb-10 border-b-2">
      <div>
        <h1 className="font-['SBAggroB'] text-5xl pl-10">😊 제소리</h1>
      </div>
      <div className="flex gap-10 text-xl pr-10">
        <button>홈</button>
        <button>소개</button>
        <button>카테고리</button>
        <button>강의</button>
      </div>
    </div>
  );
};

export default Header;
