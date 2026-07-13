import Link from "next/link"
import Image from "next/image"
import ServicesHighlight from "@/components/ServicesHighlight"
import { User, User2 } from "lucide-react"
import CTA from "@/components/CTA"


export default function LiberiaAbout() {
  const team = [
    {
      name: 'Adam Salifu Kamara',
      role: 'Founder & CEO',
      desc: 'Adam oversees every phase of construction with the discipline of a seasoned professional.',
      img: '/CEO.jpg'
    },
    {
      name: 'Morrinah S. Kamara',
      role: 'Chief Operating Officer',
      desc: 'Morrinah ensures our projects run smoothly, on time, and within budget, with a focus on quality and client satisfaction.',
      img: '/COO.jpg'
    },
    {
      name: 'Alex T. Siryon',
      role: 'Structural Engineer',
      desc: 'Alex brings technical expertise and innovative solutions to every project, ensuring structural integrity and safety.',
      img: '/brand-hat.jpg'
    },
    {
      name: 'Alexander Collins',
      role: 'Site Supervisor',
      desc: 'Alexander manages on-site operations with a keen eye for detail, ensuring that every aspect of construction meets our high standards.',
      img: '/brand-hat.jpg'
    }
  ]
  const records = [
    {
      title: '15+',
      desc: 'Projects Completed',
    },
    {
      title: '15',
      desc: 'Years in business',
    },
    {
      title: '100%',
      desc: 'Sucess Rates',
    },
  ]
  return (
    <main>
        <section className=" hero-spacing ">
          <div className="flex flex-col gap-3 md:flex-1 items-start justify-start md:justify-center">
              <h1 className="heading  md:max-w-10/12">Creating what truly counts and genuinely matters</h1>
              <p className="w-full md:w-3/4">AdEss Constrctions builds the structures that shape communities. From residential homes to commercial complexes, we deliver quality that lasts.</p>
              <button className="mt-2 edge-button">
                  <Link href={'/services'}>See projects</Link>
              </button>
          </div>
          <div className="flex-1 overflow-hidden">
              <Image src={'/liberia/about/hero-bg copy.jpg'} width={500} height={500} alt="Contact Us" className="w-full h-full object-cover "/>
          </div>
      </section>

      <ServicesHighlight />

      <section className="spacing bg-primary text-white">
        <div className="text-center mb-16">
            <p className=" text-[10px] tracking-[5px] uppercase font-poppins mb-3 ">
            Team
            </p>
            <h2 className="font-poppins font-semibold text-4xl md:text-5xl leading-tight mb-4">
            Our Team
            </h2>
            <p className=" text-base leading-relaxed max-w-xl mx-auto">
                The people behind every project, bringing decades of combined experience and a shared commitment to excellence. Meet the team that turns visions into reality.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className=" text-white p-6 rounded-lg  flex flex-col items-center text-center gap-2">
              <div className="size-20 mx-auto mb-2 flex justify-center items-center">
                <img src={member.img} className="bg-transparent rounded-full w-full h-full object-cover "/>
              </div>
              <h3 className="font-poppins font-semibold text-xl">{member.name}</h3>
              <p className="text-lg font-medium mb-4">{member.role}</p>
              <p className="text-base leading-relaxed">{member.desc}</p>

              {/* <div className="flex items-center justify-center gap-2 mt-5">
                <a href="#" target="_blank">
                  <Image src={'/liberia/about/Linkedin-icon.svg'} width={20} height={20} alt="LinkedIn" className="w-5 h-5 object-contain"/>
                </a>
                
                <a href="#" target="_blank">
                  <Image src={'/liberia/about/X-icon.svg'} width={20} height={20} alt="LinkedIn" color="white" className="w-5 h-5 object-contain"/>
                </a>
                
                <a href="#" target="_blank">
                  <Image src={'/liberia/about/Facebook-icon.svg'} width={20} height={20} alt="LinkedIn" className="w-5 h-5 object-contain"/>
                </a>
                
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <section className="spacing">
        <div className= "flex flex-col md:flex-row justify-between gap-5 md:gap-25">
          <h2 className="font-poppins font-semibold text-primary text-4xl md:text-5xl leading-tight mb-4">
            15+ years of building trust and structures 
          </h2>
          <p className="text-base leading-relaxed">
            AdEss Construction has completed over 25 projects across residential and commercial sectors. Our safety record remains spotless, and our clients return again and again.          
          </p>
        </div>

        <div className= 'mt-10 flex justify-between flex-col md:flex-row gap-10 md:gap-0'>
          {records.map((record, index) => (
            <div key={index} className="flex flex-col  border-l border-l-black items-start justify-center pl-8 py-5 gap-3 md:gap-1">
              <span className="font-poppins font-semibold text-5xl md:text-7xl leading-none">
                {record.title}
              </span>
              <span className=" text-[10px] text-center tracking-[3px] uppercase">
                {record.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  )
}
