import React from "react";
import styled from "styled-components";
// Svgs
import logo from "../images/logo-white.svg";
import facebook from "../images/icon-facebook.svg";
import insta from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <StyledFooter>
      <Logo>
        <img onClick={topFunction} src={logo} alt="logo" />
      </Logo>
      <Info>
        <div className="features">
          <h3>Features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="company">
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </Info>
      <Socials>
        <div className="socials-logo">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="socials-logo">
          <img src={twitter} alt="twitter" />
        </div>
        <div className="socials-logo">
          <img src={pinterest} alt="pinterest" />
        </div>
        <div className="socials-logo">
          <img src={insta} alt="insta" />
        </div>
      </Socials>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  min-height: 40vh;
  background: hsl(260, 8%, 14%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  line-height: 2;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .company {
    padding-top: 2rem;
    @media (max-width: 600px) {
      padding: 0;
      margin-left: 0rem;
      margin-top: 2rem;
    }
  }
  @media (max-width: 1024px) {
    .company {
      margin-left: 2rem;
      @media (max-width: 600px) {
        margin-left: 0rem;
      }
    }
    .resources {
      margin-left: 2rem;
      @media (max-width: 600px) {
        margin-left: 0rem;
        margin-top: 2rem;
      }
    }
    .features {
      padding-top: 4rem;
      @media (max-width: 600px) {
        padding: 0;
        margin-top: 2rem;
      }
    }
  }
`;
const Logo = styled.div`
  padding-left: 10rem;
  padding-top: 5rem;
  @media (max-width: 1024px) {
    padding-left: 5rem;
    padding-top: 6rem;
  }
  @media (max-width: 600px) {
    padding: 0;
    padding-top: 4rem;
  }
`;
const Socials = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 6rem;
  padding-left: 4rem;
  padding-right: 11rem;
  @media (max-width: 1024px) {
    justify-content: space-between;
    padding-right: 5rem;
    padding-top: 6.5rem;
  }
  @media (max-width: 600px) {
    padding-right: 0rem;
    padding-top: 0rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
    padding-left: 0rem;
  }
  .socials-logo {
    @media (max-width: 600px) {
      margin: 0rem 1rem;
    }
  }
`;
export default Footer;

// Use Grid to make 4 colums each having info
