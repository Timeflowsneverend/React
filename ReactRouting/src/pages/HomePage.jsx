import { useState } from "react";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";

const HomePage = () => {
  const [text, SetText] = useState("Welcome to the Home Page");
  return (
    <div>
      HomePages
      <HeroSection data={text} />
      <Slider />
    </div>
  );
};

export default HomePage;
