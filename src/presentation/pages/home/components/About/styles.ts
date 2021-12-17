import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 5px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .conteinerAboute {
    margin-left: 30px;
    flex: 3;
    h2 {
      color: var(--purple-pastel);
    }
    p {
      margin: 10px 0;
      color: var(--dark-color);
      font-weight: 500px;
    }
  }
`
