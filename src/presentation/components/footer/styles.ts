import styled from 'styled-components'

export const Container = styled.div`
  background: var(--dark-color);
  height: 250px;
  .container {
    max-width: 960px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      padding: 10px;
      color: var(--white);
      border-radius: 10px;
    }
    svg {
      font-size: 50px;
    }

    a:hover {
      background: var(--white);
      color: var(--purple-pastel);
    }
  }
`
