import Header from 'presentation/components/header'
import React from 'react'
import About from './components/About'
import Benefits from './components/benefits'
import Courses from './components/courses'
import Depositions from './components/depositions'

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Courses />
      <Depositions />
      <Benefits />
    </>
  )
}

export default Home
