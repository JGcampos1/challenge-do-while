import React from 'react'

import { Container } from './styles'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <a href="http://">
          <FaFacebook />
        </a>
        <a href="http://">
          <FaTwitter />
        </a>
        <a href="http://">
          <FaInstagram />
        </a>
        <a href="http://">
          <FaLinkedin />
        </a>
      </div>
    </Container>
  )
}

export default Footer
