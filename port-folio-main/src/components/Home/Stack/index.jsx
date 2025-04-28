import FadeInSection from "/src/components/Home/FadeInSection";
import { StyledRow, StyledCol } from "../helpers/StyledComponents";
import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BsStarFill } from 'react-icons/bs';
import { GiBasketballJersey, GiConsoleController, GiGuitar } from 'react-icons/gi';
import { MdDirectionsBike, MdMusicNote } from 'react-icons/md';
import { FaRunning } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import {
    Slogan, ContainHobby, ContainHobbyElement,
    Intermediare, TakeBackgroundColor, ContainElement,
    ContainLanguage, TakeHobbyContainer,
    SloganHobby, IntermediarHobby, Finish, ContainContact
} from "./Stack.styled";
import 'bootstrap/dist/css/bootstrap.min.css'

import { FiBox } from "react-icons/fi";





function Stack() {
    return (
        <>
            <TakeBackgroundColor id='stacks' >
                <FadeInSection>
                    <Container fluid={'xxl'} >
                        <Row>
                            <Col xl={6} lg={6} md={6} >
                                <Slogan>Skills, </Slogan>
                                <Slogan>Dev Stack.</Slogan>
                                <Intermediare> <span></span> This section shows a larger list of technologies and tools I use on my different projects,as well
                                    as for my personal learning,including Docker and Kubernetes
                                    As the following illustration shows, there are still a lot to discover
                                    and I'm looking forward to learn new things</Intermediare>
                            </Col>

                            <Col xl={6} lg={6} md={6}>  </Col>
                        </Row>

                        <StyledRow>
                            <StyledCol xl={4} lg={4} md={4} >
                                <ContainElement>
                                    <div>
                                        <img src={'./stacks/front.png'} />
                                    </div>
                                    <h2>Front-end Development</h2>
                                    <h4>HTML5, CSS3, JAVASCRIPT</h4>
                                    <p>List of tools i use on the front-end</p>
                                    <h5>ReactJS</h5>
                                    <h5> Bootstrap</h5>
                               
                                </ContainElement>
                            </StyledCol>

                            <StyledCol xl={4} lg={4} md={4}>
                                <ContainElement>
                                    <div>
                                        <img src={'./stacks/back.png'} />
                                    </div>
                                    <h2>Back-end Development</h2>
                                    <h4>JAVA,PYTHON</h4>
                                    <p>List of tools i use on the back-end</p>
                                    <h5>SQL Server,PostgreSQL,Mongo Db</h5>
                                    
                                </ContainElement>
                            </StyledCol>

                            <StyledCol xl={4} lg={4} md={4} >
                                <ContainElement>
                                    <div>
                                        <img src={"./stacks/dev.png"} />
                                    </div>
                                    <h2>Devops, Cloud & Data Engineering </h2>
                                    <h4>Docker, Kubernetes,GitHub Action(CI/CD)</h4>
                                    <h4>Microsoft Azure</h4>
                                    <h4>DataBricks</h4>
                                    <h4>Apache Kafka</h4>
                                    <h4>Apache Airflow</h4>
                                </ContainElement>
                            </StyledCol>

                        
                    </StyledRow>
                    </Container>

                    {/* {(typeof window !== 'undefined') ? <Canvas hover={mouseOn} /> : null} */}
                </FadeInSection >
            </TakeBackgroundColor>

            <TakeHobbyContainer id='hobby' >
                <FadeInSection>
                    <Container fluid={'xxl'} >
                        <ContainHobby>
                            <SloganHobby  >Language and hobbies </SloganHobby>
                            <IntermediarHobby>I can speak and write</IntermediarHobby>
                            <StyledRow>
                                <StyledCol margin={'1.6rem'} xl={4} lg={4} md={4}>

                                    <ContainLanguage>
                                        <p>French</p>
                                        <h5>Native language</h5>
                                        <div>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                    </ContainLanguage>
                                </StyledCol>
                                <StyledCol margin={'1.6rem'} xl={4} lg={4} md={4}>

                                    <ContainLanguage>
                                        <p>German</p>
                                        <h5>Fluent</h5>
                                        <div>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                    </ContainLanguage>
                                </StyledCol>
                                <StyledCol margin={'1.6rem'} xl={4} lg={4} md={4}>

                                    <ContainLanguage>
                                        <p>English</p>
                                        <h5>Basic</h5>
                                        <div>
                                            <BsStarFill />
                                            <BsStarFill />
                            
                                        </div>
                                    </ContainLanguage>
                                </StyledCol>
                            </StyledRow>
                            <IntermediarHobby>Hobbies</IntermediarHobby>
                            <StyledRow>
                                {listd.map((itm, ind) => {
                                    const Icon = iconS[itm.icon]
                                    return (
                                        <StyledCol key={ind} xl={4} lg={4} md={4}>
                                            <ContainHobbyElement>
                                                <Icon />
                                                <p>{itm.text}</p>
                                            </ContainHobbyElement>
                                        </StyledCol>
                                    )
                                })}
                            </StyledRow>

                            <IntermediarHobby>Contact</IntermediarHobby>
                            <ContainContact>
                                <p><span>Email:</span>  tchofodep@gmail.com</p>
                                <p><span>Tel:</span> +49 15753247543  </p>
                            </ContainContact>
                        </ContainHobby>
                    </Container>

                </FadeInSection >
            </TakeHobbyContainer>
            <Finish>
                <div>
                    <p>Thanks for reaching the bottom of this page. If you want to learn more about me, are interested in a collaboration or have any feedback, just let me know.</p>
                </div>
                <Button href="mailto:tchofodep@gmail.com" >Let<span>'</span>s get in touch</Button>
                <div style={{ height: 20 }} ></div>
               
            </Finish>
        </>

    )
}
const listd = [
    { icon: 'basket', text: 'Basket-ball' },
    { icon: 'write', text: 'Read and Write books' },
    { icon: 'bike', text: 'Road cycling' },
    { icon: 'gaming', text: 'Gaming ' },
    { icon: 'music', text: 'Listen  Music' },
    { icon: 'guitare', text: 'Play acoustic guitar' },
    { icon: 'marathon', text: 'Marathon race' },
]
const iconS = {
    basket: GiBasketballJersey,
    write: HiOutlineBookOpen,
    bike: MdDirectionsBike,
    gaming: GiConsoleController,
    marathon: FaRunning,
    music: MdMusicNote,
    guitare: GiGuitar,
};
export default Stack;