import React from "react";
import {Link} from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BurgerMenuList from "./BurgerMenuList";

const Header = () => {

    const [active, setActive] = React.useState(false)

    const burgeActiveBtn = () => {
        setActive((prev) => !prev)

    }

    return (

        <header >
            <Container fluid className=" align-self-center header-background-style " >
                <Row>
                    <Col lg='1' className="d-flex  align-self-center justify-content-center col-3 ">
                        <i className="fa-brands fa-grunt icon" ></i>
                    </Col>
                    <Col lg='4' className="d-flex align-items-center flex-nowrap  col-6 ">
                        <h1 className="m-0 logo" >WildBoar Games</h1>
                    </Col>
                    <Col className="d-lg-flex   d-none justify-content-end  " sm='7'>
                        <ul className="d-flex flex-row  align-items-center ul-header m-0"  >
                            <li className="li"> <Link to='about_us' smooth duration={100}> Про нас </Link></li>
                            <li className="li"><Link to='about_specialists' smooth duration={100}> Спеціалісти </Link></li>
                            <li className="li"><Link to='about_faq' smooth duration={100}> FAQ </Link></li>
                            <li className="li"><Link to='about_contacts' smooth duration={100}> Контакти </Link></li>
                        </ul>
                    </Col>

                    <Col className=" d-lg-none d-flex  col-3 align-items-center justify-content-center m-0">
                        <button className="burger-menu" onClick={burgeActiveBtn}><i className="fa-solid fa-bars burger-btn"></i></button>
                    </Col>

                </Row>
            </Container>

            <BurgerMenuList

                active={active}

            />


        </header>

    );
}

export default Header;