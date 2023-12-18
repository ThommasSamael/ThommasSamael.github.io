import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Accordion from 'react-bootstrap/Accordion';

import _img2 from '../../../../img/_img2.jpg';

const Row_sectionSix_2 = () => {
    return (
        <>
        
            <Row >



                <Col className="col-12 col-lg-7 p-0">
                    <h3 className="mini_title">Робочий процес</h3>
                </Col>

            </Row>

            <Row className="acordions_six ">




                <Col className="col-12 order-1 order-lg-0 col-lg-6 align-self-center justify-content-center">

                    <Accordion defaultActiveKey="none" id="accotdion_right" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Графік роботи</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">Наша компанія встановлює гнучкий графік роботи, що враховує специфіку різних завдань.
                                    Це особливо важливо при створенні відео-контенту та підготовці до кіберспортивних заходів.
                                    Ми розуміємо, що творчість та професійність найкраще проявляються в умовах, коли працівники можуть
                                    працювати в оптимальний для себе час.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Віддалена робота</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">Компанія підтримує можливість віддаленої роботи, особливо для тих,
                                    хто займається написанням рецензій чи створенням відео-контенту.
                                    Ми використовуємо сучасні інструменти для комунікації та співпраці,
                                    щоб забезпечити ефективну взаємодію дистанційно.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Комунікація та взаємодія </Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">Ми активно використовуємо різноманітні інструменти комунікації для підтримки ефективної співпраці
                                    в команді. Регулярні зустрічі, віртуальні платформи та професійні форуми допомагають вирішувати
                                    труднощі та сприяють взаєморозумінню між учасниками команди.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Бенефіти та компенсації</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">Наша компанія надає конкурентні соціальні пакети та бенефіти для всіх співробітників,
                                    зокрема для тих, хто бере активну участь в кіберспортивних заходах. Оплата та бонуси
                                    розглядаються індивідуально враховуючи вклад кожного працівника.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Умови розвитку та навчання</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">У нас існують різноманітні можливості для професійного розвитку, включаючи участь в тренінгах,
                                    конференціях та інших навчальних заходах. Ми підтримуємо активне навчання та розвиток навичок.</p>
                                наших співробітників.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col className="col-12 order-0 order-lg-1 col-lg-6 d-flex  justify-content-start flex-column align-items-center align-items-lg-end ">



                    <img src={_img2} alt="" className=" d-block img_accordion  " />

                    <p className="label_img_section_six">Команда тестувальників VR в Барселоні</p>




                </Col>

            </Row>

        </>
    );
}

export default Row_sectionSix_2;