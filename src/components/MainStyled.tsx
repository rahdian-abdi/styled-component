import styled from "styled-components";
import img_hero from '../../src/assets/media/img_hero.jpg'

const MainStyled = styled.section `

  background-image: url(${img_hero});
  color: #fff;
  height: 65vh;
  background-position: right;
  background-size: cover;

  .main__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }
  
  .main__wrapper h1 {
    margin: -50px 0 0;
    color: #4f4d53;
    font-size: 100px;
    font-weight: 900;
  }

  @media (max-width: 1200px) {
    .main__wrapper h1 {
      font-size: 90px;
    }
  }
  @media (max-width: 1000px) {
    .main__wrapper h1 {
      font-size: 80px;
    }
  }
  @media (max-width: 800px) {
    .main__wrapper h1 {
      font-size: 70px;
    }
  }
  @media (max-width: 800px) {
    .main__wrapper {
      align-items: flex-start;
    }
    .main__wrapper h1 {
      font-size: 60px;
      margin-top: 110px;
    }
  }
`;

export default MainStyled;
