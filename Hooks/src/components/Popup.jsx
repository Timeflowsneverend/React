import { useState } from "react";

const Popup = () => {
  const [pop, setPop] = useState(false);
  return (
    <div className="h-[100vh] w-full bg-green-500 grid place-items-center">
      <button
        onClick={() => setPop(true)}
        className="bg-blue-400 px-10 py-5 rounded-2xl text-5xl border-1 hover:bg-blue-500 active:bg-blue-700 active:text-white"
      >
        Click
      </button>
      {pop && (
        <div className=" flex flex-col items-center justify-center fixed bg-amber-400 w-[500px] h-[300px] gap-5">
          Wanna continue?
          <button
            onClick={() => setPop(false)}
            className="absolute top-0 right-2 active:text-white hover:text-red-500"
          >
            X
          </button>
          <div className="gap-10 flex">
            <button className="bg-green-500 px-3 py-2 hover:bg-green-400">
              Yes
            </button>
            <button
              onClick={() => setPop(false)}
              className="bg-red-500 px-3 py-2 hover:bg-red-400"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
