import styled from "styled-components";

const AboutUsStyled = styled.section`
  margin: 0;
  text-align: center;

  .about-us__team-members {
    display: flex;
    justify-content: space-around;
    margin-top: -100px;
  }
  .about-us__team-members img {
    height: 200px;
    border-radius: 50%;
    width: 200px;
  }
  .about-us__heading {
    color: #e8be02;
    font-size: 64px;
    font-weight: 900;
  }
  .about-us__description {
    color: #4f4d53;
    font-size: 20px;
    line-height: 1.5;
  }
  .about-us__team-members-info {
    display: flex;
    justify-content: space-around;
    margin: 80px 0;
  }
  .about-us__team-members-info .about-us__team-member {
    display: flex;
  }
  .about-us__team-members-info .about-us__team-member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .about-us__team-members-info
    .about-us__team-member
    .about-us__team-member__info {
    padding-left: 35px;
    text-align: left;
  }
  .about-us__team-members-info
    .about-us__team-member
    .about-us__team-member__info
    h4 {
    margin-bottom: 0;
    color: #e8be02;
  }
  .about-us__team-members-info
    .about-us__team-member
    .about-us__team-member__info
    p {
    margin-top: 3px;
    margin-bottom: 0;
  }
  @media (max-width: 1200px) {
    .about-us__team-members {
      margin-top: -80px;
    }
    .about-us__team-members img {
      height: 160px;
      width: 160px;
    }
  }
  @media (max-width: 860px) {
    .about-us__team-members {
      margin-top: -65px;
    }
    .about-us__team-members img {
      height: 130px;
      width: 130px;
    }
    .about-us__heading {
      font-size: 55px;
    }
    .about-us__description {
      font-size: 17px;
    }
    .about-us__team-members-info .about-us__team-member img {
      width: 85px;
      height: 85px;
    }
  }
  @media (max-width: 650px) {
    .about-us__team-members {
      margin-top: -50px;
    }
    .about-us__team-members img {
      height: 100px;
      width: 100px;
    }
    .about-us__heading {
      font-size: 45px;
    }
    .about-us__team-members-info .about-us__team-member img {
      width: 75px;
      height: 75px;
    }
    .about-us__team-members-info
      .about-us__team-member
      .about-us__team-member__info {
      padding-left: 15px;
    }
  }
`;

export default AboutUsStyled;
