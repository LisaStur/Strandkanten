import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <LinkContainer>
      <StyledLink to="/">Hem</StyledLink>
      <StyledLink to="/menu">Meny</StyledLink>
      <StyledLink to="/contact">Kontakt</StyledLink>
    </LinkContainer>
  );
};

export default NavBar;

const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10% 0 0;

  @media (min-width: 668px) {
    padding: 0;
  }
`;
const StyledLink = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  font-weight: normal;
  text-decoration: none;
  color: white;
  font-size: 16px;
  background: #d00115;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 1px black;
  margin: 1%;

  @media (min-width: 1024px) {
    margin: 2%;
  }

  &:hover {
    box-shadow: 4px 4px 2px black;
  }

  &:active {
    box-shadow: 1px 1px 0 black;
  }
`;
