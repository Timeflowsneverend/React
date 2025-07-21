// import "./form.css";
const allType = ["register", "login"];
const RegLogForm = ({ type }) => {
  const data = [
    {
      id: "name",
      name: "name",
      type: "name",
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
  if (!allType.includes(type)) throw new Error("invalid type: " + type);
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-400">
      <div className="border-1 rounded-2xl p-10">
        <div className="flex flex-col">
          <div className="text-2xl capitalize">{type}</div>
          {data
            .filter((item) => {
              if (type === "login") {
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
          {/* {type === "register" && (
            <>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name=""
                id="phone"
                onChange={() => console.log("hello")}
                placeholder="Enter your phone number"
              />
            </>
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Create your password"
          /> */}
        </div>
        <button className="bg-blue-500 capitalize py-2 w-25 rounded-2xl mt-7 mx-auto grid place-content-center hover:bg-blue-300 active:bg-blue-800">
          {type}
        </button>
      </div>
    </div>
  );
};

export default RegLogForm;
RegLogForm.prototype = {
  type: "login" | "register",
};
