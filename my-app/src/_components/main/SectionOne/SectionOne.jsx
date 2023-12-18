import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import video_6 from '../../../video/_video6.mp4';
import video_7 from '../../../video/_video7.mp4';
import video_8 from '../../../video/_.mp4';



const SectionOne = () => {
  return (
    <section>
      <Container fluid className=" p-0 m-0">
        <Row >
          <Col className="col-12 p-0 m-0">


            <Carousel >
              <Carousel.Item>

              <video src={video_6} autoPlay muted loop
                        className="d-block w-100 h-100 vidio-height"
                    ></video>
                

                <Carousel.Caption>
                  <h3 >Новітні технології VR</h3>
                  <p className="d-none d-md-block">Лідери в сфері тестування VR</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <video src={video_7} autoPlay muted loop
                        className="d-block w-100 vidio-height"
                    ></video>

                <Carousel.Caption>
                  <h3 >Працюй в комфортних умовах</h3>
                  <p className="d-none d-md-block">Ми надаємо можливіть працювати вдома</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <video src={video_8} autoPlay muted loop
                        className="d-block w-100  vidio-height "
                    ></video>

                <Carousel.Caption>
                  <h3 >Відродження ретро ігор</h3>
                  <p className="d-none d-md-block vidio-height">
                    Активно залучаємо любителів ретро ігор в нашу команду
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>



          </Col>
        </Row>
      </Container>

    </section>

  );
}

export default SectionOne;