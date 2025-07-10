import "./form.css";
const allType = ["register", "login"];
const RegLogForm = ({ type }) => {
  if (!allType.includes(type)) throw new Error("invalid type: " + type);
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-400">
      <div className="border-1 rounded-2xl p-10">
        <div className="flex flex-col">
          <div className="text-2xl capitalize">{type}</div>
          {type === "register" && (
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
          />
        </div>
        <button className="bg-blue-500 capitalize py-2 w-25 rounded-2xl mt-7 mx-auto grid place-content-center">
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
