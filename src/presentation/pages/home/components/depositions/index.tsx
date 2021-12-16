import { listDepositions } from 'data/listDepositions'
import React from 'react'

import { Container } from './styles'

const Depositions: React.FC = () => {
  return (
    <Container>
      <div className="containerTitle">
        <p>vale a pena estudar na rocket?</p>
        <h2>Veja alguins depoimentos ex alunos</h2>
      </div>
      <div className="containerDepositions">
        {listDepositions.map((deposition, index) => {
          return (
            <div className="container" key={index}>
              <div className="headerDepositions">
                <img
                  src={deposition.image}
                  alt="imagem da pessoa que escreveu o depoimento"
                />
                <div className="namePeopleDeposition">
                  <h5>{deposition.name}</h5>
                  <p>{deposition.office}</p>
                </div>
              </div>
              <div className="description">
                <p>{deposition.deposition}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Depositions
