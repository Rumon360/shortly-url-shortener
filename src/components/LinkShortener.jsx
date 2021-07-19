import React, { useState } from "react";
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
// Animations
import { fade, inputFade } from "./animation";
// axios
import axios from "axios";
const LinkShortener = () => {
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const [isLinkCame, setIsLinkCame] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [isError, setError] = useState(false);
  const inputHandler = (e) => {
    const typed = e.target.value;
    setInput(typed);
  };
  const clickHandler = (e) => {
    setButtonClicked(!buttonClicked);
    const getData = async (url) => {
      await axios({
        method: "get",
        url: `https://api.shrtco.de/v2/shorten?url=${url}`,
        responseType: "json",
      })
        .then(function (response) {
          setLink(response.data.result.full_short_link);
          setIsLinkCame(!isLinkCame);
        })
        .catch(function (error) {
          // handle error
          if (error) {
            setError(!isError);
          }
          console.log(error);
        });
    };
    e.preventDefault();
    getData(input);
    setInput("");
  };
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setLinkCopied(!linkCopied);
  };

  return (
    <MainDiv id="linkShortener">
      <StyledLinkShortener>
        <form>
          <input
            onChange={inputHandler}
            type="text"
            value={input}
            typeof="url"
            required
          />
          <button onClick={clickHandler}>Shorten It!</button>
        </form>
      </StyledLinkShortener>
      {isLinkCame ? (
        // Animation here
        <LinkedInput variants={inputFade} initial="hidden" animate="show">
          <motion.input type="text" value={link} id="myInput"></motion.input>
          <LinkButton
            selected={
              linkCopied ? " hsl(255, 11%, 22%)" : "hsl(180, 66%, 49%);"
            }
            onClick={() => copyToClipboard(link)}
          >
            {linkCopied ? "Copied" : "Copy Text"}
          </LinkButton>
        </LinkedInput>
      ) : (
        // Animation Here
        <LoadinOrInvalid error={isError ? "red" : "hsl(255, 11%, 22%)"}>
          {buttonClicked ? (
            <motion.h1 variants={fade} initial="hidden" animate="show">
              {isError ? "Invalid Url" : "Loading"}
            </motion.h1>
          ) : (
            ""
          )}
        </LoadinOrInvalid>
      )}
    </MainDiv>
  );
};
const MainDiv = styled.div`
  background: hsl(0, 0%, 75%);
  min-height: 80vh;
  margin-top: 3rem;
  @media (max-width: 600px) {
    padding-top: 0rem;
    min-height: 60vh;
  }
`;
const StyledLinkShortener = styled.div`
  padding: 0rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  @media (max-width: 1024px) {
    padding: 0rem 5rem;
    padding-top: 15rem;
  }
  @media (max-width: 600px) {
    padding: 0rem 1.5rem;
    padding-top: 10rem;
  }
  form {
    background: hsl(257, 27%, 26%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0rem;
    border-radius: 25px;
    @media (max-width: 1024px) {
      border-radius: 15px;
      padding: 2rem 0rem;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      padding: 1.5rem 0rem;
      border-radius: 15px;
    }
    input {
      width: 70%;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 3rem;
      outline: none;
      overflow: scroll;
      border-radius: 15px;
      margin-right: 1rem;
      border: none;
      @media (max-width: 1024px) {
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 2rem;
      }
      @media (max-width: 600px) {
        font-size: 1.5rem;
        width: 90%;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
    button {
      font-size: 2rem;
      font-weight: bold;
      padding: 1.5rem 3.5rem;
      background: hsl(180, 66%, 49%);
      border-radius: 15px;
      border: none;
      color: white;
      @media (max-width: 1024px) {
        padding: 1.3rem 2rem;
        font-size: 1.5rem;
      }
      @media (max-width: 600px) {
        padding: 0.5rem 0rem;
        font-size: 1.5rem;
        width: 90%;
        margin-top: 1rem;
      }
    }
  }
`;

const LinkedInput = styled(motion.div)`
  padding: 0rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  margin-bottom: 8rem;

  @media (max-width: 1024px) {
    padding: 0rem 5rem;
    padding-top: 5rem;
  }
  @media (max-width: 600px) {
    padding: 0rem 1.5rem;
    padding-top: 5rem;
    flex-direction: column;
    margin-bottom: 5rem;
    padding-bottom: 5rem;
  }
  input {
    width: 70%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 3rem;
    outline: none;
    overflow: scroll;
    border-radius: 15px;
    margin-right: 1rem;
    border: none;
    box-shadow: 2px 5px hsl(260, 8%, 14%);
    @media (max-width: 600px) {
      width: 90%;
      font-size: 1.5rem;
      margin-right: 0rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`;
const LinkButton = styled(motion.button)`
  font-size: 2rem;
  font-weight: bold;
  padding: 1.5rem 3rem;
  background: ${(props) => props.selected};
  border-radius: 15px;
  border: none;
  color: white;
  box-shadow: 2px 5px hsl(260, 8%, 14%);
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 1.8rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0rem;
    font-size: 1.5rem;
    width: 90%;
    margin-top: 1rem;
  }
`;
const LoadinOrInvalid = styled(motion.div)`
  color: ${(props) => props.error};
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 4rem;
  h1 {
    font-size: 3rem;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;
export default LinkShortener;
