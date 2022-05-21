/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "../../components/Container";
import FooterStyled from "../../components/FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="footer__wrapper">
          <div className="footer__column">
            <h3>Team</h3>
            <ul>
              <li>
                <a href="#">
                  <h4>Lisa</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>danielle</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Brian</h4>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <h4>Join us!</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Learn More</h3>
            <ul>
              <li>
                <a href="#">
                  <h4>Manifesto</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Works</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Stories</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Meet Us</h3>
            <ul>
              <li>
                <a href="#">
                  <h4>Studio</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Community</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Workshops</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#">
                  <h4>Twitter</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Facebook</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Instagram</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
