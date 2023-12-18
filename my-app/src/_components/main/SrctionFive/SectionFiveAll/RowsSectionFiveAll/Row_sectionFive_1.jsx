import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Typed from 'react-typed';

const Row_sectionFive_1 = (props) => {
    return ( 

        <>

        <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-8 ">

            <div className="text_s_five_titel_go">
                <Typed strings={[`Тестування`, `Кіберспорт`, `Дизайн`, `Копірайтинг`]}
                    typeSpeed={35} backSpeed={50} speed={0} loop={true} showCursor={true}
                />
            </div>
        </Col>
    </Row>


    <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-11 col-xl-8">

            <div className="text_s_five  " ref={props.ref_1}>
                

                { props.text_1 && (
                    <Typed strings={[`Наша історія – це не лише лінійний наратив, але і пригода, яку ми разом писали
                крок за кроком. Ми не вирішили обмежитися просто описом ігор або поглибитися тільки в їхні аспекти.
                Ми вирішили створити щось більше – спільноту,де кожен учасник має можливість відчути себе частиною чогось великого.


                Тут історії не завершуються – вони розвиваються та змінюються, як гра з відкритим світом.
                 Ми пропонуємо кожному, хто поділяє нашу пристрасть до геймінгу, приєднатися до нашої спільноти,
                  де кожен може стати співавтором цієї захоплюючої історії. Наша історія – це завдання, в якому кожен
                   може знайти свою роль і відчути, що він частка чогось великого.
             

             
             
             `]}
                        typeSpeed={0} speed={0} loop={false} showCursor={true} className="text_s_five_span"
                    />
                )}
            </div>

        </Col>
    </Row>

    </>

     );
}
 
export default Row_sectionFive_1;