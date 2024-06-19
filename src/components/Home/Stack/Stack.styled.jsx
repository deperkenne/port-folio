import styled from "styled-components";

export const TakeBackgroundColor = styled.section`
  background-color: #150c21;
  position: relative;
  padding-top: 5em;
  padding-bottom: 5em;
  padding-left: 15px;
  padding-right: 15px;
  /* min-height:400px; */
`;

export const TitleStack = styled.h2`
  margin-top: 10px;
  max-width: 62.5rem;
  font-size: 1.75rem;
  line-height: 1.44333;
  letter-spacing: -0.2px;
  font-family: Book;
  color: #111;
  & > i {
    font-style: normal;
    font-family: Book;
  }
  & > span {
    font-family: gbold;
  }
`;

export const SloganSecond = styled.h2`
  max-width: 68.75rem;
  font-size: 3.75rem;
  font-family: regular;
  color: #000;
  margin-top: 170px;
  text-align: right;
  padding-right: 15px;
`;
export const Slogan = styled.h2`
  max-width: 68.75rem;
  font-size: 4.063rem;
  font-family: regular;
  color: #ffffff;

  & > i {
    font-family: Heavy;
    color: #594df8;
  }
`;

// export const ContainSlogan = styled.div`
//   margin-top: 0px;
// `;

export const Intermediare = styled.p`
  position: relative;
  margin-top: 3em;
  margin-bottom: 2em;
  padding-left: 68px;
  font-size: 1.25rem;
  line-height: 1.4;
  /* font-weight: 600; */
  color: #ffffff;
  font-family: regular;
  /* &:before {

  } */
  & > span {
    content: "";
    position: absolute;
    top: 13px;
    left: 0;
    width: 52px;
    height: 4px;
    background: #ffffff;
  }
`;

export const ContainElement = styled.div`
  padding: 1em;
  /* border:2px solid #eee; */
  border-radius: 20px;
  padding-top: 4em;
  padding-bottom: 4em;
  margin-bottom: 3em;
  height: 100%;
  & > div {
    height: 180px;
    text-align: center;
  }
  & > div > img {
    height: 100%;
  }
  & > h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    color: #fff;
    text-align: center;
    font-size: 1.8em;
  }
  & > h4 {
    text-align: center;
    color: #3a57c3;
  }
  & > p {
    margin-top: 1em;
    margin-bottom: 1.8em;
    text-align: center;
    font-size: 1.12em;
    color: #666;
  }
  & > h5 {
    margin-top: 1em;
    text-align: center;
    font-size: 1.3em;
    color: #ccc;
    font-family: regular;
  }
`;

export const ContainHobby = styled.div`
  padding-top: 4.6em;
  padding-bottom: 4em;
`;

export const ContainLanguage = styled.div`
  position: relative;
  & > p {
    font-size: 1.4rem;
    font-family: Bold;
  }

  & > h5 {
    font-size: 1.1rem;
    font-family: Book;
    color: #666;
  }

  & > div {
    position: absolute;
    right: 15px;
    bottom: 10px;
  }
  & > div > svg {
    font-size: 27px;
    color: gold;
    display: inline-block;
    margin-right: 10px;
  }
`;

export const TakeHobbyContainer = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;

  margin-top: 0rem;
  margin-bottom: 4rem;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SloganHobby = styled.h2`
  max-width: 68.75rem;
  font-size: 4.063rem;
  font-family: gextrabold;
  color: #000;
  margin-bottom: 3.5rem;

  & > i {
    font-family: regular;
    color: #000;
  }
`;

export const IntermediarHobby = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding-left: 68px;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
  color: rgb(76 64 247 / 56%);
  color: #685ff1;
  font-family: regular;
  z-index: 6;
  &:before {
    content: "";
    position: absolute;
    top: 13px;
    left: 0;
    width: 52px;
    height: 2.5px;
    background: rgb(76 64 247 / 56%);
    background: #685ff1;
  }
`;

export const ContainHobbyElement = styled.div`
  position: relative;
  padding: 1rem;
  padding-left: 4rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
  & > svg {
    color: #233;
    font-size: 30px;
    position: absolute;
    top: 0;
    left: 1rem;
    bottom: 0;
    margin: auto;
  }
  & > p {
    font-size: 18px;
    font-family: regular;
    color: #222;
    margin: 0;
  }
`;
export const Finish = styled.div`
  text-align: center;
  margin-bottom: 7em;
  & > div {
    text-align: center;
  }
  & > div > p {
    max-width: 700px;
    font-size: 19px;
    line-height: 2.4rem;
    color: #333;
    text-align: center;
    display: inline-block;
    margin-bottom: 2rem;
    font-family: regular;
    padding: 1.3rem;
  }
  & > a {
    background: #fff;
    border: 0;
    padding: 0.1rem 0.6rem 0.3rem 0.6rem;
    z-index: 8;
    outline: none;
    padding: 13px 32px;
    border-radius: 8px;
    font-family: regular;
    font-size: 18px;
    box-shadow: rgb(98 129 255 / 22%) 0px 7px 29px 0px;
    border: 0;
    color: #4c40f7 !important;
    cursor: pointer;
  }
  & > a:hover {
    color: #ffffff !important;
    background: #4c40f7;
  }

  & > a > span {
    font-family: regular;
  }
`;

export const ContainContact = styled.div`
  & > p {
    font-family: Book;
    font-size: 1.1rem;
    color: #222;
  }

  & > p > span {
    font-family: regular;
    font-size: 1.1rem;
    color: #aaafc7;
  }
`;
