import styled from 'styled-components'

export const Container = styled.div`
  background: var(--blue-clean-pastel);
  padding: 5px 32px;
  .container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .benefit {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      margin: 5px;
      min-width: 100px;
      width: 250px;

      svg {
        font-size: 36px;
        margin-bottom: 20px;
      }
      h5 {
        text-align: center;
      }
    }
  }
`
