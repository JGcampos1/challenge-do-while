import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

import { Container } from './styles'

const Plans: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>Nossos Panos</h2>
        <div className="flexPlain">
          <div className="containerPlain">
            <div className="titleContainer">
              <div className="price">
                <h6>12x</h6>
                <h3>R$ 85</h3>
              </div>

              <p>à vista R$1.020</p>
            </div>
            <ul>
              <li>
                <FaCheck className="icon-enabled" />{' '}
                <p>Acesso a TODOS os cursos da plataforma</p>
              </li>
              <li>
                <FaCheck className="icon-enabled" /> <p>Rocket Challenges</p>
              </li>
              <li>
                <FaCheck className="icon-enabled" /> <p>Rocket Cases</p>
              </li>
              <li>
                <FaCheck className="icon-enabled" /> <p>Certificado</p>
              </li>
              <li>
                <FaTimes className="icon-disabled" />
                <p>Alura Língua (incluindo curso Inglês para Devs)</p>
              </li>
            </ul>

            <button>inscrever-se</button>
          </div>
          <div className="containerPlain">
            <div className="titleContainer">
              <div className="price">
                <h6>12x</h6>
                <h3>R$ 120</h3>
              </div>

              <p>à vista R$1.440</p>
            </div>
            <ul>
              <li>
                <FaCheck className="icon-enabled" />{' '}
                <p>Acesso a TODOS os cursos da plataforma</p>
              </li>
              <li>
                <FaCheck className="icon-enabled" /> <p>Rocket Challenges</p>
              </li>
              <li>
                <FaCheck className="icon-enabled" /> <p>Rocket Cases</p>
              </li>
              <li>
                <FaCheck className="icon-enabled" /> <p>Certificado</p>
              </li>
              <li>
                <FaCheck className="icon-enabled" />
                <p>Alura Língua (incluindo curso Inglês para Devs)</p>
              </li>
            </ul>

            <button>inscrever-se</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Plans
