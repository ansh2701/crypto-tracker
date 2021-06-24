const SearchBar = ({ ...rest }) => {
  return (
    <div className="mt-10 mb-5 flex items-center w-64 m-auto">
      <input
        className="bg-grey-900 text-black p-1 border-none rounded outline-none h-full w-full"
        {...rest}
      />
    </div>
  );
};

export default SearchBar;
