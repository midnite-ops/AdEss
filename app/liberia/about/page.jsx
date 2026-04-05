import Link from "next/link"
import Image from "next/image"
import ServicesHighlight from "@/components/ServicesHighlight"


export default function LiberiaAbout() {
  const team = [
    {
      name: 'Marcus Webb',
      role: 'Founder & CEO',
      desc: 'Marcus oversees every phase of construction with the discipline of a seasoned professional.',
      img: '/liberia/about/profile.jpg'
    },
    {
      name: 'Sophia Turner',
      role: 'Chief Operating Officer',
      desc: 'Sophia ensures our projects run smoothly, on time, and within budget, with a focus on quality and client satisfaction.',
      img: '/liberia/about/profile.jpg' 
    },
    {
      name: 'James Chen',
      role: 'Structural Engineer',
      desc: 'James brings technical expertise and innovative solutions to every project, ensuring structural integrity and safety.',
      img: '/liberia/about/profile.jpg'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Site Supervisor',
      desc: 'Sarah manages on-site operations with a keen eye for detail, ensuring that every aspect of construction meets our high standards.',
      img: '/liberia/about/profile.jpg' 
    }
  ]
  const records = [
    {
      title: '150+',
      desc: 'Projects Completed',
    },
    {
      title: '20',
      desc: 'Years in business',
    },
    {
      title: '100%',
      desc: 'Safety record maintained',
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
              <Image src={'/liberia/about/hero-bg.jpg'} width={500} height={500} alt="Contact Us" className="w-full h-full object-cover "/>
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
              <div className="w-20 h-20 mx-auto mb-2">
                <Image src={member.img} width={200} height={200} alt={member.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-poppins font-semibold text-xl">{member.name}</h3>
              <p className="text-lg font-medium mb-4">{member.role}</p>
              <p className="text-base leading-relaxed">{member.desc}</p>

              <div className="flex items-center justify-center gap-2 mt-5">
                <a href="#" target="_blank">
                  <Image src={'/liberia/about/Linkedin-icon.svg'} width={20} height={20} alt="LinkedIn" className="w-5 h-5 object-contain"/>
                </a>
                
                <a href="#" target="_blank">
                  <Image src={'/liberia/about/X-icon.svg'} width={20} height={20} alt="LinkedIn" color="white" className="w-5 h-5 object-contain"/>
                </a>
                
                <a href="#" target="_blank">
                  <Image src={'/liberia/about/Facebook-icon.svg'} width={20} height={20} alt="LinkedIn" className="w-5 h-5 object-contain"/>
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="spacing">
        <div className= "flex flex-col md:flex-row justify-between gap-5 md:gap-25">
          <h2 className="font-poppins font-semibold text-primary text-4xl md:text-5xl leading-tight mb-4">
            Two decades of building trust and structures 
          </h2>
          <p className="text-base leading-relaxed">
            AdEss Construction has completed over 150 projects across residential and commercial sectors. Our safety record remains spotless, and our clients return again and again.          
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

      <section className="relative flex justify-center items-center h-100">
        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/liberia/services/framing.jpg')" }}
        />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative text-white flex flex-col gap-3 justify-center px-5 md:px-0 ">
              <h1 className="text-center font-poppins font-bold text-4xl md:text-5xl leading-tight mb-4">Ready to build something great?</h1>
              <p className="text-center w-full md:w-10/12">Get in touch with our team today and let's discuss your next project. We're ready to turn your vision into solid reality.</p>
              <button className="mt-2 edge-button self-center bg-white text-black ">
                  <Link href={'/contact'}>Get in touch</Link>
              </button>
        </div>
      </section>
    </main>
  )
}
