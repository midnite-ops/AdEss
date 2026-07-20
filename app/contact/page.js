"use client"
import { useState } from "react"
import Image from "next/image"
import { Mail, MessageCircle, Phone } from "lucide-react"

import * as z from 'zod';
import SendEmail from "@/components/SendEmail";

export default function page() {
  
  const [message, setMessage] = useState({
    email: '',
    message: '',
  })



  const contact = [
    {
      title: 'Email',
      icon: <Mail />,
      desc: 'Share your project details, questions, or plans with us via email. Our team will review your message carefully and respond with clear guidance, timelines, and next steps.',
      contact: 'info@adessglobalconstruction.com'
    },
    {
      title: 'Call Us',
      icon: <Phone />,
      desc: 'Prefer a direct conversation? Give us a call to discuss your project, request an estimate, or speak with one of our experts for immediate assistance.',
      contact: '11227 Burgus Farm Rd Humble, Tx 77346',
    },
    {
      title: 'Live Chat',
      icon: <MessageCircle />,
      desc: 'Need quick answers? Connect with us through live chat for real-time support and fast responses from our team.',
      contact: '+1470-624-1904'
    },
  ]

  const handleChange = (e) => {
    const {name, value} = e.target
    setMessage((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
    setErrors((prev) => ({
      ...prev,
      [name]: undefined
    }))
    
  }
  // const countrySelector = (country) => {
  //   if(country === 'Liberia'){
  //     document.cookie = "preferred-country=LR; path=/; max-age=31536000"
  //   }else if(country === 'USA'){
  //     document.cookie = "preferred-country=US; path=/; max-age=31536000"
  //   }
  //   window.location.href = '/'
  // }
  return (
    <section>
      <div className="spacing flex flex-col md:flex-row gap-20">
        
        <div className="flex-1">
          <h3 className="subheading">Contact</h3>
          <h1 className="heading mb-2">Contact Us</h1>
          <p>
            Let’s discuss your project and bring your vision to life. Our team is ready to provide expert guidance, detailed planning, and reliable execution from start to finish.
          </p>

          <SendEmail formData={message} setFormData={setMessage}/>

        </div>
        <div className="flex-1">
          <Image src="/contact.jpg" alt="Contact Us" width={400} height={400} className="rounded-md w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 bg-secondary">
        {contact.map((item, index) => (
          <div key={index} className="flex flex-col  gap-2 spacing">
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p className="underline mt-5 cursor-pointer">{item.contact}</p>
          </div>
        ))}
      </div>

      <div className="spacing">
        <div>
          <p className="subheading">Locations</p>
          <h1 className="heading">Our Locations</h1>
          <p className="w-full md:w-2/5 mt-2">We welcome scheduled visits and consultations at our office. Contact us in advance to book an appointment with our team.</p>
        </div>

        <div className="flex flex-col md:flex-row mt-10 justify-between gap-10 items-start">
          <div className="flex flex-col gap-3 flex-1">
            <Image src='/contact/houston.jpg' alt="houston image" width={400} height={400} className="w-full h-full"/>
            <h3 className="subheading">Houston, Texas</h3>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <Image src='/contact/liberia.jpg' alt="liberia image" width={400} height={400} className="w-full h-full"/>
            <h3 className="subheading">Liberia, West Africa</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
