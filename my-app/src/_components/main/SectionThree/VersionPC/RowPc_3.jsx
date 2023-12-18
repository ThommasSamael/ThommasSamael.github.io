import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_3 from '../../../../video/_video3.mp4';

const RowPc_3 = () => {
    return ( 

        <Row className=' row-margin'>
                

                <Col data-wow-offset="250" className='col-6 align-self-center   wow animate__animated animate__slow animate__fadeInLeft '>

                    <p className='text-sectionThree border-left'>Коли розповідаємо про гру, ми не тільки обговорюємо геймплей та графіку. 
                    Ми розповідаємо історію свого занурення в цей світ, поділяємося епічними моментами, що залишили величезний відбиток у 
                    наших геймерських серцях.</p>

                </Col>

                <Col className='col-6 '>

                    <video src={video_3} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

            </Row>

     );
}
 
export default RowPc_3;