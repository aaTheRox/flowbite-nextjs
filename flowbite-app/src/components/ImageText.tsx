
import React from "react"

type IImageText = {
    image: string,
    title: string,
    text: string,
    'align-right'?: boolean
}

const ImageText: React.FC<IImageText> = ({image, title, text, 'align-right': alignRight}) => {
    return (
        <div key={title} className={alignRight ? 'md:flex-row-reverse md:flex gap-4' : 'md:flex-row md:flex gap-4'}  role="ImageText">
            {alignRight}
            <div className="justify-center items-center flex">
                <img src={image} className="w-[80%]" alt={title} />
            </div>
            <div className="max-w-screen-md md:justify-center md:flex md:flex-col md:items-center">
                <h3 className="text-4xl text-primary font-display mb-2">{title}</h3>
                <p className="text-md font-body">{text}</p>
            </div>

        </div>
    )
}

export default ImageText