import React from "react"

type IHero = {
    title: string,
    text: string,
    image?: {
        url: string,
        alt: string
    },
    cta?: {
        label: string,
        type: string
    },

}

const Hero: React.FC<IHero> = ({ title, text, image, cta }) => {
    return (
        <section className="py-10 text-center" role="Hero">
            <h2 className="text-5xl font-display">{title}</h2>
            <div className="md:w-[560px] mt-4 mx-auto">
                <p className="text-lg font-body">{text}</p>
            </div>
            { cta && (
                <div className="mt-10">
                    <button className="rounded-md text-white bg-accent hover:saturate-200 hover:scale-105 duration-200 transition-all py-2 px-6 text-sm">{cta?.label}</button>
                </div>
            )}

            { image && (
                <div className="bg-cover bg-no-repeat mt-10">
                    <img className="h-96 w-full object-cover"  src={image?.url} alt={image?.alt} />
                </div>
            )}
        </section>
    )
}

export default Hero