import React from "react";
import styled from "styled-components";
import illustration from "../images/illustration-working.svg";
import { motion, AnimatePresence } from "framer-motion";
import { burgerAnim } from "./animation";
const MainSection = ({ hamburger }) => {
  return (
    <MainSectionStyled id="mainSection">
      <AnimatePresence>
        {hamburger && (
          <HamSlider
            variants={burgerAnim}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div className="first">
              <motion.h3>Features</motion.h3>
            </motion.div>
            <motion.div className="second">
              <motion.h3>Pricing</motion.h3>
            </motion.div>
            <motion.div className="third">
              <motion.h3>Resource</motion.h3>
            </motion.div>
            <motion.hr />
            <motion.div className="fourth">
              <motion.h3>Login</motion.h3>
            </motion.div>
            <motion.div className="fifth">
              <motion.button>Sign Up</motion.button>
            </motion.div>
          </HamSlider>
        )}
      </AnimatePresence>
      <HeroSection>
        <div className="about">
          <h1>More than just shorter links</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            impedit.
          </p>
          <a href="#linkShortener">
            <button>Get Started</button>
          </a>
        </div>
        <Illustration>
          <img src={illustration} alt="illustration" />
        </Illustration>
      </HeroSection>
    </MainSectionStyled>
  );
};

const MainSectionStyled = styled(motion.div)`
  min-height: 90vh;
  background: white;
  padding-top: 1rem;
`;
const HeroSection = styled.div`
  display: flex;
  padding: 0rem 0rem;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    text-align: center;
    margin-top: 1rem;
    padding-bottom: 4rem;
  }
  .about {
    padding: 0rem 10rem;
    @media (max-width: 1024px) {
      padding: 0rem 5rem;
    }
    @media (max-width: 600px) {
      padding: 0rem 1.5rem;
      margin-top: 2rem;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 4rem;
    line-height: 1.2;
    color: hsl(255, 11%, 22%);
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    color: grey;
  }
  button {
    padding: 0rem 1rem;
    border-radius: 10%;
    background: hsl(180, 66%, 49%);
    border: none;
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    color: #ffffff;
    font-size: 20px;
    padding: 15px 30px 15px 30px;
    text-decoration: none;
    &:hover {
      background: hsl(180, 75.82417582417581%, 64.31372549019608%);
    }
  }
`;
const Illustration = styled.div`
  img {
    width: 120%;
  }
`;
const HamSlider = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: hsl(257, 27%, 26%);
  color: white;
  margin: 1rem 1.5rem;
  border-radius: 15px;
  .first {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      margin-top: 3rem;
    }
  }
  .second {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  }
  .third {
    h3 {
      font-size: 1.2rem;
    }
  }
  hr {
    color: gray;
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    opacity: 0.5;
  }
  .fourth {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }
  .fifth {
    button {
      border-radius: 10%;
      background: hsl(180, 66%, 49%);
      border: none;
      -webkit-border-radius: 28;
      -moz-border-radius: 28;
      border-radius: 28px;
      color: #ffffff;
      font-size: 1.2rem;
      padding: 15px 100px 15px 100px;
      text-decoration: none;
      margin-bottom: 3rem;
      &:hover {
        background: hsl(180, 75.82417582417581%, 64.31372549019608%);
      }
    }
  }
`;
export default MainSection;
