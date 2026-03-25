"use client"
import { useState } from "react"
import Image from "next/image"
import { Mail, MessageCircle, Phone } from "lucide-react"

import * as z from 'zod';

export default function page() {
  //Defining a schema
  const User = z.object({
    name: z.string().min(1, 'Please enter your name'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(5, 'Too short')
  })

  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
    password: ''
  })

  
  function submit() {

    const validateUser = User.safeParse(message)

    if(!validateUser.success){
      setErrors(validateUser.error.flatten().fieldErrors)
      return
    }

    setErrors({})
  }

  const contact = [
    {
      title: 'Email',
      icon: <Mail />,
      desc: 'Share your project details, questions, or plans with us via email. Our team will review your message carefully and respond with clear guidance, timelines, and next steps.',
      contact: 'AdEssglobalconstruction@gmail.com'
    },
    {
      title: 'Call Us',
      icon: <Phone />,
      desc: 'Prefer a direct conversation? Give us a call to discuss your project, request an estimate, or speak with one of our experts for immediate assistance.',
      contact: '123 Sample St, Sydney NSW 2000 AU',
    },
    {
      title: 'Live Chat',
      icon: <MessageCircle />,
      desc: 'Need quick answers? Connect with us through live chat for real-time support and fast responses from our team.',
      contact: '+1 (555) 000-0000'
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
  const countrySelector = (country) => {
    if(country === 'Liberia'){
      document.cookie = "preferred-country=LR; path=/; max-age=31536000"
    }else if(country === 'USA'){
      document.cookie = "preferred-country=US; path=/; max-age=31536000"
    }
    window.location.href = '/'
  }
  return (
    <section>
      <div className="spacing flex flex-col md:flex-row gap-20">
        
        <div className="flex-1">
          <h3 className="subheading">Contact</h3>
          <h1 className="heading mb-2">Contact Us</h1>
          <p>
            Let’s discuss your project and bring your vision to life. Our team is ready to provide expert guidance, detailed planning, and reliable execution from start to finish.
          </p>

          <form action="" className="flex flex-col w-full gap-3 mt-10">
            <label htmlFor="name" className="flex flex-col gap-3 ">
              Name
              <input type="text" name="name" onChange={handleChange} className="border rounded-sm border-black w-full py-3 px-4" placeholder="Name"/>
              {errors.name && (
                <p className="text-sm text-red-600 font-bold">{errors.name[0]}</p>
              )}
            </label>

            <label htmlFor="email"  className="flex flex-col gap-3 ">
              Email
              <input type="text" name="email" onChange={handleChange} className="border rounded-sm border-black w-full py-3 px-4" placeholder="Email"/>
              {errors.email && (
                <p className="text-sm text-red-600 font-bold">{errors.email[0]}</p>
              )}
            </label>
            <label htmlFor="password"  className="flex flex-col gap-3 ">
              Password
              <input type="text" name="password" onChange={handleChange} className="border rounded-sm border-black w-full py-3 px-4" placeholder="*********"/>
              {errors.password && (
                <p className="text-sm text-red-600 font-bold">{errors.password[0]}</p>
              )}
            </label>

            <label htmlFor="message" className="flex flex-col justify-end gap-3 ">
              Message
              <textarea type="text" name="message" onChange={handleChange} className="border rounded-sm border-black w-full py-3  px-4 h-50 resize-none" placeholder="Type your message"/>
              {errors.message && (
                <p className="text-sm text-red-600 font-bold">{errors.message[0]}</p>
              )}
            </label>

            <button type="button" className="self-start bg-black text-white py-2 mt-5 px-4 md:px-6 md:py- font-poppins font-medium rounded-md hover:bg-gray-200 cursor-pointer transition-colors" onClick={submit}>Submit</button>
          </form>
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
            <p>123 Sample St, Sydney NSW 2000 AU</p>
            <p className="underline cursor-pointer" onClick={() => countrySelector('USA')}>Get directions</p>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <Image src='/contact/liberia.jpg' alt="liberia image" width={400} height={400} className="w-full h-full"/>
            <h3 className="subheading">Liberia, West Africa</h3>
            <p>123 Sample St, Sydney NSW 2000 AU</p>
            <p className="underline cursor-pointer" onClick={() => countrySelector('Liberia')}>Get directions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
