import styled from 'styled-components';

const Section = styled.section`
  .image {
    padding: 5rem;
    width: 100%;
    @media only screen and (max-width: 999px) {
      min-height: auto;
      padding: 2rem;
    }
  }
  div.imgs {
    width: 80%;
    height: 100%;
    margin-left: 5rem;
    margin-right: 5rem;
    @media only screen and (max-width: 999px) {
      margin-left: 1rem;
      margin-right: 1rem;
      width: 90%;
      height: 100%;
    }
    @media only screen and (max-width: 786px) {
      margin-left: 1rem;
      margin-right: 1rem;
      width: 90%;
      height: 100%;
    }
    @media only screen and (max-width: 480px) {
      margin-left: 1rem;
      margin-right: 1rem;
      width: 90%;
      height: 100%;
    }
  }
  .open {
    padding: 5rem;
    width: 100%;
    @media only screen and (max-width: 999px) {
      padding: 3rem;
    }
  }
  .title {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 800;
    font-size: 5rem;
    color: #2c2e35;
    @media only screen and (max-width: 999px) {
      font-size: 3rem;
    }
  }
  .excerpt {
    font-family: Helvetica Neue;
    font-size: 1.2rem;
    color: rgba(44, 46, 53, 0.5);
  }
  .last {
    font-family: Sometimes Times BETA;
    font-size: 1.7rem;
    color: rgba(44, 46, 53, 0.7);
    display: flex;
    @media only screen and (max-width: 480px) {
      flex-direction: column;
      padding: 0rem;
    }
  }
  .date {
  }
  .dash {
    font-weight: 900;
    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
  .read {
  }
  h1 {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 800;
    margin-top: 4rem;
    margin-left: 10rem;
    font-size: 3rem;
    color: #2c2e35;

    @media only screen and (max-width: 999px) {
      font-size: 3rem;
      margin-left: 0rem;
    }
  }
  h3 {
    font-family: 'Sometimes Times BETA';
    font-size: 1.5rem;
    color: #82733b;
  }
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 3rem;
    color: #2c2e35;
    @media only screen and (max-width: 999px) {
      font-size: 2rem;
    }
  }
  a {
    color: #2b7b2f;
  }
  p {
    padding: 1rem;
    font-size: 1.6rem;
  }

  .blogInnerHTML {
    margin-left: 3rem;
  }
  blockquote {
    font-family: 'Sometimes Times BETA';
    font-weight: 400;
    line-height: 1.6em;
    font-size: 2rem;
    font-style: italic;
    margin: 3.2rem 0 1.5rem 0;
    border-left: 0.25rem solid #ee9b27;
    border-left-color: rgb(238, 155, 39);
    border-left-style: solid;
    border-left-width: 0.25rem;
    padding: 0 1.6 0 2em;
  }
`;

export default Section;
