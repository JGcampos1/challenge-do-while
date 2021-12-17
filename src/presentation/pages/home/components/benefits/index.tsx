import React from 'react'

import { Container } from './styles'

import { FaCalendar, FaMoon, FaCodeBranch } from 'react-icons/fa'

const Benefits: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="benefit">
          <FaCalendar />
          <h5>Acesso completo durante 1 ano</h5>
        </div>
        <div className="benefit">
          <FaMoon />
          <h5>Estude 24h/dia onde e quando quiser</h5>
        </div>
        <div className="benefit">
          <FaCodeBranch />
          <h5>Novos cursos todas as semanas</h5>
        </div>
      </div>
    </Container>
  )
}

export default Benefits
