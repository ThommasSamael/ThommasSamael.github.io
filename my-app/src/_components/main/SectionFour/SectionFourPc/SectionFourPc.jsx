import React from "react";
import Container from 'react-bootstrap/Container';
import RowFourPc_1 from "./ComponentsRowFourPc/RowFourPc_1";



const SectionFourPc = () => {
    return ( 
        <Container fluid className="d-none d-lg-block">
            <RowFourPc_1/>
        </Container>
         
    );
}
 
export default SectionFourPc;