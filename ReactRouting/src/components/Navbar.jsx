import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-600 flex justify-around">
      Navbar
      <ul className="flex gap-10">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
