const featuresList = [
    {
        title: 'Scheduling',
        content: 'Create task schedules synced to your natural energy peaks and troughs.',
        image: '/icons/scheduling.svg'
    },
    {
        title: 'Analytics',
        content: 'Track your productivity trends with comprehensive data and insights.',
        image: '/icons/analytics.svg'
    },
    {
        title: 'Integrations',
        content: 'Incorporate wellness practices into your daily plan with reminders for meditation, hydration, and more.',
        image: '/icons/integrations.svg'
    },
    {
        title: 'Focus Timer',
        content: 'Use the built-in Pomodoro timer for focused work sessions with customizable intervals.',
        image: '/icons/focustimer.svg'
    }
]
//
const Features = () => {
    return (

        <section>
            <h2 className="text-4xl text-primary my-10 text-center">Robust features</h2>
            
            <div className="flex flex-col md:flex-row gap-4 ">
                {featuresList.map(({ title, image, content }) => (
                    <div className="md:text-left text-center">
                        <img src={image} alt='Imagen' className="h-16 mx-auto md:m-0 " />
                        <h3 className="text-3xl font-display my-4">{title}</h3>
                        <p className="text-md font-body">{content}</p>
                    </div>
                ))

                }
            </div>

        </section>
    )
}

export default Features