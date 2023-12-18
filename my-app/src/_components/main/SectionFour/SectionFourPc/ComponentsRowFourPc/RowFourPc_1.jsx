import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Div__fourPc_1 from "./Div__FourPc_1";
import Div__fourPc_2 from "./Div__FourPc_2";
import Div__fourPc_3 from "./Div__FourPc_3";
import Div__fourPc_4 from "./Div__FourPc_4";
import Div__fourPc_5 from "./Div__FourPc_5";




const RowFourPc_1 = () => {

    return (
        <Row className="  m-0   " >
            <Col className="col-12">

                <div className="relative_fourPc ">

                    <Div__fourPc_1/>

                    <Div__fourPc_2/>

                    <Div__fourPc_3/>

                    <Div__fourPc_4/>

                    <Div__fourPc_5/>

                </div>


            </Col>
        </Row>
    );
}

export default RowFourPc_1;