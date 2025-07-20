// import numWords from "num-words";
// import { useEffect } from "react";
// import { useState } from "react";

// const TestPage = () => {
//   const [count, setCount] = useState(0);
//   const [word, setWord] = useState("");
//   useEffect(() => {
//     setWord(numWords(count));
//   }, [count]);
//   useEffect(() => {
//     const savedCount = localStorage.getItem("count");
//     setCount(Number(savedCount));
//   }, []);
//   const save = (data) => {
//     localStorage.setItem("count", data);
//   };
//   return (
//     <div className="h-screen flex flex-col items-center justify-center gap-3">
//       <div>Testing one two three</div>
//       <div>TestPage</div>
//       <div className="border flex flex-col items-center gap-3 p-5 rounded">
//         {/* I want words here */}
//         {/* Counter */}
//         <h1 className="text-4xl">Counter</h1>
//         <h1 className="text-3xl capitalize">{word}</h1>
//         <span className="text-2xl">{count}</span>
//         <button
//           className="border px-3 rounded hover:border-blue-500"
//           onClick={() => {
//             setCount(count + 1);
//             save(count + 1);
//           }}
//         >
//           +
//         </button>
//         <button
//           className="border px-3 rounded hover:border-blue-500"
//           onClick={() => {
//             setCount((pre) => Math.max(0, pre - 1));
//             save(count - 1);
//           }}
//         >
//           -
//         </button>
//         <button
//           className="border px-3 rounded hover:border-blue-500"
//           onClick={() => {
//             setCount(0);
//             save();
//           }}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };const handleFormSubmit = () => {
//   console.log(password, email);
// };

// export default TestPage;

import React, { useState } from "react";
import { navigate } from "react-router-dom";

const TestPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = () => {
    if (!data.email || !data.password) {
      alert("Please fill all fields");
    } else {
      localStorage.setItem("email", data.email);
      alert("Form submitted successfully");
      navigate("/");
    }
  };

  const componentData = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter the email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter the password",
    },
  ];

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setData((e) => ({ ...e, [name]: value }));
  };
  console.log(data);

  return (
    <div>
      <div className="demo flex flex-col border">
        <p>{data.email}</p>
        <p>{data.password}</p>
      </div>
      <div className="h-[80vh] grid place-items-center">
        <form
          action={handleFormSubmit}
          className="flex flex-col gap-3 border rounded-2xl p-15 items-center justify-center"
        >
          <h1 className="text-4xl">Form</h1>
          {componentData?.map((item, index) => {
            return (
              <input
                key={index}
                name={item.name}
                type={item.type}
                onChange={(e) => handleFormData(e)}
                placeholder={item.placeholder}
                className="border rounded p-2 w-full max-w-xs hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            );
          })}
          <button
            type="submit"
            className="active:bg-gray-800 text-2xl px-3 py-2 rounded text-white transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestPage;
