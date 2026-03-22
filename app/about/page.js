import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function page() {

  return (
    <div className=" w-full " >
      <div className="relative md:h-80 px-5 md:px-10 py-10 md:py-0 flex items-center ">
        <Navbar isHero={true}/>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 " />

        <div className="text-white relative z-20">
          <h1 className="heading">ABOUT US</h1>
          <button className=" mt-8 py-2 px-4 md:px-6 md:py-3 bg-white text-black font-poppins font-medium rounded-md hover:bg-gray-200 cursor-pointer transition-colors">
            <Link href='/contact'>Contact Us</Link>
            
          </button>
        </div>
        
      </div>

      <div className="flex flex-col gap-20 w-full spacing">
        <div className="vision ">
          <div className="flex-col md:flex-row flex gap-10 mt-6">
            <div className=" w-full">
              <h1 className="smallheading ">OUR VISION</h1>
              <p className="font-medium mt-2 leading-relaxed">
                To provide innovative,
                reliable, and sustainable engineering solutions that drive progress and create value for our
                clients. Through expert consultancy and a client-centric approach, we strive to deliver high-
                quality projects that meet the unique needs and challenges of every industry we serve. We are
                dedicated to fostering long-term relationships built on trust, collaboration, and a shared
                commitment to excellence, while continually pushing the boundaries of engineering, technology
                and best practices to deliver optimal results.
              </p>
            </div>

            <div className="mb-2  w-full">
              <h1 className="smallheading">Core Goals</h1>
              <ul className="font-semibold flex flex-col mt-2 gap-3">
                <li>
                  Real Estate Leadership: Become the most trusted name in
                  luxury and affordable housing across the industry.
                </li>

                <li>
                  Global Expansion: Grow our multinational footprint through
                  strategic subsidiaries.
                </li>
                <li>
                  Job Creation: Generate 10,000+ employment opportunities by
                  2030.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <img
              src="https://res.cloudinary.com/dwy1uczdm/image/upload/v1754561114/vision-image_fbiuid.svg"
              alt="an image of a building"
              loading="lazy" className="w-full"
            />
          </div>
        </div>

        <div className="mission">
          <div className="flex justify-between flex-col md:flex-row gap-10 mt-6">
            <div className=" w-full">
              <h1 className="smallheading">OUR MISSION</h1>
              <p className="font-medium mt-2 ">To be a global leader in engineering and consultancy, known for delivering innovative solutions that transform industries
              and communities. We aim to be the trusted partner of choice, renowned for our commitment to
              excellence, sustainability, and cutting-edge technology. By continuously advancing our expertise
              and embracing new challenges, we aspire to shape a future where our solutions drive meaningful
              change and contribute to a better, more sustainable world.</p>
            </div>

            <div className="core-goals w-full">
              <h1 className="smallheading">How we deliver</h1>
              <ul className="font-semibold flex flex-col mt-6 gap-6 ">
                <li>
                  Transparency: Honest deals, clear contracts, no hidden
                  costs.
                </li>

                <li>
                  Innovation: Cutting-edge tech in property development and
                  management.
                </li>

                <li>
                   Customer Obsession: Tailored solutions for buyers, sellers,
                  and investors.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <img
              src="https://res.cloudinary.com/dwy1uczdm/image/upload/v1754561110/mission-image_ozd1gg.svg"
              alt="an image of a building"
              loading="lazy" className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
