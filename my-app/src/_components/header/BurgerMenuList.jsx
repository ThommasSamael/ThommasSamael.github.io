import React from "react";
import {Link} from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BurgerMenuList = (props) => {

    return (

        <Container fluid >
            <Row >
                <Col className={` burger-li
        ${props.active ? 'active' : 'inactive'}
        
        
        d-block d-lg-none`} >

                    <ul  >
                        <li className="li_burgers"> <Link to='about_us' smooth duration={100}> Про нас </Link></li>
                        <li className="li_burgers"><Link to='about_specialists' smooth duration={100}> Спеціалісти </Link></li>
                        <li className="li_burgers"><Link to='about_faq' smooth duration={100}> FAQ </Link></li>
                        <li className="li_burgers"><Link to='about_contacts' smooth duration={100}> Контакти </Link></li>
                    </ul>

                </Col>
            </Row>
        </Container>



    );
}

export default BurgerMenuList;