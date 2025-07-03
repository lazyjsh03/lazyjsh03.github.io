import Button from "./Button";

const SearchBar = () => {
  return (
    <div className="flex w-3/4 h-10 border mt-10 rounded-lg overflow-hidden">
      <input
        className="w-5/6 h-full outline-none bg-nomad-bg pl-3"
        type="text"
        placeholder="Search posts by keyword or category"
      />
      <div className="flex grow h-full text-xl border-l justify-center">
        <Button text="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
