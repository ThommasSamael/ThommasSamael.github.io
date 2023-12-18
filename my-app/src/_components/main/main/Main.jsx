import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BtnToTeam from "../BtnToTeam/BtnToTeam";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SrctionFive/SectionFive";
import SectionSix from "../SectionSix/SectionSix";
import SectionSeven from "../SectionSeven/SectionSeven";



const Main = () => {
    return ( 

        <main>
            
            <Container fluid>
                <Row>
                    <Col>

                    

                    <SectionOne/>

                    <SectionTwo/>

                    <BtnToTeam/>

                    <SectionThree/>

                    <BtnToTeam/>

                    <SectionFour/>

                    <BtnToTeam/>

                    <SectionFive/>

                    <SectionSix/>

                    <SectionSeven/>

                    <BtnToTeam/>
                    
                    </Col>
                </Row>
            </Container>

            
            
            
        </main>
     );
}
 
export default Main;