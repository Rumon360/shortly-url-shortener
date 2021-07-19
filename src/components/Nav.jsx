import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Fade as Hamburger } from "hamburger-react";
const Nav = ({ hamburger, setHamburger }) => {
  const screenWidth = window.innerWidth;

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };
  return (
    <StyledNav>
      <Logo>
        <img onClick={topFunction} src={logo} alt="logo" />
        <Features>
          <ul>
            <li>
              <a href="/">
                <h3>Features</h3>
              </a>
            </li>
            <li>
              <a href="/">
                <h3>Pricing</h3>
              </a>
            </li>
            <li>
              <a href="/">
                <h3>Resources</h3>
              </a>
            </li>
          </ul>
        </Features>
      </Logo>
      <Button>
        <a href="/">
          <h3>Login</h3>
        </a>
        <button className="sign-up">Sign Up</button>
      </Button>
      {screenWidth < "800" && (
        <HamburgerMenu id="nav-icon4">
          <Hamburger onToggle={hamburgerHandler} color="#bfbfbf" size={40} />
        </HamburgerMenu>
      )}
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background: white;
  top: 0;
  z-index: 5;
  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 600px) {
  }
`;
const Features = styled.div`
  margin-left: 2rem;
  ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    justify-content: center;
    align-items: center;
  }
  li {
    margin-left: 2rem;
    h3 {
      font-size: 1.22rem;
      font-weight: lighter;
      &:hover {
        color: hsl(255, 11%, 22%);
      }
    }
    a {
      color: grey;
      text-decoration: none;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
  a {
    text-decoration: none;
    padding-right: 5rem;
    h3 {
      color: grey;
    }
  }
  .sign-up {
    padding: 0rem 1rem;
    border-radius: 10%;
    background: hsl(180, 66%, 49%);
    border: none;
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    color: #ffffff;
    font-size: 15px;
    padding: 15px 25px 15px 25px;
    text-decoration: none;
    &:hover {
      background: hsl(180, 75.82417582417581%, 64.31372549019608%);
    }
  }
`;
const HamburgerMenu = styled.div``;
export default Nav;
