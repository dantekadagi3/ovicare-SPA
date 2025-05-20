import bg1 from "../assets/images/main-image1.jpg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg1})` }}
      className="relative bg-cover bg-center h-screen flex items-center text-white"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(117,42,125,0.85)] via-[rgba(225,68,145,0.6)] to-[rgba(185,93,241,0.4)] z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl ml-8 px-4">
        <h1 className="font-bold text-4xl md:text-6xl leading-tight mb-6 drop-shadow-md">
          Empowering women through early detection <br />
          &amp; accessible reproductive health tools
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl drop-shadow-sm mb-8">
          OvicaRe helps identify potential ovarian cyst symptoms and connects patients with the care they need.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#E14491] hover:bg-[#c9377d] rounded-lg text-white font-semibold transition">
            Get started
          </button>
          <button className="px-6 py-3 border border-white hover:border-[#5BCFF2] text-white font-semibold rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
