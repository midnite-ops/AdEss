import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import { HomeIcon, ToolCaseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  const services = [
    { 
      name: "Commercial construction and development", 
      description: "Design and construction of infrastructure projects.",
      icon: ToolCaseIcon
    },
    { 
      name: "Residential projects from conception to completion", description: "Creating functional and aesthetically pleasing buildings.",
      icon: HomeIcon
    },
    { 
      name: "Infrastructure and industrial construction", 
      description: "Overseeing all aspects of construction projects from start to finish.",
      icon: ToolCaseIcon
    },
  ];
  return (
    <main>
      <section className="relative h-screen">
        {/* Background image */}
        <Navbar isHero={true}/>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-4 md:px-0">
          <div className="flex flex-col items-center gap-4">
            <h1 className="heading text-white">
              Building Trust, Engineering Excellence
            </h1>
            <p className=" text-white w-full md:w-[50%] lg:text-lg text-base">
              Delivering durable and innovative structures with precision and integrity, we transform visions into reality, creating spaces that inspire, endure, and elevate communities.
            </p>
          </div>

          <Link href={'/contact'} className="mt-8 px-6 py-3 bg-white text-black font-poppins font-medium rounded-md hover:bg-gray-200 cursor-pointer transition-colors ">Contact Us</Link>
          
        </div>
      </section>

      <section className="bg-primary spacing">
        <div className=" text-white flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="subheading">Foundation</h3>
            <h1 className="heading">Fifteen years of proven construction Excellence</h1>
          </div>

          <div className="flex-1">
            <p>
              AdEss Global Construction &amp; Consultant Services, LLC is a rapidly growing construction
              and consulting firm based in Houston, Texas and Liberia, West Africa. Committed to delivering exceptional quality and
              innovation in every project we undertake. With over 15 years of industry experience, we
              specialize in a wide range of services, including civil and architectural engineering, construction
              and project management, environmental assessments, traffic analysis, monitoring and evaluation,
              and safety assessments. We also provide strategic consulting services tailored to meet the unique
              needs of our clients. Safety is our top priority—for both our team and our clients.
            </p>
            
            <button className="mt-5 border rounded-md py-2 px-5">
              <Link href={'/about'}>Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="spacing bg-secondary">
        <div className="text-center mb-10 flex flex-col items-center">
          <h3 className="subheading">Services</h3>
          <h1 className="heading text-black">What We Build For You</h1>
          <p className="text-black mt-4 w-full md:w-1/2 ">
            AdEss specializes in comprehensive construction services tailored to your needs. We handle every phase with expertise and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className=" p-6  flex flex-col items-center text-center">
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-5 w-full lg:w-3/4">{service.name}</h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="spacing">
        <div className="flex flex-col items-center">
          <h1 className="heading text-center mb-3">Ready to build something real?</h1>
          <p className="text-center">Let's talk about your project and what it needs to succeed</p>
          <Link className="mt-5 border rounded-md py-2 px-5 bg-primary text-white" href={'/contact'}>Contact Us</Link>
          
        </div>
        <div>
          <Image src="/liberia/home/liberia-img-1.jpeg" alt="Contact Us" width={800} height={50} className="mt-10  rounded-md w-full" />
        </div>
      </section>


      <FAQ />

    </main>
  );
}
