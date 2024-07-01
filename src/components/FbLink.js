import React from "react";
import styled from "styled-components";

const FbLink = () => {
  return (
    <FbSection>
      <h2>Följ oss på Facebook:</h2>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/strandkantenrestaurang"
        data-tabs="timeline"
        data-width="400"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/strandkantenrestaurang"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/strandkantenrestaurang">
            Restaurang strandkanten Nord-Koster
          </a>
        </blockquote>
      </div>
    </FbSection>
  );
};

export default FbLink;

const FbSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(75, 83, 86, 0.8);
  align-items: center;
  }
`;
