import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import ImageText from "@/components/ImageText";

// Hero image
const heroImage = {
  url: '/images/hero-promo.webp',
  alt: 'Imagen hero'
}

// Hero CTA
const cta = {
  label: 'Try for free',
  type: 'primary'
}

// bottom CTA
const bottomCTA = {
  title: 'Unleash your inner productivity',
  text: 'Sync your tasks and wellness to your unique rhythm.',
  buttonText: 'Try it free'
}

const ImageTextList = [
  {
    image: '/images/woman-joga.webp',
    title: 'Harmonize your schedule',
    text: 'Align tasks with your natural energy rhythms. Embrace tailored productivity.',
    alignRight: false,
  },

  {
    image: '/images/mindful-task-tracking.webp',
    title: 'Mindful task tracking',
    text: 'Blend productivity with mindfulness. Understand your patterns, enhance focus.',
    alignRight: true,
  },

  {
    image: '/images/productivity-self-care.webp',
    title: 'Productivity and self care',
    text: 'Beyond task completion. Embrace self-care routines, foster a healthier lifestyle.',
    alignRight: false,
  },
]

export default function Home() {
  return (
    <main className="container m-2 md:m-0">
      <Hero
        title="Productivity that flows with your life."
        text="Unleash your potential by harmonizing your daily tasks and habits with your unique energy rhythms."
        cta={cta}
        image={heroImage} />
      <Testimonials />

      <Features />

      <div className="my-10 space-y-10">
        {ImageTextList.map((imageText) => (
          imageText.alignRight ? (
            <ImageText align-right title={imageText.title} text={imageText.text} image={imageText.image} />
          ) : (
            <ImageText title={imageText.title} text={imageText.text} image={imageText.image} />
          )
        ))}

      </div>

      <CallToAction title={bottomCTA.title} text={bottomCTA.text} cta={bottomCTA} />


    </main>
  );
}
