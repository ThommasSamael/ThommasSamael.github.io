import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_5 from '../../../../video/_video5.mp4';

const RowPc_5 = () => {
    return ( 

        <Row className=' row-margin row_end_three_pc'>
                

                <Col data-wow-offset="250" className='col-6 align-self-center   wow animate__animated animate__slow animate__fadeInLeft '>

                    <p className='text-sectionThree border-left'>Відкриті двері до можливостей: Завдяки нашим партнерствам та зв'язкам у галузі,
                     ми надаємо вам можливість долучитися до ексклюзивних подій,
                     тестувати нові ігри та співпрацювати з провідними компаніями.</p>

                </Col>

                <Col className='col-6 '>

                    <video src={video_5} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

            </Row>

     );
}
 
export default RowPc_5;