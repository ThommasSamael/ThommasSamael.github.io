import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Div__fourSp_1 from "./Div__FourSp_1";
import Div__fourSp_2 from "./Div__FourSp_2";
import Div__fourSp_3 from "./Div__FourSp_3";
import Div__fourSp_4 from "./Div__FourSp_4";
import Div__fourSp_5 from "./Div__FourSp_5";





const RowFourSp_1 = () => {

    return (
        <Row className="  m-0   " >
            <Col className="col-12">

                <div className="relative_fourSp ">

                    <Div__fourSp_1/>
                    <Div__fourSp_2/>
                    <Div__fourSp_3/>
                    <Div__fourSp_4/>
                    <Div__fourSp_5/>

                   

                </div>


            </Col>
        </Row>
    );
}

export default RowFourSp_1;