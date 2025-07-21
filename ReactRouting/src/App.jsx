import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
  Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import TestPage from "./pages/TestPage";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Link
          to="/test"
          className="absolute top-2 right-5 border rounded px-2 py-1 hover:border-blue-500 hover:text-blue-500 bg-transparent backdrop-blur"
        >
          Login
        </Link>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/test" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="test" element={<TestPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
