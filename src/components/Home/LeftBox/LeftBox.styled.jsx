import styled from 'styled-components';
import { Dropdown } from "react-bootstrap";

export const MapDataBox = styled.div`
 & > div {
    margin-bottom:2.25rem;
    cursor: pointer ;
    padding-rigth:41px;
    padding: 0.938rem;
    backgroung: #fff;
    border-radius:12px;
    box-shadow: rgba(98,129,255,0.17) 0px 48px 100px 0px;
    position:relative;

 }
 & > div > span {
    font-size: 25px;
    stroke-width: 3;
    position: absolute;
    top: 5px;
    bottom: 5px;
    margin: auto;
    right: 5px;
    transition: 250ms all;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-radius: 20px;
  }
  & > div > span > svg {
    font-size: 25px;
    stroke-width: 3;
    color: #6281ff;
  }

  & > div:hover > span {
    right: -25px;
    box-shadow: rgb(98 129 255 / 17%) 0px 48px 100px 0px;
    opacity: 1;
    & > svg {
      color: #594df8;
    }
  }
  & > div ._name {
    padding-left: 4.7rem;
    position: relative;
  }
  & > div > ._name > span {
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block;
    position: absolute;
    left: -20px;
    top: -42px;
    z-index: 3;
  }
  & > div > ._name > span > img {
    vertical-align: middle;
    height: 5.313rem;
  }
  & > div > ._name > p {
    font-family: gbold;
    font-size: 1.45rem;
    color: #594df8;
    /* display: inline-block; */
    margin: 0;
  }
  /* & > div > ._name > p:hover {
        text-decoration:underline;
    } */

  & > div > ._button {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    /* text-align:right; */
  }
  & > div > ._button > span {
    border-radius: 36px;
    /* box-shadow: 0px 24px 74px rgb(76 64 247 / 16%);  */
    padding: 12px 27px;
    margin-right: 10px;
    margin-bottom: 5px;
    font-family: Bold;
    /* color:#4C40F7; */
    color: #ffffff;
    background-color: #4c40f7;
    display: inline-block;
  }
  /* & > div > ._button > span {
        border-radius: 36px; 
        padding:12px 27px;
        margin-right:10px;
        margin-bottom:5px;
        font-family:Bold; 
        color:#ffffff;
        background-color:#4C40F7; 
    } */
  & > div > ._button > span:hover {
    /* color:#ffffff; */
    /* background-color:#4C40F7;  */
    box-shadow: rgb(98 129 255 / 22%) 0px 8px 24px;
  }
`;

export const Intermediare = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding-left: 4.25rem;
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 600;
  /* color: rgb(76 64 247 / 56%); */
  color: #685ff1;

  font-family: regular;
  z-index: 6;
  /* &:before {

  } */
  & > span {
    content: "";
    position: absolute;
    top: 0.813rem;
    left: 0;
    width: 3.25rem;
    height: 0.156rem;
    background: #685ff1;
  }
`;

export const InsideContentP = styled.div`
  & > p {
    margin-top: 0.82rem;
    margin-bottom: 0.2rem;
    font-family: Book;
    font-size: 1.5rem;
    color: #222222;
  }
  & > p > span:first-child {
    font-family: gbold;
    color: #000;
    font-weight: 900;
  }
`;

export const InsideContent = styled.div`
  /* padding-left: 90px; */
  position: relative;
  & > h1 {
    margin-bottom: 0.2rem;
    font-family: gheavy;
    font-size: 3.3rem;
  }
  & > h1 > i {
    font-family: Bold;
    font-style: normal;
  }
  /* & > img {
    height: 155px;
    width: 150px;
    position: absolute; 
    left: -30px;
    top: -40px;
    z-index: 3;
    transform: rotateZ(28deg);
  } */

 `

 export const StyledImg = styled(Image)`
  height: 29px;
  @media (max-width: 600px) {
    height: 18px;
  }
`;

export const ContentLogoNew = styled.div`
  position: absolute;
  right: 0;
  top: -73px;
  padding: 0.938rem;

  /* box-shadow: rgb(0 0 0 / 8%) 0 1px 12px !important; */
  display: flex;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  transition: 150ms all;
  background-color: #fff;
  padding-left: 200px;

  @media (max-width: 2150px) {
    padding-left: 180px;
  }

  @media (max-width: 1600px) {
    padding-left: 140px;
  }

  @media (max-width: 1300px) {
    padding-left: 5rem;
  }

  @media (max-width: 1050px) {
    padding-left: 20px;
  }

  @media (max-width: 800px) {
    padding-left: 0.938rem;
  }

  @media (max-width: 600px) {
    padding-left: 7px;
  }

  & > span {
    position: relative;
    padding-left: 22px;
    font-family: gheavy;
    /* font-weight: 800; */
    font-size: 1.75rem;
    line-height: 23px;
    padding-top: 11px;
    color: #000;
    transition: 300ms all;
  }
  & > span > i {
    padding-left: 5px;
    font-style: normal;
    font-family: gbold;
    font-size: 20px;
    transition: 300ms all;
  }

  &:hover {
    margin-left: 8px;
    & > span > i {
      padding-top: 7px;
      /* padding-left:10px; */
    }
    & > span {
      padding-left: 10px;
    }
    @media (max-width: 600px) {
      & > span {
        padding-left: 7px;
      }
    }
  }
`;



/*   & > div > .header {
             position:absolute;
            left:0;top:0;right:0;
            height:90px;
            z-index:2;
            background-color:#fff;
         } */

export const ContainAllLeft = styled.div`
  /* display: flex;
    flex-direction: column;   */

  position: relative;
  width: 960px;
  min-height: 90vh;
  z-index: 2;
  background-color: #fff;
  & > .left-content {
    position: relative;
    height: 100%;
    width: 100%;
  }
  & .content {
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 120px;
    padding-right: 120px;
    padding-bottom: 60px;
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  @media (max-width: 2150px) {
    width: 800px;
    & .content {
      padding-right: 100px;
      padding-left: 180px;
    }
  }

  @media (max-width: 1600px) {
    width: 650px;
    & .content {
      padding-right: 5rem;
      padding-left: 140px;
    }
  }

  @media (max-width: 1300px) {
    width: 540px;
    & .content {
      padding-right: 50px;
      padding-left: 5rem;
    }
  }

  @media (max-width: 1050px) {
    width: 420px;

    & .content {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (max-width: 800px) {
    /* display:none; */
    min-height: 0;
    width: auto;
    & .content {
      padding-left: 0.938rem;
      padding-right: 0.938rem;
    }
  }

  @media (max-width: 600px) {
    min-height: 0;
    width: auto;
    & .content {
      padding-left: 7px;
      padding-right: 7px;
    }
  }
`;

export const ContainAllLeftNew = styled.div`
  /* display: flex;
    flex-direction: column;   */

  position: relative;
  min-height: 90vh;
  z-index: 2;
  background-color: #fff;

  & > .left-content {
    position: relative;
    height: 100%;
    width: 100%;
  }
  & .content {
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 120px;
    padding-right: 120px;
    padding-bottom: 60px;
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  @media (max-width: 2150px) {
    /* width: 800px; */
    & .content {
      padding-right: 100px;
      padding-left: 180px;
    }
  }

  @media (max-width: 1600px) {
    /* width: 650px; */
    & .content {
      padding-right: 5rem;
      padding-left: 140px;
    }
  }

  @media (max-width: 1300px) {
    /* width: 540px; */
    & .content {
      padding-right: 50px;
      padding-left: 5rem;
    }
  }

  @media (max-width: 1050px) {
    /* width: 420px; */

    & .content {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (max-width: 800px) {
    /* display:none; */
    min-height: 0;
    width: auto;
    & .content {
      padding-left: 0.938rem;
      padding-right: 0.938rem;
    }
  }

  @media (max-width: 600px) {
    min-height: 0;
    width: auto;
    & .content {
      padding-left: 7px;
      padding-right: 7px;
    }
  }
`;

const colors = {
  black3: "#2a2e54",
};
export const StyleDropDownToogle = styled(Dropdown.Toggle)`
  background: #fff;
  border: 0;
  padding: 0.1rem 0.6rem 0.3rem 0.6rem;
  position: fixed;
  right: 25px;
  top: 0.938rem;
  z-index: 8;
  outline: none;
  padding: 8px 25px;
  border-radius: 30px;
  font-family: gbold;
  font-size: 16px;
  box-shadow: rgb(98 129 255 / 22%) 0px 7px 29px 0px;
  border: 0;
  color: #4c40f7 !important;
  &:hover {
    background: #f6f6f6;
  }
  :focus {
    box-shadow: rgb(98 129 255 / 22%) 0px 48px 100px !important;
  }
  :after {
    display: none;
   
  }
  & > span {
    position: relative;
    padding-left: 1.75rem;
  }
  & > span > svg {
    position: absolute;
    left: -3.5px;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 22px;
    color: #4c40f7;
  }
  @media (max-width: 500px) {
    right: 15px;
  }
`;

export const StyleDropDownMenu = styled(Dropdown.Menu)`
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  border: 0;
  border-radius: 10px;
  z-index: 22;
  display: flex;
  flex-direction:column;
  position:  fixed;
`;  
            

// @ts-ignore
export const StyleDropDownItem = styled(Dropdown.Item)`
  font-size: 17px;
  font-family: "Book";
  padding: 0.4rem 1.5rem;
  color: ${colors.black3};

  &:hover {
    background-color: #f6f6f6;
    color: ${colors.black3};
  }

  &:active {
    background-color: #f6f6f6;
    color: ${colors.black3};
  }

  &:focus {
    background-color: #f6f6f6;
    color: ${colors.black3};
  }
`;

export const StyleDropDown = styled(Dropdown)`
  display: inline-block;
  margin-left: 0.5rem;
`;
