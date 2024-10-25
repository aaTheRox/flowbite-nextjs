
import Image from 'next/image'
import Link from 'next/link'

const MenuItems = [
    {
        label: 'Features',
        href: '/features',
    },
    {
        label: 'About',
        href: '/about',
    }
]

export function Header() {
    return (
        <section className="bg-white  text-black py-6">
            <div className="sm:max-w-screen-md md:max-w-screen-xl flex mx-auto justify-between gap-10">
                
                <div>
                    <Link href="/"><Image src='/images/logo.svg' alt='Logotipo' width='136' height='24' /></Link>
                </div>
                <div>
                    <nav>
                        <ul className='flex gap-10'>
                            {MenuItems.map(({ label, href }) => <li key={label}><Link href={href}> {label}</Link></li>)}

                        </ul>
                    </nav>
                </div>
            </div>

        </section>
    )
}