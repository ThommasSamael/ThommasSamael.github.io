import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from 'react-bootstrap/Carousel';
import Typed from 'react-typed';


import video_11 from '../../../../../video/_video11.mp4';
import video_12 from '../../../../../video/_video12.mp4';
import video_13 from '../../../../../video/_video13.mp4';

const Row_sectionFive_3 = (props) => {
    return (

        <>

            <Row className="d-flex justify-content-center align-items-center">
                <Col className="col-8">

                    <h3 className="section_five_h3">Дизайнери</h3>

                </Col>
            </Row>

            <Row className="d-none d-lg-flex justify-content-center align-items-center">

                <Col className="col-4">


                    <video src={video_11} controls data-wow-offset="350" data-wow-delay="0.3s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>

                <Col className="col-4">


                    <video src={video_12} controls data-wow-offset="350" data-wow-delay="0.5s"
                        className="video-madia wow  animate__animated animate__zoomIn"
                    ></video>


                </Col>


                <Col className="col-4">

                    <video src={video_13} controls data-wow-offset="350" data-wow-delay="0.7s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>





            </Row>

            <Row className="d-flex d-lg-none" >

                <Carousel fade >
                    <Carousel.Item interval={20000} >



                        <video src={video_11} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>



                    </Carousel.Item>
                    <Carousel.Item interval={20000}>


                        <video src={video_12} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                    <Carousel.Item interval={20000}>

                        <video src={video_13} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                </Carousel>

            </Row>

            <Row className="d-flex justify-content-center align-items-center">

                <Col className="col-11 col-xl-8">


                    <div className="text_s_five" ref={props.ref_3}>
                        {props.text_3 && (
                            <Typed strings={[`В нашій команді дизайнерів, які створюють відео-контент про ігри, ми прагнемо розкривати велич і красу геймінгу
                         через призму власного творчого бачення. Кожен відеоролик для нас – це не просто відображення геймплею, а справжній витвір мистецтва,
                          що веде глядача в захоплюючий світ віртуальної реальності.

                          Наші відеоролики – це не просто розважальний контент. Це інтерактивне мистецтво, де кожен може зануритися в глибини геймінгового 
                          світу та відчути його красу і емоції. Ми прагнемо не лише демонструвати ігри, але й створювати справжні витвори мистецтва, які 
                          залишають невимовні враження у кожного глядача.
                     
                     `]}
                                typeSpeed={0} speed={0} loop={false} showCursor={true}
                            />
                        )}

                    </div>

                </Col>
            </Row>


        </>

    );
}

export default Row_sectionFive_3;