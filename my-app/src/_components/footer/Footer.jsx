import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return (
        <footer id="about_contacts">

            <Container fluid className="footer_background ">

                <Row className=" ">
                    <Col>
                        <h2 className="title_footer"> WildBoar Games</h2>
                        

                    </Col>
                </Row>

                <Row >
                    <Col className="col-12 col-lg-4 p-0">
                        <h3 className="title_small ">Головний офіс</h3>
                        <ul className="ul_title_small ">
                            <li>wildboar_game@gmail.com</li>
                            
                            
                        </ul>
                    </Col>

                    

                    <Col className="col-12 col-lg-4 p-0 ">
                        <h3 className="title_small">Зв'язатися з нами</h3>
                        <ul className="ul_title_small ">
                            <li>wildboar_ua@gmail.com</li>
                            
                            
                        </ul>
                    </Col>

                    <Col className="col-12 col-lg-4 p-0 ">
                        <h3 className="title_small ">Партнерство</h3>
                        <ul className="ul_title_small ">
                            <li>wildboar_🇸🇪@gmail.com</li>
                            
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <h3 className="title_social">Ми в соціальних мережах</h3>
                    </Col>
                </Row>

                <Row className="">
                    <Col className="col-6 m-auto">
                    <ul className="d-flex flex-row justify-content-center p-0 icons_social">
                        <li><a href="" className=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="" className=""><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="" className=""><i className="fa-brands fa-facebook"></i></a></li>
                    </ul>
                    </Col>
                    
                </Row>

                <Row>
                    <Col className="col-6  p-0 footer_p">
                    <p>© 2023 WildBoar Games</p>
                    <p>Весь контент, опублікований на сайті, належить WildBoar Games.</p>
                    <p>Використання цього контенту в будь-яких цілях заборонено.</p>
                    </Col>
                </Row>

                


               

            </Container>

        </footer>
    );
}

export default Footer;
