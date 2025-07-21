import { useEffect } from "react";
import { useState } from "react";

const ThemeToggle = () => {
  const [set, SetSet] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored !== null ? JSON.parse(stored) : true;
  });
  useEffect(() => {
    localStorage.setItem("theme", set);
  }, [set]);

  return (
    <>
      <label
        htmlFor="theme"
        className={`h-[2rem] w-[4.5rem] border-2 ${
          set ? "border-white" : "border-black"
        } rounded-full relative`}
      >
        <div
          className={`h-full w-[28px] border ${
            !set ? "border-black bg-white" : "border-white bg-black"
          } rounded-full left-0 absolute transition-all duration-400   ${
            !set ? "translate-x-[2.5rem]" : "translate-x-0"
          }`}
        />
      </label>
      <input
        onChange={() => SetSet(!set)}
        type="checkbox"
        id="theme"
        className="hidden"
        checked={set}
      />
    </>
  );
};

export default ThemeToggle;
