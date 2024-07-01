import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenySection>
      <BigScreen>
        <MenyHeader>Insegling</MenyHeader>
        <EachEntry>
          <MenyEntry>Pommes med aioli</MenyEntry>
          <Price>79kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Vitlöksbröd</MenyEntry>
          <Price>79kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Fyrvaktarns skagentoast</MenyEntry>
          <Price>liten 175kr/stor 209kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Nachos med salsa och aioli</MenyEntry>
          <Price>79kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Löjromschips</MenyEntry>
          <Price>209kr</Price>
        </EachEntry>
        <MenyHeader>Förtöjning</MenyHeader>
        <EachEntry>
          <MenyEntry>Strandkantens räksmörgås</MenyEntry>
          <Price>liten 229kr/stor 289kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Caesarsallad</MenyEntry>
          <Price>kyckling 199kr/räkor 239kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Kaptens fisk och skaldjurssoppa</MenyEntry>
            <MenyDetail>med vitlöksbröd</MenyDetail>
            <MenyDetail>extra vitlöksbröd +20kr</MenyDetail>
          </WithDetail>
          <Price>209kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Hamburgare 200g</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>210kr/med ost 230 kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Strimlad svensk ryggbiff</MenyEntry>
            <MenyDetail>med pommes och bearnaisesås</MenyDetail>
          </WithDetail>
          <Price>279kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Fish &amp; chips på torsk</MenyEntry>
            <MenyDetail>med remouladsås</MenyDetail>
          </WithDetail>
          <Price>219kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Lotsens bakpotatis</MenyEntry>
            <MenyDetail>med skagenröra</MenyDetail>
          </WithDetail>
          <Price>209kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Vegetarisk hamburgare</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>210kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Halloumiburgare</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>210kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Varmrökt lax</MenyEntry>
            <MenyDetail>med kall sommarsallad och hjortronsås</MenyDetail>
          </WithDetail>
          <Price>269kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Strandö-special</MenyEntry>
            <MenyDetail>
              Nyfångade havskräftor med smör, bröd och aioli
            </MenyDetail>
          </WithDetail>
          <Price>dagspris</Price>
        </EachEntry>
      </BigScreen>
      <BigScreen>
        <MenyHeader>Småttingarnas</MenyHeader>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Hamburgare 90g</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>109kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Korv</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>109kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Liten fish &amp; chips på torsk</MenyEntry>
            <MenyDetail>med remouladsås</MenyDetail>
          </WithDetail>
          <Price>159kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Liten strimlad ryggbiff</MenyEntry>
            <MenyDetail>med pommes och bearnaisesås</MenyDetail>
          </WithDetail>
          <Price>189kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Amerikanska pannkakor</MenyEntry>
            <MenyDetail>med sylt och grädde</MenyDetail>
          </WithDetail>
          <Price>89kr</Price>
        </EachEntry>
        <MenyHeader>Efterdyning</MenyHeader>
        <EachEntry>
          <MenyEntry>Vaniljglass med chokladsås</MenyEntry>
          <Price>69kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Chokladkaka</MenyEntry>
            <MenyDetail>med vispad grädde</MenyDetail>
          </WithDetail>
          <Price>110kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Äpplekaka med vaniljsås</MenyEntry>
          <Price>110kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Strandkantens glassbomb</MenyEntry>
          <Price>149kr</Price>
        </EachEntry>
      </BigScreen>
    </MenySection>
  );
};

export default Menu;

const MenySection = styled.section`
  display: flex;
  flex-direction: column;

  background-color: rgba(105, 104, 102, 0.6);

  @media (min-width: 668px) {
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const BigScreen = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 45%;
    padding: 0 5% 3% 5%;
  }
`;
const MenyHeader = styled.h2`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  padding-top: 24px;
  margin-block-start: 0;
  margin-block-end: 0;
`;
const EachEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 12px 0 12px;
`;
const WithDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenyEntry = styled.p`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const MenyDetail = styled.p`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 10px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;
const Price = styled.p`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: normal;
  font-size: 10px;
  padding-top: 4px;
  text-align: end;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    padding-top: 1px;
    font-size: 14px;
  }
`;
