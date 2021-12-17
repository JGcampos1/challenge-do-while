import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 5px 32px;

  h1 {
    color: var(--purple-pastel);
  }
  nav {
    ul {
      display: flex;
    }
    li {
      color: var(--dark-color);
      font-weight: 600;
      text-transform: uppercase;
      padding: 10px;
      list-style: none;
      border-radius: 10px;
      transition: 300ms;
    }
    li:hover {
      background: var(--purple-pastel);

      color: var(--white);
    }
  }

  .buttonsLogin {
    .buttonSignIn {
      margin-right: 15px;
      background: transparent;
      padding: 10px 15px;
      color: var(--blue-pastel);
      transition: 300ms;
      border-radius: 10px;
    }
    .buttonSignIn:hover {
      background: var(--blue-pastel);
      color: var(--white);
    }
    .buttonCreateAccount {
      margin-right: 15px;
      background: var(--blue-pastel);
      color: var(--white);
      padding: 10px 15px;
      border-radius: 10px;
    }
  }
`
