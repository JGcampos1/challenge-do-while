import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 5px 32px;
  .containerTitle {
    margin: 32px auto;
    p {
      font-weight: bold;
      margin-bottom: 5px;
      color: var(--blue-pastel);
    }
    h2 {
      color: var(--pruple-pastel);
    }
  }
  .containerDepositions {
    display: flex;
    max-width: 850px;
    flex-wrap: wrap;
    margin: auto;
    .container {
      display: flex;
      flex-direction: column;
      width: 350px;
      margin: 30px;
      background: #f0f0f5;
      border-radius: 10px;
      .headerDepositions {
        padding: 10px;
        border-radius: 10px 10px 0 0;

        background: var(--pruple-pastel);
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          width: 75px;
          height: 75px;
          border-radius: 50%;
        }
        .namePeopleDeposition {
          flex: 1;
          text-align: right;
          h5 {
            margin-left: 10px;
            text-overflow: clip;
            color: var(--white);
          }
          p {
            color: var(--dark-color);
          }
        }
      }
      .description {
        padding: 30px;
        p {
          color: var(--dark-color);
        }
      }
    }
  }
`
