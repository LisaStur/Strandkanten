import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <div className="Block-background">
      <ContactTextSection>
        <h2>Här hittar du oss!</h2>
        <ContactText>
          Kosteröarna ligger en mil väster om Strömstad. Det går reguljära
          båtturer hit från Strömstad med Västtrafik, Koster Marin. Strandkanten
          ligger ett par hundra meter från Västra Bryggan. Tidtabell hittar du
          här:
          <TimeTableLink href="http://www.kostermarin.se/">
            Koster Marins tidtabell
          </TimeTableLink>
          <br /> Eller använd Västtrafiks reseplanerare med "Från: Strömstad
          norra hamnen, Strömstad" och "Till: Koster Västra Bryggan, Strömstad"
          här:
          <TimeTableLink href="https://www.vasttrafik.se/">
            Västtrafiks reseplanerare
          </TimeTableLink>
        </ContactText>
        <ContactText>
          Om du kommer med egen båt finns det en gästhamn bredvid Strandkanten
          att lägga till vid.
        </ContactText>
        <ContactText>
          Vi tar inga bordsbeställningar. Kom förbi så gör vi vårt bästa för att
          hitta plats åt alla.
        </ContactText>
      </ContactTextSection>
      <MapBox>
        <iframe
          title="Strandkanten map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d515.3008139394348!2d11.011601829256326!3d58.89448019884429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTjCsDUzJzQwLjEiTiAxMcKwMDAnNDMuNyJF!5e0!3m2!1ssv!2sse!4v1612715756096!5m2!1ssv!2sse"
          width="300"
          height="200"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </MapBox>
    </div>
  );
};

export default Contact;

const ContactTextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactText = styled.p`
  color: white;
  font-size: 16px;
  margin-block-start: 0;
  margin: 2% 4%;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
const TimeTableLink = styled.a`
  color: white;
  font-weight: bold;
  padding-left: 8px;

  &:hover {
    background-color: rgba(80, 80, 100);
    transition: 0.4s;
  }
`;
const MapBox = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 12px;

  @media (min-width: 668px) {
    padding: 24px;
  }

  @media (min-width: 1024px) {
    padding: 8% 4% 0 0;
  }
`;
