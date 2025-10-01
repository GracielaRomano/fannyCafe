import React from 'react';
import './Metrics.css';

const metrics = [
  {
    number: '500',
    text: 'Cafés Servidos'
  },
  {
    number: '100',
    text: 'Clientes Satisfechos'
  },
  {
    number: '20',
    text: 'Años Experiencia'
  }
];

const Metrics = () => {
  return (
    <section className="metrics">
      <div className="container">
        <div className="row justify-content-center ">
          {metrics.map((metric, index) => (
            <div key={index} className="item features-without-image col-12 col-md-6 col-lg-4">
              <div className="item-wrapper">
                <div className="card-box align-left">
                  <p className="card-title mbr-fonts-style mb-3 display-1 text-center">
                    <strong>{metric.number}</strong>
                  </p>
                  <p className="card-text mb-3 text-center">{metric.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
