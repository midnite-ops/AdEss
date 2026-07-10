import Link from "next/link"

const CTA = () => {
  return (
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
  )
}

export default CTA