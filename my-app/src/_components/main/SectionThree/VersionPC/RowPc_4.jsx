import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_4 from '../../../../video/_video4.mp4';

const RowPc_4 = () => {
    return ( 

        <Row className=' row-margin '>
                <Col className='col-6 '>

                    <video src={video_4} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

                <Col data-wow-offset="250" className='col-6 align-self-center   wow animate__animated animate__slow animate__fadeInRight '>

                    <p className='text-sectionThree border-right'>Ваша участь у нашій команді – це не лише можливість писати статті.
                    Це запрошення в ексклюзивну групу ентузіастів, які вносять 
                    свій внесок у формування геймінг-світу. Ви стаєте частиною спільноти,
                    де ваші ідеї можуть впливати на події, де ваші слова можуть змінювати правила гри.</p>

                </Col>

            </Row>

     );
}
 
export default RowPc_4;