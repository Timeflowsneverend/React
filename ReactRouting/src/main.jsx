// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProfilePage from "./ProfilePage.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Context from "./components/Context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);
