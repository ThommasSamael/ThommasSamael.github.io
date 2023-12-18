import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from 'react-bootstrap/Carousel';
import Typed from 'react-typed';


import video_14 from '../../../../../video/_video14.mp4';
import video_15 from '../../../../../video/_video15.mp4';
import video_16 from '../../../../../video/_video16.mp4';

const Row_sectionFive_4 = (props) => {
    return (

        <>

            <Row className="d-flex justify-content-center align-items-center">
                <Col className="col-8">

                    <h3 className="section_five_h3">Кіберспортсмени</h3>

                </Col>
            </Row>

            <Row className="d-none d-lg-flex justify-content-center align-items-center">

                <Col className="col-4">


                    <video src={video_14} controls data-wow-offset="350" data-wow-delay="0.3s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>

                <Col className="col-4">


                    <video src={video_15} controls data-wow-offset="350" data-wow-delay="0.5s"
                        className="video-madia wow  animate__animated animate__zoomIn"
                    ></video>


                </Col>


                <Col className="col-4">

                    <video src={video_16} controls data-wow-offset="350" data-wow-delay="0.7s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>





            </Row>

            <Row className="d-flex d-lg-none" >

                <Carousel fade >
                    <Carousel.Item interval={20000} >



                        <video src={video_14} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>



                    </Carousel.Item>
                    <Carousel.Item interval={20000}>


                        <video src={video_15} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                    <Carousel.Item interval={20000}>

                        <video src={video_16} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                </Carousel>

            </Row>

            <Row className=" justify-content-center align-items-center">

                <Col className="col-11 col-xl-8">

                    <div className="text_s_five" ref={props.ref_4}>

                        {props.text_4 && (
                            <Typed strings={[`В світі кіберспорту професійні гравці є справжніми героями, а для нас вони стають обличчям і прапорцем
                         нашої геймерської команди. Вони не просто ведуть боротьбу на віртуальних аренах, але і стають віддзеркаленням тієї енергії, яка приводить
                          нас вперед і визначає наше ставлення до геймінгу.

                          Кожен учасник нашої команди відображає не лише свою власну майстерність, але й розпалює енергію геймерського вогню в серцях кожного з нас.
                           Їх відданість, стратегічне мислення та здатність до спільної гри становлять для нас невичерпне джерело натхнення.

                        
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

export default Row_sectionFive_4;