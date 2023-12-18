import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_5 from '../../../../video/_video5.mp4';

const RowSp_5 = () => {
    return ( 

        <Row className=' row_end_three_sp  '>
                <Col className='col-12 p-0 m-f-v'>

                    <video src={video_5} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

                <Col data-wow-offset="250" className='col-12 align-self-center   wow animate__animated animate__slow animate__fadeIn border-text'>

                    <p className='text-sectionThree-Sp '>Відкриті двері до можливостей: Завдяки нашим партнерствам та зв'язкам у галузі,
                     ми надаємо вам можливість долучитися до ексклюзивних подій,
                     тестувати нові ігри та співпрацювати з провідними компаніями.</p>

                </Col>

            </Row>

     );
}
 
export default RowSp_5;