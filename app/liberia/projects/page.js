import Link from "next/link";
import Image from "next/image";
import Projects from "@/components/Projects";
export default function page() {
  return (
    <main>
      <section className="hero-spacing">
        <div className="flex flex-col gap-3 md:flex-1 items-start justify-start md:justify-center">
          <h1 className="heading  md:max-w-10/12">
            Engineering Excellence Across the Globe.
          </h1>
          <p className="w-full md:w-3/4">
            We build structures that last. From foundation to finish, AdEss
            delivers quality construction with precision and integrity.
          </p>
          <button className="mt-2 edge-button">
            <Link href={"/contact"}>Get Started</Link>
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <Image
            src={"/liberia/projects/hero.jpg"}
            width={500}
            height={500}
            alt="Growth mindset"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-gray-50 px-6 md:px-16 py-24">
        <div className="text-center mb-16">
          <p className=" text-[10px] tracking-[5px] uppercase font-poppins mb-3 text-black">
            Projects
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

        <Projects />
      </section>
      <section className="bg-gray-100 px-6 md:px-16 py-24 relative overflow-hidden">
        {/* Decorative large faded text */}
        <span className="absolute right-10 top-1/2 -translate-y-1/2 font-poppins font-bold text-[12rem]  leading-none select-none pointer-events-none hidden lg:block">
          BUILD
        </span>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col gap-4">
            <p className="text-secondary text-[10px] tracking-[5px] uppercase font-poppins">
              Let's Work Together
            </p>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl leading-tight">
              Ready to Build <br />
              Something{" "}
              <span className="text-secondary/50">Real?</span>
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-md">
              Let's talk about your project and what it needs to succeed. Our
              team in Liberia is ready to deliver.
            </p>
          </div>

          <Link
            href="/liberia/contact"
            className="bg-secondary border-black border font-poppins font-medium text-sm tracking-widest uppercase px-10 py-5 w-fit hover:opacity-90 transition-opacity shrink-0"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
