
import Container from '../../components/Container'
import img_lisa_circle from "../../assets/media/img_lisa_circle.png"
import img_danielle_circle from "../../assets/media/img_danielle_circle.png"
import img_brian_circle from "../../assets/media/img_brian_circle.png"
import AboutUsStyled from '../../components/AboutUsStyled'

const AboutUs = () => {
  return (
    <div>
        <AboutUsStyled>
          <Container>
            <div className="about-us__wrapper">
              <div className="about-us__team-members">
                <img src={img_lisa_circle} alt="lisa gtd" />
                <img src={img_danielle_circle} alt="danielle gtd" />
                <img src={img_brian_circle} alt="brian gtd" />
              </div>
              <h2 className="about-us__heading">How it started</h2>
              <p className="about-us__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
                ulpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="about-us__team-members-info">
                <div className="about-us__team-member">
                  <img src={img_lisa_circle} alt="lisa gtd" />
                  <div className="about-us__team-member__info">
                    <h4>Lisa</h4>
                    <p>lisa@gtd.co</p>
                  </div>
                </div>
                <div className="about-us__team-member">
                  <img src={img_danielle_circle} alt="danielle gtd" />
                  <div className="about-us__team-member__info">
                    <h4>Danielle</h4>
                    <p>danielle@gtd.co</p>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </AboutUsStyled>
        {/* End about-us section */}
    </div>
  )
}

export default AboutUs