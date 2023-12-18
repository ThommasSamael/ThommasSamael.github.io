import React from "react";
import Container from "react-bootstrap/esm/Container";

import Row_sectionSix_1 from "./RowsSectionSixAll/Row_sectionSix_1";
import Row_sectionSix_2 from "./RowsSectionSixAll/Row_sectionSix_2";
import Row_sectionSix_3 from "./RowsSectionSixAll/Row_sectionSix_3";


const SectionSixAll = () => {
    return (

        <Container fluid >

            <Row_sectionSix_1/>

            <Row_sectionSix_2/>

            <Row_sectionSix_3/>

        </Container>
    );
}

export default SectionSixAll;