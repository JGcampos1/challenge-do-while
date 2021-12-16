import Header from 'presentation/components/header'
import React from 'react'
import About from './components/About'
import Courses from './components/courses'

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Courses />
    </>
  )
}

export default Home
