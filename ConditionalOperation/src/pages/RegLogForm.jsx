import { useEffect, useState } from "react";
const allType = ["register", "login"];
const RegLogForm = ({ type }) => {
  const [change, setChange] = useState(type);

  useEffect(() => {
    document.title = `${
      change.charAt(0).toUpperCase() + change.slice(1)
    } | ${document.title.replace(/^(Register|Login) \| /, "")}`;
  }, [change]);

  if (!allType.includes(change)) throw new Error("invalid type: " + change);

  const data = [
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center h-[100vh] bg-gray-400">
        <div className="border-1 rounded-2xl p-10">
          <div className="flex flex-col">
            <div className="text-2xl capitalize">{change}</div>
            {data
              .filter((item) => {
                if (change === "login") {
                  return item.name === "email" || item.name === "password";
                }
                return true; // for register, return all fields
              })
              .map((item, index) => (
                <div
                  className="flex flex-col gap-1 pt-2 border-red-500 "
                  key={index}
                >
                  <label key={index} htmlFor={item.id} className="capitalize">
                    {item.name}
                  </label>
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.name}
                    placeholder={item.placeholder}
                    className="border-2 rounded-lg p-2"
                  />
                </div>
              ))}
          </div>
          <button className="bg-blue-500 capitalize py-2 w-25 rounded-2xl mt-7 mx-auto grid place-content-center hover:bg-blue-300 active:bg-blue-800">
            {change}
          </button>
        </div>
      </div>
      <button
        onClick={() => setChange(change === "login" ? "register" : "login")}
        className="absolute top-0 right-0 m-4 p-2 bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400 w-[150px] text-left"
      >
        Change: {change}
      </button>
    </div>
  );
};

export default RegLogForm;
