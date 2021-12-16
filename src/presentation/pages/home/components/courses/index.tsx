import { listCourses } from 'data/listCourses'
import React from 'react'

import { ContainerDescriptionCourses } from './styles'
import CoverCourses1 from '../../../../../main/assets/coverCourses1.jpg'
import CoverCourses2 from '../../../../../main/assets/coverCourses2.png'

const Courses: React.FC = () => {
  return (
    <ContainerDescriptionCourses>
      <div className="container">
        <div>
          <h2>Cursos de Programação</h2>
          <p>
            São mais de 400 cursos em diversas as áreas da programação: Java,
            PHP, Javascript, .NET, Python, Delphi, banco de dados e muito mais.
            Confira agora!
          </p>
        </div>
        <div className="ContainerBoxCourses">
          {listCourses.map((courses, index) => {
            return (
              <div key={index} className="boxCourses">
                <img
                  src={index % 2 ? CoverCourses1 : CoverCourses2}
                  alt="capa do curso"
                />
                <p>{courses}</p>
              </div>
            )
          })}
        </div>
      </div>
    </ContainerDescriptionCourses>
  )
}

export default Courses
