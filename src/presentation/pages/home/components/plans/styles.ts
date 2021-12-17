import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 32px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: var(--purple-pastel);
  }
  .flexPlain {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .containerPlain {
    width: 300px;
    margin: 32px 32px 0px 0px;
    display: flex;
    flex-direction: column;
    background: #f0f0f5;
    .titleContainer {
      padding: 20px;
      color: var(--white);
      background: var(--purple-pastel);
      border-radius: 10px 10px 0 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;
      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        h6 {
          margin-right: 10px;
        }
      }
      p {
        font-weight: 500;
      }
    }
    ul {
      li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        margin: 10px;
        padding: 0 10px;
        p {
          flex: 1;
          font-weight: bold;
          color: var(--dark-color);
        }
        svg {
          margin-right: 20px;
          font-size: 21px;
        }
        .icon-enabled {
          color: Chartreuse;
        }
        .icon-disabled {
          color: red;
        }
      }
    }
    button {
      background: var(--gren-clean-pastel);
      width: 80%;
      margin: 32px auto;
      padding: 20px;
      font-size: 18px;
      font-weight: bold;
      color: var(--dart-color);
      border-radius: 10px;
      transition: 500ms;
    }
    button:hover {
      background: #82d8d9;
    }
  }
`
