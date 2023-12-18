import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import video_0 from '../../../video/_video1.mp4';

const SectionTwo = () => {



    return (
        <section>

            <Container fluid className="container_two_margin">
                <Row>
                    <Col className="  col-12 d-flex align-self-center justify-content-center">
                        <h2 className="text1 ">Ласкаво просимо в WildBoar Games</h2>
                    </Col>
                    <Col>
                        <h3 className="text2 ">– Місце, де Ваші Ігрові Ідеї Перетворюються у Слова!</h3>

                    </Col>
                </Row>



                <Row className="d-flex justify-content-center align-items-center">

                    <Col className="col-12 col-xl-6 ">
                        <p className=" col-12 text3 " >"WildBoar Games" - це простір для тих, хто бачить у
                            світі відеоігор більше, ніж просто розвагу. Ми шукаємо талановитих і
                            пристрасних авторів, готових ділитися своїм баченням та досвідом з
                            нашою спільнотою.</p>

                            


                        <p className=" col-12 text3" >Наша команда створена істинними ентузіастами відеоігор і
                            геймінгу в цілому. Наша місія - не просто створювати контент, але взаємодіяти з геймерською спільнотою,
                            допомагаючи кожному відкривати нові горизонти в світі ігор. </p>


                            <video src={video_0} autoPlay muted loop data-wow-offset="250"
                            className="video-madia active wow animate__animated animate__fadeIn d-flex d-xl-none"
                        ></video>


                        <p className=" col-12 text3-1" >У світі "WildBoar Games", кожен переходить в ігровий світ з власною історією,
                            стилем гри та улюбленими жанрами. Але те, що нас об'єднує, визначає наше спільне прагнення зробити кожну геймерську
                            подорож насиченою та цікавою. Тепер, давайте поглибимось у те, що робить нас особливими та неповторними, і як саме
                            "WildBoar Games" допомагає кожному з вас відкрити нові горизонти в світі відеоігор. </p>

                        



                    </Col>


                    <Col className="col-0 col-xl-6 d-flex justify-content-start align-items-center d-none d-xl-flex">


                        <video src={video_0} autoPlay muted loop data-wow-offset="250" 
                            className="video-madia active wow animate__animated animate__slower animate__fadeIn"
                        ></video>



                    </Col>



                </Row>







            </Container>





        </section>
    );
}

export default SectionTwo;