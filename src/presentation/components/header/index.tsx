/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../main/assets/looties/menu-bar.json'

import { Container } from './styles'

interface IanimationState {
  isStopped: boolean
  isPaused: boolean
  isOpened: boolean
}

const Header: React.FC = () => {
  const [animationState, setAnimationState] = useState<IanimationState>({
    isStopped: true,
    isPaused: false,
    isOpened: false
  })
  const [isMobile, setIsMobile] = useState<boolean>(true)
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Container>
      <div className="containerTitle">
        <h1>Rocket</h1>
        <div
          className="menuBar"
          onClick={() => {
            setAnimationState({
              ...animationState,
              isStopped: !animationState.isStopped,
              isOpened: !animationState.isOpened
            })
          }}
        >
          <Lottie
            options={defaultOptions}
            height={35}
            width={35}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </div>
      {isMobile ? (
        <nav className={!animationState.isOpened ? 'navClosed' : 'navOpened'}>
          <ul>
            <li>quem somos</li>
            <li>cursos </li>
            <li>plano</li>
          </ul>
          <div className="buttonsLogin">
            <button className="buttonSignIn">acessar minha conta</button>
            <button className="buttonCreateAccount">crie sua conta</button>
          </div>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>quem somos</li>
            <li>cursos </li>
            <li>plano</li>
          </ul>
          <div className="buttonsLogin">
            <button className="buttonSignIn">acessar minha conta</button>
            <button className="buttonCreateAccount">crie sua conta</button>
          </div>
        </nav>
      )}
    </Container>
  )
}

export default Header
