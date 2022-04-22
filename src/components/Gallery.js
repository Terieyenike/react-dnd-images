import React, {useState} from 'react';
import galleryData from '../data';


const Gallery = () => {
    const [images, setImages] = useState(galleryData);

    const renderImages = images.map((item) => (

        <div
            className='card' key={item.id}
        >
            <div className='card__info'>
                <p className='card__info-title'>{item.title}</p>
                <p className='card__info-subtitle'>{item.subtitle}</p>
            </div>
            <img src={item.img} alt={item.subtitle}/>
        </div>

    ));

    return (
        <div>

            <main>
                {renderImages}

            </main>

        </div>
    );
};

export default Gallery;