import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function page() {
    const services = [
        {
            title: 'civil',
            items: ['Building Construction: Residential & Commercial', 'Site Development Planning & Studies', 'Structural Design & Analysis', 'Roads & Bridges', 'Urban Planning & Land Development', 'Stormwater Management & Drainage Systems']
        },
        {
            title: 'Structural',
            items: ['Structural Analysis & Load Calculations', 'Concrete, Steel, and Timber Structures Design', 'Earthquake and Wind Load Analysis', 'Retrofitting & Rehabilitation of Existing Structures', 'Foundation Design & Soil Structure Interaction', 'Risk Assessment and Safety Evaluation']
        },
        {
            title: 'Environmental',
            items: ['Wastewater & Water Treatment Systems', 'Environmental Impact Assessments (EIA)', 'Sustainability Consultings']
        },
        {
            title: 'Consultancy',
            items: ['Project Planning & Scheduling', 'Cost Estimation & Budgeting', 'Procurement & Vendor Management', 'Risk Assessment & Mitigation', 'Construction Management','Quality Assurance & Quality Control (QA/QC)', 'Project Performance Monitoring & Reporting']
        },
        {
            title: 'Feasibility Studies & Assessments',
            items: ['Site Feasibility & Suitability Analysis', 'Technical and Financial Feasibility Reports', 'Environmental Impact Studies']
        },
        {
            title: 'Design & Drafting Services',
            items: ['Building Design & Conceptualization', 'Interior Design & Space Planning', '3D Modeling & Visualization', 'Landscape Design']
        },
        {
            title: 'Traffic Analysis',
            items: ['Traffic Data Collection', 'Traffic Modeling and Simulation', 'Data Analytics and Reporting', 'Automated Traffic Solutions']
        }
    ]
  return (
    <div className=" w-full " >
        <div className="relative h-90 px-5 md:px-10 py-10 md:py-0 flex items-center ">
        {/* Background image */}
            <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/services/header-bg.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 " />

            <div className="text-white relative z-20">
                <h1 className="heading">Services</h1>
                <button className=" mt-8 py-2 px-4 md:px-6 md:py-3 bg-white text-black font-poppins font-medium rounded-md hover:bg-gray-200 cursor-pointer transition-colors">
                    <Link href='/contact'>Contact Us</Link>
                    
                </button>
            </div>
        </div>

        <div className="spacing">
            <div>
                <h3 className="subheading">Services</h3>
                <h1 className="heading mb-2">Our Expertise</h1>
                <p className=" w-full md:w-1/2">
                    We provide comprehensive construction solutions tailored to residential, commercial, and industrial projects, delivering quality craftsmanship from start to finish.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {services.map((service) => (
                    <div key={service.title} className="transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl py-5 px-7 rounded-md border border-gray-300">
                        <h3 className="subheading text-2xl">{service.title}</h3>
                        <ul className="flex flex-wrap text-sm  list-disc text-gray-500 mt-5 font-semibold gap-3">
                            {service.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="spacing">
            <div className="flex gap-5 md:items-center md:gap-0 md:flex-row flex-col w-full justify-between mb-10">
                <h1 className="heading md:w-1/2 w-full">Ready to Start Your Dream Project?</h1>
                <p className="md:w-2/5 w-full font-semibold">Let’s turn your vision into a solid, lasting structure. Contact our team today for a consultation and detailed project estimate.</p>
            </div>
            <div>
                <Image src='/cta/img-1.jpeg' width={400} height={400} className="w-full h-full"/>
            </div>
        </div>
        
    </div>
  )
}
