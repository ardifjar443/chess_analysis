const CariUser = () => {
  return (
    <>
      <div className="bg-white min-h-screen grid grid-cols-2">
        <div className="flex justify-center items-center w-full">
          <div className=" w-1/2 rounded-xl p-10 flex justify-center items-center bg-base-100 flex-col gap-5 shadow-md">
            <input
              type="text"
              placeholder="Enter your chess.com username"
              className="input w-full text-white border-2 border-gray-200"
            />
            <button className="bg-white w-full p-3 text-black font-bold rounded-lg hover:bg-gray-200">
              ENTER
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <img src="./img/peakpx.jpg" className="w-1/2 rounded-xl shadow-md" />
        </div>
      </div>
    </>
  );
};

export default CariUser;
