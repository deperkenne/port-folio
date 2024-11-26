import styled from "styled-components";

export const StyledSpan = styled.div`
  position: absolute;
  left: ${(p) => p.left};
  width: 100px;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  font-family: Book;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 250ms;
`;

export const ContainRight = styled.div`
  position: relative;
  & > div {
    display: inline-block;
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 4px 4px;
    background-color: #ddd;
    border-radius: 12px;
    z-index: 2;
  }
  & > div > div > span {
    display: inline-block;
    padding: 7px 12px;
    width: 100px;
    text-align: center;
    font-family: Book;
    font-size: 1em;
    cursor: pointer;
  }
  & > div > div {
    position: relative;
  }
`;

export const ContainProject = styled.div`
  margin-top: 5rem;
  padding-top: 4.375rem;
  padding-bottom: 4.375rem;
  background-color: #f8f8f8;
  background-color: #f2f2f2;
`;

export const TitleProject = styled.h2`
  margin-top: 10px;
  margin-bottom: 2em;
  max-width: 1000px;
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

export const SloganSecond = styled.div`
  text-align: right;

  & > span {
    max-width: 68.75rem;
    font-size: 3.75rem;
    font-family: gextrabold;
    color: #000;
    margin-top: 10.625rem;
    padding-right: 15px;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  & > span:before {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 35px;
    right: 7px;
    height: 9.5px;
    background: rgb(76 64 247 / 56%);
    z-index: -1;
  }
`;
export const Slogan = styled.h2`
  max-width: 62.5rem;
  font-size: 3.75rem;
  font-family: gextrabold;
  color: #000;
  margin-top: 4.375rem;
`;

export const Box = styled.div`
  /* height:68.75rem; */
  background-color: #fff;
  background: #fff;
  margin-top: 2.875rem;
  margin-bottom: 2.375rem;
  border-radius: 20px;
  /* box-shadow: 0px 50px 60px rgb(0 0 0 / 10%); */
  padding: 6.5px;
  padding-left: 13em;
  cursor: pointer;
  position: relative;
  min-height: 12em;
  &:hover {
    box-shadow: 0px 50px 60px rgb(0 0 0 / 10%);
  }
  & > .cover {
    /* height:100%; */
    border-radius: 15px;
    width: 12em;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(p) => p.img});
    /* border-bottom-left-radius: 0; */
    /* border-bottom-right-radius: 0; */
    position: absolute;
    left: 5px;
    top: 5px;
    bottom: 5px;
    z-index: 2;
  }
  & > .contain {
    padding: 12px;
  }
  & > .contain > h4 {
    font-family: gheavy;
    font-size: 1.7em;
    margin-top: 0.2em;
    position: relative;
    z-index: 1;
  }
  & > .contain > h4 > span {
    position: relative;
    color: #594df8;
  }
  & > .contain > h4 > span > i {
    font-family: Heavy;
    font-style: normal;
  }
  /* & > h4 > span:before{
    content: "";
    position: absolute;
    bottom: 2px;
    left: -2px;
    right: -2.5px;
    height: 5.5px;
    background: rgb(76 64 247 / 56%);
    z-index: 0;
 }  */

  & > .contain > p {
    font-family: Book;
    font-size: 1.15em;
  }
  & > .contain > h5 {
    font-family: Book;
    font-size: 0.9em;
  }
`;

export const Box2 = styled.div`
  /* height:68.75rem; */
  background-color: #fff;
  background: #fff;
  /* margin-top:2.875rem; */
  /* margin-bottom:2.375rem; */
  border-radius: 20px;
  padding: 6.5px;
  cursor: pointer;
  position: relative;
  min-height: 12em;
  height: 100%;
  &:hover {
    box-shadow: 0px 50px 60px rgb(0 0 0 / 10%);
  }
  & > .cover {
    height: 320px;
    border-radius: 15px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(p) => p.img});

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
  }
  & > .cover > div {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    backdrop-filter: blur(6px);

    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 15px;
    overflow: hidden;
  }
  & > .cover > div > div {
    border-radius: 15px;
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(p) => p.img});
    height: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .cover > div > div > span {
    position: absolute;
    left: -15px;
    right: -15px;
    bottom: -15px;
    top: -15px;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 300ms;
  }

  & > .cover > div > div > span > span {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: relative;
    background-color: #fff;
    border-radius: 30px;
    font-family: Bold;
    padding: 0.7rem 1rem;
    opacity: 0;
    transition: opacity 300ms;
  }
  & > .cover:hover > div > div > span {
    opacity: 1 !important;
  }
  & > .cover:hover > div > div > span > span {
    opacity: 1 !important;
  }
  & > .cover > div > div > span > span {
    background-color: #fff;
    border-radius: 30px;
    font-family: Bold;
    padding: 0.5rem 1rem;
  }

  & > .contain {
    padding: 12px;
  }
  & > .contain > h4 {
    font-family: gheavy;
    font-size: 1.7em;
    margin-top: 0.2em;
    position: relative;
    z-index: 1;
  }
  & > .contain > h4 > span {
    position: relative;
    color: #594df8;
  }
  & > .contain > h4 > span > i {
    font-family: Heavy;
    font-style: normal;
  }
  /* & > h4 > span:before{
    content: "";
    position: absolute;
    bottom: 2px;
    left: -2px;
    right: -2.5px;
    height: 5.5px;
    background: rgb(76 64 247 / 56%);
    z-index: 0;
 }  */

  & > .contain > p {
    font-family: Book;
    font-size: 1.15em;
  }
  & > .contain > h5 {
    font-family: Book;
    font-size: 0.9em;
  }
`;

export const Link = styled.a`
text-decoration:none;
`;
