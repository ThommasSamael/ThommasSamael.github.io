import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from 'react-bootstrap/Carousel';
import Typed from 'react-typed';

import video_8 from '../../../../../video/_video8.mp4';
import video_9 from '../../../../../video/_video9.mp4';
import video_10 from '../../../../../video/_video10.mp4';

const Row_sectionFive_2 = (props) => {
    return (

        <>

            <Row className=" d-flex justify-content-center align-items-center">



                <Col className="col-8">

                    <h3 className="section_five_h3">Автори статей</h3>

                </Col>
            </Row>


            <Row className="d-none d-lg-flex justify-content-center align-items-center">

                <Col className="col-4">


                    <video src={video_8} controls data-wow-offset="350" data-wow-delay="0.3s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>

                <Col className="col-4">


                    <video src={video_9} controls data-wow-offset="350" data-wow-delay="0.5s"
                        className="video-madia wow  animate__animated animate__zoomIn"
                    ></video>


                </Col>


                <Col className="col-4">

                    <video src={video_10} controls data-wow-offset="350" data-wow-delay="0.7s"
                        className="video-madia wow animate__animated animate__zoomIn"
                    ></video>


                </Col>





            </Row>

            <Row className="d-flex d-lg-none" >

                <Carousel fade >
                    <Carousel.Item interval={20000} >



                        <video src={video_8} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>



                    </Carousel.Item>
                    <Carousel.Item interval={20000}>


                        <video src={video_9} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                    <Carousel.Item interval={20000}>

                        <video src={video_10} autoPlay muted loop
                            className="w-100 d-block"
                        ></video>

                    </Carousel.Item>
                </Carousel>

            </Row>

            <Row className="d-flex justify-content-center align-items-center">

                <Col className="col-11 col-xl-8">

                    <div className="text_s_five" ref={props.ref_2}>
                        {props.text_2 && (
                            <Typed strings={[`Наші креативні письменники, які працюють над статтями про відеоігри, дійсно видаються особливими завдяки своєму унікальному 
                            підходу до створення контенту.
                            Вони не просто розказують про ігри – вони вивчають ігровий світ, розкривають цікаві деталі та пишуть інформативні статті,які залишають 
                            слід в пам'яті читачів. Важливо відзначити, що наші автори не обмежуються лише створенням контенту – вони взаємодіють з іншими відділами, 
                            намагаючись надати нашим шанувальникам ще більше глибоких інсайтів та ексклюзивної інформації. Це не просто робота, а творчий процес, який дозволяє 
                            нам подавати ігри у новому світлі та поглиблювати зв'язок з нашою аудиторією.
     
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

export default Row_sectionFive_2;