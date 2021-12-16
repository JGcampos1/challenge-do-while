import React from 'react'
import Router from './main/routes/router'
import ReactDOM from 'react-dom'
import GlobalStyle from 'presentation/styles/globalStyles'

ReactDOM.render(
  <>
    <Router />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
