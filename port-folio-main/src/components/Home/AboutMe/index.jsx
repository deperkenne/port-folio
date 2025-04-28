/*import FadeInSection from "/src/components/Home/FadeInSection"*/
import FadeInSection from "../FadeInSection";
import { Container, Row, Col } from "react-bootstrap";
import { Intermediare } from "../LeftBox/LeftBox.styled";
import {
  ContainAbout,
  TitleAbout,
  Slogan,
  BoxRightImage,
  StyledContainer,
  BoxLeftImage,
  ContainImg,
  ContainStyledDiv,
  StyledSpan,
  StyledP,
  StyledP2,
  GetImg,
  StyledDiv,
} from "./AboutMe.styled";

import { data } from "./data";


const imgs = ["omio.svg", "gardlist.png", "enil.svg", "post.svg", "nanda2.png"];
const links = [
  "https://www.omio.com",
  "https://www.gardlist.com",
  "https://www.elnil.co",
  "https://www.postexo.com/",
  "/",
];

export default function AboutMe() {
  return (
    <>
      <FadeInSection>
        <ContainAbout>
          <StyledContainer fluid={"xxl"}>
            <Intermediare>
              {" "}
              <span></span> About me
            </Intermediare>
              <TitleAbout>
                <p>
                  I am <strong>Kenne Tchofo De Perseverance</strong>, a certified <strong>Data Engineer & ETL Associate</strong> with expertise in building scalable data pipelines. Fluent in both <strong>French (native)</strong> and <strong>German (C1)</strong>
                </p>

                <p>
                  My core focus lies in <strong>modern data architectures</strong>, particularly:
                  <ul>
                    <li>Designing efficient ETL/ELT processes</li>
                    <li>Implementing cloud-based solutions </li>
                    <li>Developing maintainable data products with Databricks</li>
                  </ul>
                </p>

                <p>
                  Holding a <strong>Bachelor's in Wirtschaftsinformatik</strong> from the University of Bamberg, I combine business acumen with technical depth. My approach emphasizes:
                  <ul>
                    <li>Test-driven development for reliable pipelines</li>
                    <li>Cost-optimized cloud implementations</li>
                    <li>Clear documentation and knowledge sharing</li>
                  </ul>
                </p>

              
            </TitleAbout>
            <Slogan>Learn. Do. Teach.</Slogan>
          </StyledContainer>
        </ContainAbout>
      </FadeInSection>

      <ContainAbout id={"cv"}>
        <FadeInSection>
          <StyledContainer fluid={"xxl"}>
            <Intermediare>
              {" "}
              <span></span> Professional experience
            </Intermediare>
            <div>
              <BoxCv right index={4} />
            </div>
            <BoxCv right index={3} />
            <BoxCv right index={2} />
            <div style={{ marginTop: 39 }}>
              <BoxCv right index={1} />
            </div>
            <BoxCv right index={0} />
          </StyledContainer>
        </FadeInSection>
      </ContainAbout>

      <FadeInSection>
        <ContainAbout style={{ margin: 0, marginBottom: "5rem" }}>
          <StyledContainer fluid={"xxl"}>
          </StyledContainer>
        </ContainAbout>
      </FadeInSection>

      <FadeInSection>
        <ContainAbout style={{ margin: 0, marginBottom: "6rem" }}>
          <StyledContainer fluid={"xxl"}>
            <Intermediare>
              {" "}
              <span></span> What I bring you.
            </Intermediare>
            <TitleAbout>
              You will benefit from my<span> experience</span> in
              developing ETL and software solutions {" "}.
              You will benefit from my startup spirit in your company as well as
              from an
              <span>
                {" "}
                extremely flexible developer, fluent in French,  and
                German
              </span>
              , having a team spirit, and liking to learn new technologies
              depending on the projects. For example, I have learned in the past
              the following technologies{" "}
              <span>
                <i>(</i>Databricks, Microsoft Azure ,Java,DevOps tools....<i>)</i> for project needs
              </span>
            </TitleAbout>
          </StyledContainer>
        </ContainAbout>
      </FadeInSection>
    </>
  );
}



export function BoxCv({ index }) {
  if (!data[index]) {
      return <div>Invalid index</div>;
    }
  const { dat, place, text, toDo, stacks, tools, note } = data[index];
  return (
    <ContainStyledDiv>
      <StyledDiv>
        <div>
          <span>{dat}</span>
        </div>
        <p>{text}</p>
        {toDo ? (
          <Row>
            <p>
              <StyledSpan>Tasks:</StyledSpan>
            </p>
            {toDo.map((item, index) => {
              return (
                <Col key={index} lg={6} xl={6} md={6} sm={12}>
                  <StyledP>- {item} </StyledP>
                </Col>
              );
            })}
          </Row>
        ) : null}

        {stacks ? (
          <div style={{ marginTop: "1rem" }}>
            <StyledP>
              <StyledSpan>Stacks: </StyledSpan> {mapArray(stacks)}.{" "}
            </StyledP>
          </div>
        ) : null}
        {tools ? (
          <div style={{ marginTop: "1rem" }}>
            <StyledP>
              <StyledSpan>Tools: </StyledSpan> {mapArray(tools)}.{" "}
            </StyledP>
          </div>
        ) : null}
        {note ? (
          <div style={{ marginTop: "1rem" }}>
            <StyledP>
              <StyledSpan>Architecture, testing and others: </StyledSpan>{" "}
              {mapArray(note)}.{" "}
            </StyledP>
          </div>
        ) : null}
        <h5>{place}</h5>
      </StyledDiv>
    </ContainStyledDiv>
  );
}

function mapArray(array) {
  let val = "";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    val = val + element + ", ";
  }
  val = val.substring(0, val.length - 2);
  return val;
}
