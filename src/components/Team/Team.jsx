import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Carlos',
    position: 'Maestro Cafetero',
    image: '/src/assets/images/photo-1607556114526-058f5efdf49e.jpeg'
  },
  {
    name: 'Sofía',
    position: 'Logística Élite',
    image: '/src/assets/images/photo-1615065591984-6800446436a1.jpeg'
  },
  {
    name: 'Mateo',
    position: 'Gerente de Cuentas',
    image: '/src/assets/images/photo-1564564244660-5d73c057f2d2.jpeg'
  },
  {
    name: 'Valentina',
    position: 'Innovación en Sabores',
    image: '/src/assets/images/photo-1578161456171-a346107c3dcf.jpeg'
  }
];

const Team = () => {
  return (
    <section className="team cid-team-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 content-head">
            <div className="section-head mb-5">
              <h4 className="section-title align-center mb-0">
                <strong>Nuestro Equipo</strong>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="item features-image col-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img mb-3">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="item-content">
                  <h5 className="item-title" style={{ color: '#343a40', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    <strong>{member.name}</strong>
                  </h5>
                  <h6 className="item-subtitle" style={{ color: '#007bff', fontSize: '1rem', fontWeight: '500' }}>{member.position}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
