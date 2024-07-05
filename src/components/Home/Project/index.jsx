
import { useState } from "react";
import { Container, } from "react-bootstrap";
import { Intermediare } from "../LeftBox/LeftBox.styled";
import { projets } from "./data";
import { ContainProject, TitleProject, Box2,Link } from "./Project.styled";
import Carousel, { Modal, ModalGateway } from "react-images";
/*import FadeInSection from "/src/components/Home/FadeInSection";*/
import FadeInSection from "../FadeInSection";
import { StyledRow, StyledCol } from "../helpers/StyledComponents";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Project() {
    const [typ, setTyp] = useState('web');
    return (
        <ContainProject id='projects' >
            <FadeInSection>
                <Container fluid={'xxl'} >
                  
                    <Intermediare> <span></span> Projects</Intermediare>

                    <TitleProject>This section presents some personals projects I've worked on. The list is not exhaustive though. The source code for the following three projects is available through GitHub. 
                        Just click on 'Open' for each project to see the source code." </TitleProject>

                    <StyledRow>
                        {projets.map((item, ind) => {
                            return (
                                <StyledCol key={ind} margin={'1.5rem'} xl={6} lg={6} md={6} xs={12} >
                                    <BoxDetailSecond num={ind} />
                                </StyledCol>
                            )
                        })}
                    </StyledRow>
                </Container>
            </FadeInSection>
        </ContainProject>
    )
}


const BoxDetailSecond = ({ num }) => {
    const [openLightBox, setOpenLightbox] = useState(null);
    const { img, stack, text, title, offline, url, images,code } = projets[num];

    function onClick() {
        if (images) {
            setOpenLightbox(images);

            return false;
        }
        Router.push(url);
    }

    return (
        <>
            {openLightBox ? (
                <OpenModalView
                    openLightBox={openLightBox}
                    setopenLightbox={() => setOpenLightbox(null)}
                    title={title}
                />
            ) : null}
            <Box2 img={'/projects/' + img}>
                <div className="cover" onClick={onClick}>
                    <div>
                        <div style={{ height: images ? '185%' : '100%', backgroundSize: images ? 'contain' : 'cover' }}>
                            <span>
                                <span>{images ? 'See more' : <Link href={url}>Open project</Link>}</span>
                            </span>
                        
                        </div>
                    </div>
                </div>

                <div className="contain">
                    <h4>
                        <span>
                            {title}
                            {offline ? (
                                <>
                                    <i> (</i>offline<i>)</i>
                                </>
                            ) : null}
                        </span>
                    </h4>
                    <p>{text}</p>
                    <p>{code}</p>
                    <h5>{stack}</h5>

                </div>
            </Box2>
        </>
    );
};

const OpenModalView = ({ openLightBox, setopenLightbox, title }) => {
    const { link, number } = openLightBox;

    function mapInformation() {
        let images = [];
        for (let index = 1; index < number; index++) {
            let _url = 'https://www.noudou.me/projects/' + link + '/' + index + '.jpg';
            images.push({
                source: _url,
                caption: title,
            });
        }
        return images;
    }

    return (
        <ModalGateway>
            {openLightBox ? (
                <Modal onClose={() => setopenLightbox(null)}>
                    <Carousel currentIndex={0} views={mapInformation()} />
                </Modal>
            ) : null}
        </ModalGateway>
    );
};