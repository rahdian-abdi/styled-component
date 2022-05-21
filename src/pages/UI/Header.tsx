import React from "react";
import Container from "../../components/Container";
import gtd_logo from "../../assets/media/gtd_logo.png";
import HeaderStyled from "../../components/HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <div className="header__wrapper">
          <div className="logo">
            <img src={gtd_logo} alt="gtd" />
          </div>
        </div>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
