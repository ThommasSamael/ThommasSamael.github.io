import React from 'react';
import Container from 'react-bootstrap/Container';


import RowPc_1 from './RowPc_1';
import RowPc_2 from './RowPc_2';
import RowPc_3 from './RowPc_3';
import RowPc_4 from './RowPc_4';
import RowPc_5 from './RowPc_5';

const VersionPC = () => {
    return (

        <Container fluid className=' d-none d-lg-block ' >
            
            <RowPc_1/>

            <RowPc_2/>

            <RowPc_3/>

            <RowPc_4/>

            <RowPc_5/>

        </Container>

    );
}

export default VersionPC;