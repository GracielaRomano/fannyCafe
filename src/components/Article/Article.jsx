import React from 'react'
import './Article.css'
import aboutImage from '/src/assets/images/article.jpg'


const Article = () => {
  return (
    <div>
      <section data-bs-version="5.1" className=" container-about article9 cid-uXQ7jkdYf3" id="about-us-9-uXQ7jkdYf3">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="card col-md-12 col-lg-10">
              <div className="card-wrapper">
                <div className="card-content-text">
                  <h3 className="card-title mbr-fonts-style mt-3 mb-4 display-2">
                    <strong>Sobre nosotros</strong>
                  </h3>
                  <div className="card-box align-left">
                    <div className="item features-without-image col-12">
                      <div className="text-about">
                        <p className="mbr-text mbr-fonts-style display-7">
                          {/* Somos apasionados por el café y nos dedicamos a llevar experiencias cafeteras excepcionales a tu empresa o evento. Desde 2010, hemos estado sirviendo a compañías como TechSolutions y Eventos Brillantes, proporcionando no solo máquinas de café de vanguardia, sino también un servicio integral que incluye mantenimiento y suministro de las mejores cápsulas. */}
                          Hace tres años, Fanny decidió transformar su pasión por el café en una experiencia para compartir.<br />
                          Así nació nuestro emprendimiento: un servicio de alquiler de máquinas de café para empresas y eventos, pensado para convertir cada encuentro en un momento especial.
                        </p>
                      </div>
                    </div>
                    <div className="item features-without-image col-12">
                      <div className="text-about">
                        <p className="mbr-text mbr-fonts-style display-7">
                          {/* Nuestra misión es transformar cada pausa para el café en un momento de puro placer y productividad. Creemos en la calidad, la frescura y la atención al detalle, asegurando que cada taza sea una obra maestra. */}
                          Creemos que el café une, inspira y genera conexiones auténticas. Por eso, además del alquiler de máquinas, ofrecemos vajilla y accesorios para quienes buscan una propuesta completa, con la calidez y el estilo que cada ocasión merece.
                        </p>
                      </div>
                    </div>
                    <div className="item features-without-image col-12">
                      <div className="text-about">
                        <p className="mbr-text mbr-fonts-style display-7">
                          {/* Los valores que nos guían son la excelencia en el servicio, la innovación constante y la satisfacción total de nuestros clientes. Nos enorgullece ser el socio cafetero de empresas líderes y eventos memorables. */}
                          Trabajamos con compromiso, cercanía y detalle, adaptándonos a cada cliente —desde reuniones corporativas hasta celebraciones sociales— para que cada taza refleje lo mejor de nosotros:
                          la pasión por brindar experiencias con aroma a café.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-wrapper">
                  <img src={aboutImage} alt="Sobre nosotros - Café de Excelencia"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-bs-version="5.1" className="header09 startm5 cid-uXQ7jkeptr" id="call-to-action-2-uXQ7jkeptr">
        <div className="container-fluid">
            <div className="row">
                <div className="content-wrap col-12 col-md-6">
                    <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-2">
                        <strong>Tu Evento, Nuestro Café</strong>
                    </h1>
                    
                    <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">Solicita una cotización personalizada para tu próxima reunión o celebración.</p>
                    <div className="mbr-section-btn">
                        <a className="btn btn-primary display-7" href="/contacto">Solicitar Presupuesto</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
export default Article