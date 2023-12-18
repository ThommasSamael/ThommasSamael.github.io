import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video_2 from '../../../../video/_video2.mp4';

const RowPc_2 = () => {
    return ( 

        <Row className='  '>
                <Col className='col-6 '>

                    <video src={video_2} autoPlay muted loop
                        className="video-madia-pc active "
                    ></video>

                </Col>

                <Col data-wow-offset="250" className='col-6 align-self-center  wow animate__animated animate__slow animate__fadeInRight  '>

                    <p  className='text-sectionThree border-right'>У "WildBoar Games" геймінг - це не просто тема для наших матеріалів, це наше
                        страстне хобі та стиль життя. Кожен із нас відчуває велику прив'язаність до світу відеоігор, і це відбивається
                        в кожній рецензії, кожній статті та кожній висловленій думці.
                        Ми не тільки граємо у ігри; ми переживаємо їх. Моменти азарту,
                        захоплення, та навіть роздуми над сюжетом – усе це стає не
                        просто темою для обговорення, але і внутрішньою частиною нашого геймерського досвіду.</p>

                </Col>

            </Row>

     );
}
 
export default RowPc_2;