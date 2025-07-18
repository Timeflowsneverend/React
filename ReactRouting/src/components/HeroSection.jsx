const HeroSection = ({ data }) => {
  return (
    <div className="relative h-[80vh] w-full">
      <img
        src="https://cdn.pixabay.com/photo/2024/10/02/18/24/leaf-9091894_1280.jpg"
        alt="plant"
        className="h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

      {/* Centered text */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl text-center w-100 ">
        Hello world {data}
      </h1>
    </div>
  );
};

export default HeroSection;
