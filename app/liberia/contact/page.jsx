"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function page() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSuccess(true)
                setFormData({ name: '', email: '', message: '' })
            } else {
                setError(data.error || 'An error occurred. Please try again.')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }
    const services = [
        {
        name: "Experienced Team ",
        img: '/liberia/contact/team.jpeg',
        description:"Decades of combined expertise guide every decision and every nail.",
        },
        {
        name: "Advanced equipment",
        img: '/liberia/contact/equipment.jpg',
        description:"Modern tools and proven methods ensure efficiency without compromising quality.",
            
        },
        {
        name: "On-time delivery",
        img: '/liberia/contact/delivery.jpg',
        description: "We respect your schedule. Projects finish when promised, not when convenient.",
        },
    ]

    const results = [
        {
            number: '100+',
            title: 'Projects Completed',
            description: 'A track record of successful projects across residential, commercial, and industrial sectors.'
        },
        {
            number: '95%',
            title: 'Years in business',
            img: '/liberia/contact/satisfaction.jpg',
            description: 'Two decades of learning, improving, and earning trust one project at a time.'
        },
        {
            number: '99%',
            title: 'On-time delivery rate',
            img: '/liberia/contact/value.jpg',
            description: 'We respect your schedule and deliver when we say we will.'
        }
    ]

    const questions = [
        {
            title: 'How long do project take?',
            description: 'Timeline depends on scope. A renovation might take 4-8 weeks. A custom home takes 6-12 months. We provide detailed schedules upfront.',
            img: '/liberia/contact/timeline.jpg',
            icon: '/liberia/contact/timeline-icon.svg'
        },
        {
            title: 'Do you handle permits?',
            description: 'Yes. We manage all permits and inspections. That"s part of our job, not yours.',
            img: '/liberia/contact/permits.jpg',
            icon: '/liberia/contact/done_all-icon.svg'
        },
        {
            title: 'What if costs exceed estimate?',
            description: 'We notify you immediately and explain the reason. No work proceeds without your approval on changes.',
            img: '/liberia/contact/costs.jpg',
            icon: '/liberia/contact/approval-icon.svg'
        },
        {
            title: 'Do you offer warranties?',
            description: 'All work is warranted for one year. Structural elements carry longer warranties based on building codes.',
            img: '/liberia/contact/timeline.jpg',
            icon: '/liberia/contact/work-icon.svg'
        },
        {
            title: 'Can you work around my schedule?',
            description: 'We"re flexible. We discuss your needs and find a schedule that works for both of us.',
            img: '/liberia/contact/permits.jpg',
            icon: '/liberia/contact/schedule-icon.svg'
        },
        {
            title: 'How do I get started?',
            description: 'Call or email us with your project details. We"ll schedule a free consultation to discuss scope and next steps.',
            img: '/liberia/contact/permits.jpg',
            icon: '/liberia/contact/start-icon.svg'
        }
    ]
  return (
    <main>
        <section className=" hero-spacing ">
            <div className="flex flex-col gap-3 md:flex-1 items-start justify-start md:justify-center">
                <h1 className="heading  md:max-w-10/12">We build structures that lasts</h1>
                <p className="w-full md:w-3/4">Construction done right takes time, skill, and people who care. AdEss has been doing it for twenty years.</p>
                <button className="mt-2 edge-button">
                    <Link href={'/services'}>See projects</Link>
                </button>
            </div>
            <div className="flex-1 overflow-hidden">
                <Image src={'/liberia/contact/hero-bg.jpg'} width={500} height={500} alt="Contact Us" className="w-full h-full object-cover "/>
            </div>
        </section>

        <section className="spacing bg-primary text-white">
            <div className="text-center mb-16">
                <p className=" text-[10px] tracking-[5px] uppercase font-poppins mb-3 ">
                WHY US
                </p>
                <h2 className="font-poppins font-semibold text-4xl md:text-5xl leading-tight mb-4">
                Built on experience and trust
                </h2>
                <p className=" text-base leading-relaxed max-w-xl mx-auto">
                    We've spent years perfecting our craft. Our reputation is earned through consistent delivery and honest work.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {services.map((service, index) => (
                    <div
                    key={index}
                    className='flex flex-col gap-5 hover:bg-secondary/5 transition-colors'
                    >
                        <Image src={service.img} alt={service.name} width={500} height={300} className="w-full h-60 object-cover "/>
                        
                        <h3 className="font-poppins font-semibold text-lg leading-snug">
                        {service.name}
                        </h3>
                        <p className=" text-sm leading-relaxed flex-1">
                        {service.description}
                        </p>
                        
                    </div>
                ))}
            </div>
        </section>


        <section className="spacing">
            <div className="text-center mb-16">
                <p className=" text-[10px] tracking-[5px] uppercase font-poppins mb-3 text-black">
                RESULTS
                </p>
                <h2 className="font-poppins font-semibold text-primary text-4xl md:text-5xl leading-tight mb-4">
                Numbers that speak for themselves
                </h2>
                <p className="text-primary/60 text-base leading-relaxed max-w-xl mx-auto">
                   Our track record reflects years of consistent work and satisfied clients.
                </p>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 h-fit">
  
                {/* LEFT — CARDS (smaller) */}
                <div className="flex flex-col gap-6">
                    {results.map((result, index) => (
                    <div
                        key={index}
                        className="p-6 border  flex flex-col gap-4 hover:bg-secondary/5 transition"
                    >
                        <p className="text-4xl font-bold ">
                        {result.number}
                        </p>

                        <h3 className="font-poppins font-semibold text-primary text-lg">
                        {result.title}
                        </h3>

                        <p className="text-primary/60 text-sm leading-relaxed">
                        {result.description}
                        </p>
                    </div>
                    ))}
                </div>

                {/* RIGHT — BIG IMAGE */}
                <div className="relative h-50 md:h-auto overflow-hidden ">
                    <Image
                    src="/liberia/contact/results.jpeg"
                    alt="Contact Us"
                    fill
                    className="object-cover  md:h-auto"
                    />
                </div>

            </div>
        </section>


        <section className="spacing bg-secondary">
            <div className="text-center mb-16">
                <h2 className="font-poppins font-semibold text-primary text-4xl md:text-5xl leading-tight mb-4">
                Questions
                </h2>
                <p className="text-primary/60 text-base leading-relaxed max-w-xl mx-auto">
                   Find answers to common questions about our process, timeline, and services.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {questions.map((q, index) => (
                    <div key={index} className="flex justify-center items-center flex-col gap-4 mb-10">
                        <Image src={q.icon} width={50} height={50} alt={`${q.title} icon`} className="mb-3"/>
                        <h3 className="font-poppins font-semibold text-primary text-lg text-center">
                            {q.title}
                        </h3>
                        <p className="text-primary/60 text-sm leading-relaxed text-center">
                            {q.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center flex-col items-center gap-3 mt-10">
                <h2 className="font-roboto font-extrabold mb-2 text-xl">Need more help?</h2>
                <p className="text-center">Reach out directly and we"ll answer whatever you need to know</p>
                <button className="edge-button bg-transparent border text-black">Call</button>
            </div>
        </section>

        <section className="spacing">
            <div className="border flex h-fit gap-10 p-10 flex-col lg:flex-row">
                <div className="flex-1">
                    <div>
                        <h2 className="font-poppins font-semibold text-primary text-4xl md:text-5xl leading-tight mb-4">Ready to build something great?</h2>
                        <p>Tell us about your project and we will get back to you within 24 hours with next steps.</p>
                    </div>
                    <div>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <label htmlFor="email" className="flex flex-col gap-3 ">
                                Email
                                <input type="email" required name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="border  border-black w-full py-3 px-4" placeholder="Your email"/>
                            </label>

                            <label htmlFor="message" className="flex flex-col gap-3 ">
                                Message
                                <textarea name="message" required onChange={(e) => setFormData({...formData, message: e.target.value})} className="border  border-black w-full py-3 px-4 resize-none" placeholder="Your message" rows={4}/>
                            </label>

                             {error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                                    ❌ {error}
                                </div>
                            )}
                            <button type="submit" disabled={loading} className="edge-button">
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                    
                    <p className="text-xs mt-5 ">We respect your privacy and we will only use your information to discuss your project.</p>
                </div>
                <div className="overflow-hidden w-full flex-1">
                    <Image src="/liberia/contact/contact-cta.jpg" alt="Get Started" width={500} height={500} className="w-full! h-full object-cover "/>
                </div>
            </div>
            
        </section>
    </main>
  )
}
//#1F2933
