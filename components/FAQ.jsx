import { Accordion, AccordionContent, AccordionItem,AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
function FAQ(){
    const faq = [
        {
            question: "What type of construction services do you offer?",
            answer: 'We provide residential, commercial, and industrial construction services, including new builds, renovations, structural works, and project management from planning to completion.'
        },
        {
            question: "Do you handle both small and large projects?",
            answer: 'Yes. We work on projects of all sizes — from minor renovations and repairs to full-scale commercial and residential developments.'
        },
        {
            question: "Are your projects handled by licensed professionals?",
            answer: 'Absolutely. All projects are managed and executed by qualified, licensed professionals who follow industry standards and safety regulations.'
        },
        
        {
            question: "How long does a typical construction project take?",
            answer: 'Project timelines vary depending on scope, size, and complexity. After an initial assessment, we provide a clear timeline and keep you updated throughout the process.'
        },
        {
            question: "How do I get started with a project?",
            answer: 'Simply contact us through our website or phone. We’ll schedule a consultation to discuss your needs, assess the project, and guide you through the next steps.'
        },
        

    ]
    return(
        <>
            <section id="FAQ" className="spacing flex justify-center flex-col items-center">
                <div className="center mb-10">
                    <div className='text-center'>
                        <div className="subheading">FAQ</div>
                    </div>
                    <h1 className="text-2xl font-bold text-center">Get Answers To Commonly Asked Questions</h1>
                </div>

                <Accordion
                type="single"
                collapsible
                className="w-full md:w-[70%] flex flex-col gap-7.5 justify-center"
                defaultValue="">
                    {faq.map((item, index) => (
                        <AccordionItem key={index} value={`item ${index}`} className='py-4 px-5 border! border-grayT rounded-sm'>
                            <AccordionTrigger className='bg-transparent text-black hover:no-underline font-poppins text-lg'>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4 pr-6 flex-start text-black">
                                    <p className="text-start text-black ">
                                        {item.answer}
                                    </p>
                                    {index === faq.length - 1 ? <Link href={'/contact'} className="mt-5 self-start border rounded-md py-2 px-5 text-black">Contact Us</Link> : ''}
                                </div>
                            </AccordionContent>
                        </AccordionItem>  
                    ))}
                </Accordion>
            </section>
        </>
        
    )
}
export default FAQ