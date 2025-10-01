import React from 'react'
import './Client.css'

const images =[
    '/src/assets/images/photo-1681415851723-dca11d0ec9a6.jpeg',
    '/src/assets/images/photo-1596622723231-b20320c7346b.jpeg',
    '/src/assets/images/photo-1529612700005-e35377bf1415.jpeg',
    '/src/assets/images/photo-1606136968306-ab2868cc1f21.jpeg',
    '/src/assets/images/photo-1617727553252-65863c156eb0.jpeg',
    '/src/assets/images/photo-1646825461394-ebd1800141d1.jpeg',
]

const Client = () => {
  return (
    <div>
        <section data-bs-version="5.1" className="clients cid-uXQ7jkd45t" id="partners-1-uXQ7jkd45t">
            <div className="container-fluid">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 content-head">
                        <div className="mbr-section-head">
                            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                <strong>Nuestros Socios Aliados</strong>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`item features-image col-12 col-md-6 col-sm-6 col-lg-2 ${index === 0 ? 'active' : ''}`}
                        >
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img className='img-client' 
                                        src={image} 
                                        alt={`Socio Aliado ${index + 1}`} 
                                        title="" 
                                        data-slide-to={index + 1} 
                                        data-bs-slide-to={index + 1}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}
export default Client

