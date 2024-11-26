import { Container } from "react-bootstrap";
import styled from "styled-components";



// export const HasNanda = styled.span`
//   /* margin-right:2em; */
// padding
// & > img {
//   height:3.1em;
// }
// `;

export const ContainImg = styled.div`
/* display:flex; */
/* justify-content:space-between; */
margin-top:4em;
& > a>  img {
  height: 3.1em;
    margin-left: 1.3em;
    margin-right: 2.3em;
    margin-bottom: 4em;
}
`;


export const ContainAbout = styled.div`
/* margin-top:150px; */
/* margin-top:150px; */
padding-left:20px;
padding-right:20px;
position:relative;
/* z-index:0; */
`;

export const BoxLeftImage = styled.div`
    position: absolute;
    left: -10rem;
    top: -4rem;
    z-index: -1;
    & > img {
   height: 12rem; 
 }
 @media (max-width: 1200px) {
   top: -12rem; 
    left: -2rem;
   & > img { 
 }
  }

`;


export const BoxRightImage = styled.div`
position: absolute;
    right: -15rem;
    bottom: -18rem;
    z-index: -1;
 & > div > img {
   height: 40rem; 
    transform: rotate(14deg);
 }
 @media (max-width: 1200px) {
      right: -10.5rem;
      bottom: -21rem;
   & > div > img {
      height: 34rem; 
 }
  }
`;


export const TitleAbout = styled.h2`
 margin-top:4.375rem;
max-width:1000px;
font-size: 1.75rem;
    line-height: 1.44333;
    letter-spacing: -.2px;
 font-family:Book;
 color:#111;
 & > i {
     font-style:normal;
     font-family:Book;
 }
 & > span >  i {
     font-style:normal;
     font-family:Book;
 }
 & > span {
    font-family:gbold;
 }

 @media (max-width: 1200px) {
   max-width:950px;
  }
  @media (max-width: 1100px) {
   max-width:900px;
  }

  @media (max-width: 1000px) {
   max-width:900px;
  }
`;

export const Slogan = styled.h2`
max-width:62.5rem;
font-size: 3.75rem;
 font-family:gextrabold;
 color:#000;
 margin-top:5rem;
`;


export const StyledContainer = styled(Container)`
position:relative;
`;


























export const ContainStyledDiv = styled.div`

`;

export const StyledSpan = styled.span`
font-family:Bold;
font-size:1.1rem;
color:#aaafc7;
`;

export const StyledP = styled.p`
font-family:Book;
font-size:1.1rem;
color:#222;
`;

export const StyledP2 = styled.p`
font-family:Book;
font-size:1.1rem;
color:#222;
& > span {
font-size:1.1rem;
    font-family:Bold;
}
`;
export const GetImg = styled.div`
position:relative;
& > img {
    height: 13em;
    position: absolute;
    left: 6rem;
    top: 8em;
    z-index: 4;
    /* right: 0; */
    /* margin: auto; */
}
`;

export const StyledDiv = styled.div`
    margin-bottom: 2em;
    height: 100%;
    border: 2px dashed #d8def5;
    border-radius: 14px;
    background-color: #fff;
    padding: 1.2rem 1.7rem;
    box-shadow: rgb(98 129 255 / 7%) 0 0 4px 2px;
    position: relative;
    z-index: 2;
    & > div {
        & > span {
            padding: 6px 16px;
            background-color: rgb(76 64 247 / 56%);
            color: #132968;
            font-family: Bold;
            font-size: 1.05rem;
            display: inline-block;
        }
    }
    & > p {
        margin-top:1.2rem;
        font-family:Bold;
        font-size:1.75rem;
        color:#333;
    }
    & > h5 {
        text-align:right;
        font-family:Book;
        font-size:1.05rem;
        color:#aaa;
        margin:0;
    }
`;
