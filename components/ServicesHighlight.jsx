import Link from "next/link";

export default function ServicesHighlight() {
  const services = [
    {
      number: "01",
      name: "Commercial Construction & Development",
      description:
        "Design and construction of infrastructure projects built for West Africa's growing economy.",
        img: '/liberia/services/foundation-work.jpg'
    },
    {
      number: "02",
      name: "Residential Projects from Conception to Completion",
      description:
        "Creating functional and aesthetically pleasing homes tailored to local needs.",
        img: '/liberia/services/finishing.jpg'
    },
    {
      number: "03",
      name: "Infrastructure & Industrial Construction",
      description:
        "Overseeing all aspects of construction projects from start to finish.",
        img: '/liberia/services/framing.jpg'
    },
  ];
  return (
    <section className="bg-gray-50 px-6 md:px-16 py-24">
      <div className="text-center mb-16">
        <p className=" text-[10px] tracking-[5px] uppercase font-poppins mb-3 text-black">
          Services
        </p>
        <h2 className="font-poppins font-bold text-primary text-4xl md:text-5xl leading-tight mb-4">
          What We Build For You
        </h2>
        <p className="text-primary/60 text-base leading-relaxed max-w-xl mx-auto">
          AdEss specializes in comprehensive construction services tailored to
          your needs. We handle every phase with expertise and attention to
          detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-10 flex flex-col gap-5 hover:bg-secondary/5 transition-colors ${
              index < services.length - 1
                ? "border-b md:border-b-0 md:border-r border-primary/10"
                : ""
            }`}
          >
            <span className="font-poppins font-bold text-5xl  leading-none">
              {service.number}
            </span>
            <h3 className="font-poppins font-semibold text-primary text-lg leading-snug">
              {service.name}
            </h3>
            <p className="text-primary/60 text-sm leading-relaxed flex-1">
              {service.description}
            </p>
            <div className="w-8 h-0.5 bg-secondary" />
          </div>
        ))}
      </div>
        <div className="w-full flex justify-center mt-10">
            <button className="mt-2 edge-button text-center">
                <Link href={'/contact'}>Get Started</Link>
            </button>
        </div>
        
    </section>
  );
}
