import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from 'react-bootstrap/Carousel';
import Typed from 'react-typed';

import video_17 from '../../../../../video/_video17.mp4';
import video_18 from '../../../../../video/_video18.mp4';
import video_19 from '../../../../../video/_video19.mp4';

const Row_sectionFive_5 = (props) => {
    return (

        <>

            <Row className="d-flex justify-content-center align-items-center">



                <Col className="col-8">

                    <h3 className="section_five_h3">Тестувальники</h3>

                </Col>
            </Row>


            <Row className="d-none d-lg-flex justify-content-center align-items-center">

                <Col className="col-4">


                    <video src={video_17} controls data-wow-offset="350" data-wow-delay="0.3s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>

                <Col className="col-4">


                    <video src={video_18} controls data-wow-offset="350" data-wow-delay="0.5s"
                        className="video-madia wow  animate__animated animate__zoomIn"
                    ></video>


                </Col>


                <Col className="col-4">

                    <video src={video_19} controls data-wow-offset="350" data-wow-delay="0.7s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>





            </Row>

            <Row className="d-flex d-lg-none " >

                <Carousel fade >
                    <Carousel.Item interval={20000} className="">



                        <video src={video_17} autoPlay muted loop
                            className="w-100 d-block "
                        ></video>



                    </Carousel.Item>
                    <Carousel.Item interval={20000}>


                        <video src={video_18} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                    <Carousel.Item interval={20000}>

                        <video src={video_19} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                </Carousel>

            </Row>


            <Row className="d-flex justify-content-center align-items-center">

                <Col className="col-11 col-xl-8">

                    <div className="text_s_five" ref={props.ref_5}>
                        {props.text_5 && (
                            <Typed strings={[`Ми активно занурюємося у світ новітніх технологій віртуальної реальності.
                            Наші тестувальники – це справжні дослідники в глобальній лабораторії геймдеву, які не
                            задовольняються лише звичайним, але активно шукають та виявляють перлини у світі віртуальної реальності.


                            Вони виступають свідками перших кроків новітніх технологій та переживають їх еволюцію в режимі реального часу. 
                            Наші тестувальники взаємодіють з іграми, які використовують віртуальну реальність, та вносять вагомий вклад у 
                            вдосконалення їхніх можливостей та вражаючого досвіду геймінгу.


        
        
        
        
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

export default Row_sectionFive_5;