import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderSection>
        <ImageContainer>
          <LogoImage src={logo} alt="Strandkanten logo" />
        </ImageContainer>
        <h1>Strandkanten</h1>
        <NavBar />
      </HeaderSection>
    </div>
  );
};

export default Header;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 668px) {
    flex-direction: row;
    margin: 24px 0 0 0;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
    margin: 5px 0 0 0;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  padding-top: 24px;

  @media (min-width: 668px) {
    padding-top: 0;
  }
`;
const LogoImage = styled.img`
  height: auto;
  width: 100%;
`;
