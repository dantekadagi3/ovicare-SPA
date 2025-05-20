import image1 from "../assets/images/main-image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const About = () => {
  return (
    <section className="py-16 bg-[#FDFDFF]">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-[#1A374D]">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          OvicaRe is a pioneering platform dedicated to empowering women through early detection and accessible reproductive health tools.
        </p>
      </div>

      {/* Image Grid and Content */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        {/* Left Image */}
        <div className="p-4 border-2 border-[#5BCFF2] rounded-xl shadow-xl">
          <img src={image1} alt="Women empowerment" className="w-full h-auto rounded-lg" />
        </div>

        {/* Right Column: Text + 2 Images */}
        <div className="flex flex-col gap-6">
          {/* Problem + Vision */}
          <div className="text-[#1B1F38] space-y-4">
            <h2 className="text-2xl font-semibold text-[#B95DF1]">The Problem</h2>
            <p className="text-gray-700">
              Ovarian cysts often develop silently, going undetected—especially in underserved communities where reproductive health access is limited. This delay in detection leads to preventable complications and long-term health impacts.
            </p>

            <h2 className="text-2xl font-semibold text-[#E14491]">Our Vision</h2>
            <p className="text-gray-700">
              We aim to make reproductive health screening early, accessible, and tech-enabled for every woman, regardless of where she lives or what tools she has access to.
            </p>

            <h2 className="text-2xl font-semibold text-[#5BCFF2]">Our Mission</h2>
            <p className="text-gray-700">
              To empower women and support doctors through an inclusive digital platform that offers symptom analysis, teleconsultations, and real-time health insights.
            </p>
          </div>

          {/* Right Column Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border-2 border-[#E14491] rounded-xl shadow-md">
              <img src={image2} alt="Healthcare" className="rounded-md" />
            </div>
            <div className="p-3 border-2 border-[#B95DF1] rounded-xl shadow-md">
              <img src={image3} alt="Community outreach" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats or Call-to-action (optional) */}
           {/* Enhanced Call to Action */}
      <div className="mt-20 bg-[#1A374D] py-16 px-6 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Why It Matters</h3>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100">
          💡 70% of ovarian cyst cases in rural areas are diagnosed too late. <br />
          💡 1 in 5 women of reproductive age will experience a cyst. <br />
          💡 Early detection reduces complications by up to 60%.
        </p>

        <div className="mt-8">
          <p className="text-xl font-semibold">Join us in creating a future where no woman is left undiagnosed.</p>
          <button className="mt-6 bg-[#E14491] hover:bg-pink-600 transition-colors text-white font-semibold py-3 px-6 rounded-full shadow-lg">
            Get Involved
          </button>
        </div>
      </div>

    </section>
  );
};

export default About;
