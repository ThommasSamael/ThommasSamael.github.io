import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WOW from 'wowjs'

import video_2 from '../../../../video/_video2.mp4'
import video_3 from '../../../../video/_video3.mp4'
import video_4 from '../../../../video/_video4.mp4'
import video_5 from '../../../../video/_video5.mp4'
import RowSp_1 from './RowSp_1';
import RowSp_2 from './RowSp_2';
import RowSp_3 from './RowSp_3';
import RowSp_4 from './RowSp_4';
import RowSp_5 from './RowSp_5';

const VersionSmartPhone = () => {
    return ( 

        <Container fluid className='d-block d-lg-none '>

            <RowSp_1/>
            <RowSp_2/>
            <RowSp_3/>
            <RowSp_4/>
            <RowSp_5/>

           

        </Container>


     );
}
 
export default VersionSmartPhone;