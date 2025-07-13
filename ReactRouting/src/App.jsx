// import { Route, Routes } from "react-router-dom";
// import HomePages from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import NotFound from "./pages/NotFound";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// const App = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePages />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import HomePage from "./pages/HomePage";
// import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;

import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

function App() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile", {
      state: { userId: 123 },
    });
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Button
        text="Go to Profile"
        bgColor="bg-blue-400"
        textColor="text-white"
        onClick={goToProfile}
      />
    </div>
  );
}
export default App;
