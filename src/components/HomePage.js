import React from "react";
import styled from "styled-components";
import exteriort from "../images/exteriort.jpg";
import exteriorsmal from "../images/exteriorsmal.jpg";

const HomePage = () => {
  return (
    <HomePageSection>
      <PageImageContainer>
        <PageImage src={exteriort} alt="Strandkantens brygga" />
        <PageImageSmall src={exteriorsmal} alt="Strandkantens brygga" />
      </PageImageContainer>
      <StartPageTextBox>
        <h2>Välkommen till Strandkanten!</h2>
        <StartPageText>
          Restaurang Strandkanten på Nordkoster erbjuder mat och dryck i en
          fantastisk miljö med utomhusservering på bryggan eller inomhus i den
          mysiga sjöboden. Passa på att handla presenter till dig själv och
          andra i den välfyllda butiken.
        </StartPageText>
        <StartPageTextBiggerScreen>
          Restaurang Strandkanten har öppet under sommarhalvåret och drivs av
          Maria Wogenius med familj tillsammmans med kollegor från öarna.
          Säsongen startar vid påsk och sträcker sig till och med hummerfisket i
          oktober. Under högsäsong är det öppet alla dagar medan det för- och
          eftersäsong är öppet på helgerna.
        </StartPageTextBiggerScreen>
        {/*        <StartPageSmallHeader>öppettider:</StartPageSmallHeader>*/}
        <StartPageText>
          Följ oss på Facebook för uppdateringar om öppettider och övriga
          nyheter!
        </StartPageText>
      </StartPageTextBox>
    </HomePageSection>
  );
};

export default HomePage;

const HomePageSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(75, 83, 86, 0.8);

  @media (min-width: 668px) {
    flex-direction: row;
  }
`;
const StartPageTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
`;
/* const StartPageSmallHeader = styled.h2`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 18px;
  margin: 4% 0 0 4%;
`*/
const StartPageText = styled.p`
  color: white;
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
const StartPageTextBiggerScreen = styled(StartPageText)`
  display: none;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
  }
`;
const PageImageContainer = styled.div`
  padding: 8px;
`;
const PageImage = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;
const PageImageSmall = styled.img`
  display: none;

  @media (min-width: 668px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
