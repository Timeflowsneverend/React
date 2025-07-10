import { useState } from "react";
import { merge } from "../lib/utils";

const Bulb = () => {
  const [state, setState] = useState(false);

  return (
    <div
      style={{
        backgroundColor: state ? "black" : "white",
      }}
      className={` duration-1000 h-[100vh] w-[100vw] grid place-items-center`}
    >
      <div
        onClick={() => setState(!state)}
        className={merge(
          " overflow-hidden relative size-16 animate-in hover:shadow-2xl zoom-in  select-none cursor-pointer duration-300 px-10 py-5 rounded-2xl ",
          !state
            ? "hover:bg-slate-800 text-slate-50 bg-slate-950"
            : "hover:bg-slate-300 bg-slate-50 hover:shadow-white text-slate-900"
        )}
      >
        <div
          className={merge(
            " absolute top-1/2 -translate-y-50 left-1/2 inline-flex duration-300 opacity-0 transform -translate-x-1/2",
            state && "opacity-100 -translate-y-1/2"
          )}
        >
          On
        </div>
        <div
          className={merge(
            " absolute top-1/2 translate-y-50 left-1/2 inline-flex duration-300 opacity-0 transform -translate-x-1/2",
            !state && "opacity-100 -translate-y-1/2"
          )}
        >
          Off
        </div>

        {/* {state ? "on" : "off"} */}
      </div>
      <div className="bg-red-400 h-[10px] w-[10px] hidden"></div>
    </div>
  );
};

export default Bulb;
