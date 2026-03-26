import ServicesHighlight from "@/components/ServicesHighlight"
import { ArrowRightIcon, LucideChevronRightSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function page() {

    const build = [
        {
            title: 'Residential Building',
            subtitle: 'Build',
            desc: 'Homes constructed with care and lasting strength',
            img: '/liberia/services/residential.jpg'

        },
        {
            title: 'Commercial Construction',
            subtitle: 'Expertise',
            desc: 'Structures built for business and built to endure',
            img: '/liberia/services/commercial.jpg'

        },
        {
            title: 'Renovations',
            subtitle: 'Quality',
            desc: 'Breathing new life into spaces that matter',
            img: '/liberia/services/renovations.jpg'

        }
    ]
  return (
    <main>
        <section className=" h-screen spacing flex flex-col gap-10 lg:gap-0 lg:flex-row ">
            <div className="flex flex-col gap-3 md:flex-1 items-start justify-start md:justify-center">
                <h1 className="heading  md:max-w-10/12">Bulding what matters, done right</h1>
                <p className="w-full md:w-3/4">We build structures that last. From foundation to finish, AdEss delivers quality construction with precision and integrity.</p>
                <button className="mt-2 edge-button">
                    <Link href={'/contact'}>Get Started</Link>
                </button>
            </div>
            <div className="flex-1">
                <Image src={'/liberia/services/hero-bg.jpg'} width={500} height={500} alt="Growth mindset" className="w-full h-full object-cover"/>
            </div>
        </section>


        <section className="flex justify-center flex-col spacing pb-0">
            <div className="flex flex-col  items-center">
                <p className="text-[10px] tracking-[5px] uppercase font-poppins mb-3 text-black">Core</p>
                <h1 className="lib-heading mb-3">What We Offer</h1>
                <p>Three pillars hold up every project we take on</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6 h-200 mt-10">
                {build.map((item, index) => (
                    <div
                    key={index}
                    className={`
                        relative flex bg-white overflow-hidden border
                        ${index === 1 ? "md:row-span-2 md:col-start-2 flex-col h-100 md:h-auto" : ""}
                    `}
                    >
                    {/* TEXT */}
                    <div className="flex-1 p-6 flex flex-col justify-center gap-2">
                        <p className="text-sm font-semibold">{item.subtitle}</p>
                        <h2 className="smallheading">{item.title}</h2>
                        <p className="text-sm text-gray-600">{item.desc}</p>

                        <Link href="/contact" className="flex items-center gap-1 mt-6 text-sm">
                        Get started <ArrowRightIcon size={15}/>
                        </Link>
                    </div>

                    {/* IMAGE */}
                    <div className="relative flex-1">
                        <Image
                        src={item.img}
                        alt={item.desc}
                        fill
                        className="object-cover"
                        />
                    </div>
                    </div>
                ))}
            </div>
        </section>


        <ServicesHighlight/>

        <section className="relative flex justify-center items-center h-100">
            <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/liberia/services/framing.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative text-white flex flex-col gap-3 justify-center">
                <h1 className="text-center font-poppins font-bold text-4xl md:text-5xl leading-tight mb-4">Ready to build something great?</h1>
                <p className="text-center w-10/12">Get in touch with our team today and let's discuss your next project. We're ready to turn your vision into solid reality.</p>
                <button className="mt-2 edge-button self-center bg-white text-black ">
                    <Link href={'/contact'}>Get in touch</Link>
                </button>
            </div>
        </section>
    </main>
  )
}
