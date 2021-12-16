import React from 'react'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Rocket</h1>
      <nav>
        <ul>
          <li>quem somos</li>
          <li>cursos </li>
          <li>plano</li>
        </ul>
      </nav>
      <div className="buttonsLogin">
        <button className="buttonSignIn">acessar minha conta</button>
        <button className="buttonCreateAccount">crie sua conta</button>
      </div>
    </Container>
  )
}

export default Header
