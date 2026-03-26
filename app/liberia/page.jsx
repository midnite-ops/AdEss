import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function LiberiaHome() {
  const services = [
    {
      number: "01",
      name: "Commercial Construction & Development",
      description:
        "Design and construction of infrastructure projects built for West Africa's growing economy.",
    },
    {
      number: "02",
      name: "Residential Projects from Conception to Completion",
      description:
        "Creating functional and aesthetically pleasing homes tailored to local needs.",
    },
    {
      number: "03",
      name: "Infrastructure & Industrial Construction",
      description:
        "Overseeing all aspects of construction projects from start to finish.",
    },
  ];

  return (
    <main className="bg-white text-primary ">
      

      {/* ── HERO — full screen, left-aligned ── */}
      <section className="h-auto pt-30">
        <div className="mb-15">
          <div className="flex justify-center items-center flex-col gap-3 px-5 md:px-0">
            <h1 className="lib-heading w-full md:w-1/3 text-center">Building the future, one project at a time</h1>
            <p className="w-full md:w-1/2 text-center">
              We construct with precision and integrity. From residential developments to commercial complexes, AdEss delivers results that stand the test of time.
            </p>
            <Link href={'/contact'} className="mt-5 px-6 py-3 bg-black text-white font-poppins font-medium hover:bg-gray-800 cursor-pointer transition-colors ">Get Started</Link>
          </div>
        </div>
        <div>
          <Image src = '/liberia/home/hero-bg.jpg' alt="AdEss Liberia Construction" height={500} width={800} className="object-cover! w-full h-full"/>
        </div>
      </section>

      <section className="bg-white   grid grid-cols-3 divide-x divide-white/20">
        {[
          { value: "15+", label: "Years of Experience" },
          { value: "2", label: "Global Offices" },
          { value: "100%", label: "Safety Committed" },
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-5 gap-3 md:gap-1">
            <span className="font-poppins font-boldtext-2xl md:text-3xl leading-none">
              {s.value}
            </span>
            <span className=" text-[10px] text-center tracking-[3px] uppercase">
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* ── ABOUT — two column, image left / text right ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
        {/* Image */}
        <div className="relative min-h-[350px] md:min-h-0">
          <Image
            src="/liberia/home/liberia-img-1.jpeg"
            alt="AdEss Liberia Construction"
            fill
            className="object-cover"
          />
          {/* Orange accent bar on the right edge of the image */}
          <div className="absolute top-0 right-0 w-1 h-full bg-secondary" />
        </div>

        {/* Text */}
        <div className="bg-primary px-5 md:px-16 py-16 flex flex-col justify-center gap-6">
          <p className="text-secondary text-[10px] tracking-[5px] uppercase font-poppins">
            Our Foundation
          </p>
          <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl leading-tight">
            Fifteen Years of Proven Construction Excellence
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            AdEss Global Construction &amp; Consultant Services, LLC is a
            rapidly growing construction and consulting firm based in Houston,
            Texas and Liberia, West Africa. Committed to delivering exceptional
            quality and innovation in every project we undertake.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            With over 15 years of industry experience, we specialize in civil
            and architectural engineering, construction and project management,
            environmental assessments, traffic analysis, monitoring and
            evaluation, and safety assessments. Safety is our top priority —
            for both our team and our clients.
          </p>
          <Link
            href="/liberia/about"
            className="border border-secondary text-secondary font-poppins font-medium text-sm tracking-widest uppercase px-8 py-3 w-fit hover:bg-secondary hover:text-black transition-colors mt-2"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── SERVICES — cards with orange number accent ── */}
      <section className="bg-gray-50 px-6 md:px-16 py-24">
        <div className="text-center mb-16">
          <p className="text-secondary text-[10px] tracking-[5px] uppercase font-poppins mb-3">
            Services
          </p>
          <h2 className="font-poppins font-bold text-primary text-4xl md:text-5xl leading-tight mb-4">
            What We Build For You
          </h2>
          <p className="text-primary/60 text-base leading-relaxed max-w-xl mx-auto">
            AdEss specializes in comprehensive construction services tailored
            to your needs. We handle every phase with expertise and attention
            to detail.
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
              <span className="font-poppins font-bold text-5xl text-secondary/20 leading-none">
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
      </section>

      {/* ── CTA — full width dark band ── */}
      <section className="bg-primary px-6 md:px-16 py-24 relative overflow-hidden">
        {/* Decorative large faded text */}
        <span className="absolute right-10 top-1/2 -translate-y-1/2 font-poppins font-bold text-[12rem] text-white/[0.03] leading-none select-none pointer-events-none hidden lg:block">
          BUILD
        </span>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="text-secondary text-[10px] tracking-[5px] uppercase font-poppins">
              Let's Work Together
            </p>
            <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl leading-tight">
              Ready to Build <br />
              Something{" "}
              <span className="text-secondary">Real?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Let's talk about your project and what it needs to succeed. Our
              team in Liberia is ready to deliver.
            </p>
          </div>

          <Link
            href="/liberia/contact"
            className="bg-secondary  font-poppins font-medium text-sm tracking-widest uppercase px-10 py-5 w-fit hover:opacity-90 transition-opacity shrink-0"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <div className="bg-white px-6 md:px-16 py-20">
        <FAQ />
      </div>
    </main>
  );
}