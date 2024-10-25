

const TestimonialsMock = [{
    message: "Flowrise has revolutionized my workday! It adapts to my  energy and helps me optimize my daily tasks. I'm more productive and happier than ever!",
    name: "Emily W.",
    role: "UX Designer",
    image: "/images/emily-ux.webp"
}, {
    message: "Before Flowrise, I was always running against the clock. Now, I work in harmony with my natural rhythms. My productivity and wellbeing have never been better!",
    name: "Mark R.",
    role: "Nonprofit founder",
    image: "/images/emily-ux.webp"
},
 {
    message: "Flowrise has made burnout a thing of the past. It's a game-changer for work-life balance. It's not just a productivity app—it's a lifestyle enhancer.",
    name: "Ayesha W.",
    role: "Digital Marketing Specialist",
    image: "/images/ayesha.webp"
}
]

const Testimonials = ({}) => {
    return (
        <section>
            <h2 className="text-4xl text-center text-primary font-display my-8">What our users say</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

            { TestimonialsMock.map(({message, name, role, image}) => (
                <div className="bg-white max-h-auto  p-8 mb-2 flex flex-col shadow-md rounded-lg">
                    <p className="mb-2 text-xl font-normal font-body">{message}</p>

                    <div className="flex gap-2 h-10">
                            <div>
                                <img className="h-10" src={image} alt="Foto de perfil" />
                            </div>
                            <div className="flex flex-col text-xs py-[0.3rem]">
                                <span>{name}</span>
                                <span>{role}</span>
                            </div>
                    </div>

                </div>

            )) }
            </div>

        </section>
    )
}

export default Testimonials