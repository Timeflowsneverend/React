import { useState } from "react";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import { useEffect } from "react";

const HomePage = () => {
  const [text, SetText] = useState("Welcome to the Home Page");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, []);
  return (
    <div>
      {/* <div className="flex gap-1.5">
        <p>HomePages Welcome</p>
        <p>{email}</p>
      </div> */}
      <HeroSection data={text} email={email} />
      <Slider />
    </div>
  );
};

export default HomePage;
