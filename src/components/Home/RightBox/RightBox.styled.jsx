import styled from "styled-components";

// We will add some padding on it 

export const ContainDiscoverButton = styled.div`
  background: #fff;
  border: 0;
  padding: 0.1rem 0.6rem 0.3rem 0.6rem;
  /* position: fixed; */
  /* right: 25px;  */
  /* top: 0.938rem; */
  z-index: 8;
  outline: none;
  padding: 9px 25px;
  border-radius: 30px;
  font-family: gbold;
  font-size: 17px;
  box-shadow: rgb(98 129 255 / 22%) 0px 7px 29px 0px;
  border: 0;
  color: #4c40f7 !important;
  cursor: pointer;
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
    font-size: 24px;
    color: #4c40f7;
  }
  @media (max-width: 500px) {
    right: 15px;
  }
`;

export const ContainAllRight = styled.div`
  /* display: flex;
    flex-direction: column;   */

  position: relative;
  width: calc(100vw - 960px);
  min-height: 100vh;
  /* left:0; */
  /* top:0; */
  /* right:0;  */
  /* bottom:0;  */
  /* z-index:  1; */
  /* background-color:#e0b7ff; */
  /* background-color:#6281ff; */
  background-color: #594df8;
  background-color: #4c40f7;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/home.jpg);

  & > .contain-btn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 35px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 2150px) {
    width: calc(100vw - 800px);
    & > div {
    }
  }

  @media (max-width: 1600px) {
    width: calc(100vw - 650px);
    & > div {
    }
  }

  @media (max-width: 1300px) {
    width: calc(100vw - 520px);
    & > div {
    }
  }

  @media (max-width: 1050px) {
    width: calc(100vw - 400px);

    & > div {
    }
  }

  @media (max-width: 800px) {
    padding-left: 0;
    /* min-height: 0; */
    width: 100%;
    & > div {
    }
  }

  @media (max-width: 600px) {
    padding-left: 0;
    min-height: 0;
    width: 100%;
    & > div {
    }
  }
`;

export const ContainAllRightRow = styled.div`
  position: relative;
  width: 100%;
  height:939px;
  /* min-height:100vh;  */
  background-color: #150c21;
  border-radius: 2px;
  & > .profile-container {
    width: 176px; /* ou toute autre taille souhaitée */
    height: 195px; /* la même valeur que la largeur pour un cercle parfait */
    overflow: hidden; /* s'assure que tout débordement est caché */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin:auto;
    margin-top:10px;
  }
`;



export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;


export const ProfileInfoCv = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
color:white;

`;

export const Intermediare = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 10rem;
  padding-left: 4.25rem;
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 600;
  /* color: rgb(76 64 247 / 56%); */
 background-color: #685ff1;
 color:white;
 height:2px;

  font-family: regular;
  z-index: 6;
  /* &:before {

  } */
  
`;
