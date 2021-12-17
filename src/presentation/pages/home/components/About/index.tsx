import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../../../main/assets/looties/rocket.json'
import { Container } from './styles'

const About: React.FC = () => {
  console.log(animationData)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className="conteinerAboute" id="About">
        <h2>Quem é a Rocket?</h2>
        <p>
          Mais do que uma plataforma de educação em tecnologia, somos uma
          comunidade incrível de programadores em busca do próximo nível
        </p>
        <p>
          Em um mundo onde a informação fica obsoleta cada vez mais rápido,
          velocidade de aprendizado é a chave para o sucesso.
        </p>
        <p>
          Por isso a Rocketoferece através de uma plataforma inteligente e
          metodologia prática, além de comunidade, eventos, conteúdo e conexão
          com o mercado de trabalho, todas as ferramentas que você precisa para
          masterizar no menor tempo possível as tecnologias mais modernas de
          desenvolvimento web e mobile, e dessa forma avançar para o próximo
          nível como programador
        </p>
      </div>
    </Container>
  )
}

export default About
