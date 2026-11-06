import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import Link from "next/link";
export default function page() {

  return (
    <main>
      <section className="relative h-90 px-5 md:px-10 py-10 md:py-0 flex items-center ">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/liberia/projects/hero.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 " />

        <div className="text-white relative z-20">
          <p className="uppercase font-extrabold text-gray-300 text-sm mb-5">
            multimedia media
          </p>
          <h1 className="heading">
            Our Projects & <br /> Work
          </h1>
          <p className="mt-2">
            Explore the precision of our engineering through high-definition
            project documentation and on-site visual progress.
          </p>
        </div>
      </section>
      <section className="bg-primary spacing">
        <div className=" text-white flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="subheading">Proven track record</h3>
            <h1 className="heading text-4xl">
              Over 15+ successful completions in residential, commercial, and
              government sectors.
            </h1>
          </div>

          <div className="flex-1">
            <p>
              Our construction processes are governed by rigorous safety
              standards and engineering precision, ensuring that every
              foundation we lay is built to endure for generations.
            </p>

            <button className="mt-5 border rounded-md py-2 px-5">
              <Link href={"/about"}>Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="spacing my-10">
        <div className="mb-10">
          <h3 className="subheading">Projects</h3>
          <h1 className="heading mb-2">Our Projects</h1>
          <p className=" w-full md:w-1/2">
            We provide comprehensive construction solutions tailored to
            residential, commercial, and industrial projects, delivering quality
            craftsmanship from start to finish.
          </p>
        </div>
        <Projects />
      </section>

      <CTA />
    </main>
  );
}
