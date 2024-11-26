import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import LeftBox from './components/Home/LeftBox/'
import RightBox from './components/Home/RightBox/'
import AboutMe from './components/Home/AboutMe'
import Stack from './components/Home/Stack'
import Project from './components/Home/Project'
import { Container } from 'react-bootstrap';
import { StyledRow, StyledCol } from "./components/Home/helpers/StyledComponents";
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){

  return (
  
    <>
    <Container fluid style={{ padding: 0 }} >
        <StyledRow>
            <StyledCol  xl={5} lg={5} md={5} sm={12} xs={12} >
           
                <RightBox />
            </StyledCol >
            <StyledCol xl={7} lg={7} md={7} sm={12} xs={12} >
                <LeftBox /> 
            </StyledCol>
        </StyledRow>
    </Container>
  
        <>
     <AboutMe/>
     <Project/>
     <Stack/>
        </>
      
</>

  );

}





export default App;
