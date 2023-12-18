import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_4 from '../../../../video/_video4.mp4';

const RowSp_4 = () => {
    return ( 

        <Row className='  '>
                <Col className='col-12 p-0 m-f-v'>

                    <video src={video_4} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

                <Col data-wow-offset="250" className='col-12 align-self-center   wow animate__animated animate__slow animate__fadeIn border-text'>

                    <p className='text-sectionThree-Sp '>Ваша участь у нашій команді – це не лише можливість писати статті.
                    Це запрошення в ексклюзивну групу ентузіастів, які вносять 
                    свій внесок у формування геймінг-світу. Ви стаєте частиною спільноти,
                    де ваші ідеї можуть впливати на події, де ваші слова можуть змінювати правила гри.</p>

                </Col>

            </Row>

     );
}
 
export default RowSp_4;