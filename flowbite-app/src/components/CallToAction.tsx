import React from "react"

type ICallToAction = {
    title: string,
    text: string,
    cta: {
        buttonText: string
    }
}

const CallToAction: React.FC<ICallToAction> = ({title, text, cta}) => {
    return (
        <section className="py-10 text-center rounded-2xl bg-white shadow-xl my-10 md:w-[624px] mx-auto" role="CTA">
            <h2 className="text-3xl font-display">{title}</h2>
            <div className="md:w-[560px] mt-4 mx-auto">
                <p className="text-lg font-body">{text}</p>
            </div>
            
            <div className="mt-10">
                <button className="rounded-md text-white bg-accent hover:saturate-200 hover:scale-105 duration-200 transition-all py-2 px-6 text-sm">{cta.buttonText}</button>
            </div>
        </section>
    )
}

export default CallToAction