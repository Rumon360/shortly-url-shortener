import React from "react";
import styled from "styled-components";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";
const InfoSection = () => {
  return (
    <StyledInfo>
      <Stats>
        <h2>Advanced Statistics</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          labore.
        </p>
      </Stats>
      <Cards>
        <Card className="card-1">
          <div className="image">
            <img src={brand} alt="" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione sequi amet aliquam eaque vero perferendis, sit corporis
            nulla ea?
          </p>
        </Card>
        <Card className="card-2">
          <div className="image">
            <img src={detailed} alt="" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione sequi amet aliquam eaque vero perferendis, sit corporis
            nulla ea?
          </p>
        </Card>
        <Card className="card-3">
          <div className="image">
            <img src={customizable} alt="" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione sequi amet aliquam eaque vero perferendis, sit corporis
            nulla ea?
          </p>
        </Card>
      </Cards>
    </StyledInfo>
  );
};
const StyledInfo = styled.div`
  min-height: 120vh;
  background: hsl(0, 0%, 75%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
  margin-bottom: 10rem;
  width: 100%;
  @media (max-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @media (max-width: 600px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    min-height: 60vh;
    padding-top: 5rem;
  }
`;
const Stats = styled.div`
  text-align: center;
  h2 {
    font-size: 3rem;
    color: hsl(260, 8%, 14%);
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    color: grey;
    padding-top: 1rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    margin-top: 5rem;
  }
  .card-1 {
    @media (max-width: 600px) {
      margin-top: 10rem;
    }
    img {
      width: 8%;
      background: hsl(255, 11%, 22%);
      border-radius: 50%;
      padding: 1rem;
      overflow: visible;
      position: absolute;
      top: 65px;
      left: 1;
      @media (max-width: 1024px) {
        top: 85px;
      }
      @media (max-width: 600px) {
        width: 25%;
        left: 38%;
        top: 8%;
      }
    }
  }
  .card-2 {
    margin-top: 8rem;
    @media (max-width: 600px) {
      margin-top: 10rem;
    }
    img {
      width: 8%;
      background: hsl(255, 11%, 22%);
      border-radius: 50%;
      padding: 1rem;
      overflow: visible;
      position: absolute;
      top: 125px;
      left: 1;
      @media (max-width: 1024px) {
        top: 145px;
      }
      @media (max-width: 600px) {
        width: 25%;
        left: 38%;
        top: 40%;
      }
    }
  }
  .card-3 {
    margin-top: 16rem;
    @media (max-width: 600px) {
      margin-top: 10rem;
      margin-bottom: 5rem;
    }
    img {
      width: 8%;
      background: hsl(255, 11%, 22%);
      border-radius: 50%;
      padding: 1rem;
      overflow: visible;
      position: absolute;
      top: 195px;
      left: 1;
      @media (max-width: 1024px) {
        top: 210px;
      }
      @media (max-width: 600px) {
        width: 25%;
        left: 38%;
        top: 71%;
      }
    }
  }
`;
const Card = styled.div`
  width: 400px;
  height: 500px;
  background: white;
  margin-right: 1rem;
  margin-left: 1rem;
  padding: 5rem 4rem;
  @media (max-width: 1024px) {
    height: 300px;
    padding: 2rem 2rem;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
  h3 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    color: hsl(260, 8%, 14%);
    @media (max-width: 1024px) {
      font-size: 1.3rem;
      padding-bottom: 0rem;
      padding-top: 0rem;
    }
    @media (max-width: 600px) {
      margin-top: 3rem;
    }
  }
  p {
    font-size: 1.2rem;
    color: grey;
    @media (max-width: 1024px) {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }
`;
export default InfoSection;
