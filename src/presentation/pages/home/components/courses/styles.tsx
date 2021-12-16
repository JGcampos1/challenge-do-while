import styled from 'styled-components'

export const ContainerDescriptionCourses = styled.div`
    background: var(--blue-clean-pastel);
    padding: 5px 32px;
    .container{
    max-width:960px;
    margin: 30px auto;
    backdrop-filter: blur(10px);
    h2{
      color:var(--white)
    }
    p{
      color:var(--dark-color)
    }
   
    .ContainerBoxCourses{
      display: flex;
      flex-wrap: wrap;
    }
    .boxCourses{
      display:flex;
      justify-content:space-between;
      flex-direction:column;
      align-items:center;

      width:130px;
      height: 130px;
      padding:10px;

      text-align: center;
      margin:20px;
      background: #ffffff;
      backdrop-filter: blur(10px);
      border-radius: 10px;
      img{
        max-height:100px;
        max-width:100px;
      }
    p{
      color:var(--dark-color);
      font-weight: bold;
    }
    }
    .boxCourses:hover{
    box-shadow: 4px 4px 4px #CCC;

    }
  }

  
  }
`
