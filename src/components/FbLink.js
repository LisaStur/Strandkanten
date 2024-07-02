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
        data-height=""
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="true"
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
  background-color: rgba(105,104,102, 0.6);
  align-items: center;
  padding: 0 10px 0 0 ;
  }
`;
