import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_3 from '../../../../video/_video3.mp4';

const RowSp_3 = () => {
    return ( 

        <Row className='  '>
                <Col className='col-12 p-0 m-f-v'>

                    <video src={video_3} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

                <Col data-wow-offset="250" className='col-12 align-self-center   wow animate__animated animate__slow animate__fadeIn border-text'>

                    <p className='text-sectionThree-Sp '>Коли розповідаємо про гру, ми не тільки обговорюємо геймплей та графіку. 
                    Ми розповідаємо історію свого занурення в цей світ, поділяємося епічними моментами, що залишили величезний відбиток у 
                    наших геймерських серцях.</p>

                </Col>

            </Row>

     );
}
 
export default RowSp_3;