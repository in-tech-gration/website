const Header = () => {
  return (
    <div
      className="
      min-w-screen h-10
      border-solid border-t-2 border-l-2 border-r-2
      flex items-stretch
      rounded-t-xl bg-white "
    >
      <div className="flex space-x-1.5 px-3 bg-browserBar items-center rounded-tl-lg rounded-br-lg">
        <div className="w-3.5 h-3.5 bg-red-500 rounded-full "></div>
        <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
      </div>

      <div className=" bg-browserBar">
        <div className="bg-browserBar w-full h-2"></div>
        <div className="bg-white w-max rounded-t-lg h-8  px-4 py-1.5 font-bold text-sm  text-center break-keep text-gray-500">
          in
          <span className="text-black ">tech</span>gration
        </div>
      </div>

      <div className="bg-browserBar w-full rounded-bl-lg rounded-tr-lg"></div>
    </div>
  );
};

export default Header;
