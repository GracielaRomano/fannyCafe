import React from 'react'
import './Opinion.css'

const people = [
    {
        name: 'Carlos Ramirez',
        position: 'Innovate Corp',
        image: '/src/assets/images/photo-1536548665027-b96d34a005ae.jpeg',
        testimonial: '¡El café es fantástico y el servicio de mantenimiento impecable! Nuestras mañanas en Innovate Corp nunca fueron tan energéticas.'
    },
    {
        name: 'Sofia Vargas',
        position: 'Eventos Sociales',
        image: '/src/assets/images/photo-1545803928-04e3f4cdd4ed.jpeg',
        testimonial: 'Alquilamos sus máquinas para nuestra boda y todos quedaron encantados. ¡El café espresso fue el alma de la fiesta!'
    },
    {
        name: 'Andres Gimenez',
        position: 'Consultores Globales',
        image: '/src/assets/images/photo-1658335786123-b4b2b56a8c1d.jpeg',
        testimonial: 'La variedad de cápsulas y la puntualidad en la entrega son inmejorables. Un servicio muy profesional.'
    },
    {
        name: 'Laura Fernandez',
        position: 'Marketing Pro',
        image: '/src/assets/images/photo-1606081430924-b6480765d470.jpeg',
        testimonial: 'Recomendamos totalmente sus servicios. La máquina de café ha mejorado la moral de nuestros empleados.'
    },
    {
        name: 'Javier Morales',
        position: 'Cumbre Empresarial',
        image: '/src/assets/images/photo-1535026406642-530e01750ad7.jpeg',
        testimonial: 'La mejor decisión para nuestro evento corporativo. Café delicioso y atención de primera.'
    },
    {
        name: 'Elena Soto',
        position: 'Finanzas Plus',
        image: '/src/assets/images/photo-1589571894960-20bbe2828d0a.jpeg',
        testimonial: 'Siempre confiables y con un café exquisito. Son nuestro proveedor de café preferido.'
    }
]

const Opinion = () => {
  return (
    <div>
        <section data-bs-version="5.1" className="people05 cid-uXQ7jkepCN" id="testimonials-5-uXQ7jkepCN">
            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <div className="col-12 mb-0 content-head">
                        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Opiniones</strong>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {people.map((person, index) => (
                        <div 
                            key={index} 
                            className={`item features-without-image col-12 col-md-6 col-lg-4 ${index === 0 ? 'active' : ''}`}
                        >
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        {person.testimonial}
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img 
                                            src={person.image} 
                                            alt={`${person.name} - ${person.position}`} 
                                            data-slide-to={index} 
                                            data-bs-slide-to={index}
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>{person.name}, {person.position}</strong>
                                    </h5>
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

export default Opinion
