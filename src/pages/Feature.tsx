import FeatureCard from "../components/Feature_card";
import search from "../assets/icons/ovisearch.svg";
import phone from "../assets/icons/oviphone.svg";
import monitor from "../assets/icons/ovimonitor.svg";
import Teleconsult from "../assets/icons/ovisms.svg";
import Appointment from "../assets/icons/ovicalendar.svg";
import doctor from "../assets/icons/ovimedi.svg";

const Feature = () => {
  return (
    <section className="py-20 bg-[#FAFAFC]">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-[#1B1F38] mb-4">Our Key Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          OvicaRe provides intelligent, accessible tools to support women’s reproductive health and empower doctors with meaningful insights.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        <FeatureCard
          image={search}
          title="Symptom Analysis"
          description="Input symptoms and get a likelihood score indicating the chance of an ovarian cyst."
        />
        <FeatureCard
          image={doctor}
          title="Doctor Dashboard"
          description="Allows doctors to track symptoms, diagnose efficiently, and view historical reports."
        />
        <FeatureCard
          image={phone}
          title="Web & USSD Access"
          description="Even users without smartphones can access OvicaRe through USSD in remote areas."
        />
        <FeatureCard
          image={Appointment}
          title="Appointment Scheduling"
          description="Patients can book appointments with healthcare professionals directly from the platform."
        />
        <FeatureCard
          image={Teleconsult}
          title="Teleconsultation"
          description="Enable remote consultations and follow-up care, especially for those in underserved areas."
        />
        <FeatureCard
          image={monitor}
          title="Health Tracker"
          description="Track symptom progression and recovery through a visual health timeline."
        />
      </div>
    </section>
  );
};

export default Feature;
