import React from "react";
import styled from "styled-components";
const Boost = () => {
  return (
    <StyledBoost>
      <div className="info">
        <h1>Boost your links today</h1>
        <a href="#linkShortener">
          <button>Get Started</button>
        </a>
      </div>
    </StyledBoost>
  );
};
const StyledBoost = styled.div`
  min-height: 30vh;
  width: 100%;
  background: hsl(257, 27%, 26%);
  margin-bottom: 10rem;
  @media (max-width: 600px) {
    padding: 3rem 1.5rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    @media (max-width: 600px) {
      text-align: center;
      padding: 0rem;
    }
    h1 {
      font-size: 4rem;
      color: white;
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
    button {
      font-size: 1.5rem;
      font-weight: bold;
      padding: 1rem 2rem;
      background: hsl(180, 66%, 49%);
      border-radius: 20px;
      border: none;
      color: white;
      margin-top: 2rem;
      &:hover {
        background: hsl(180, 75.82417582417581%, 64.31372549019608%);
      }
      @media (max-width: 600px) {
        padding: 1rem 1.5rem;
        width: 100%;
      }
    }
  }
`;
export default Boost;
