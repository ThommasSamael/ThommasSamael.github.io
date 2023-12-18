import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Accordion from 'react-bootstrap/Accordion';

import _img3 from '../../../../img/_img3.jpg';

const Row_sectionSix_3 = () => {
    return (
        <>

            <Row >

                <Col className="col-12 col-lg-7 p-0">
                    <h3 className="mini_title">Про офіс</h3>
                </Col>

            </Row>

            <Row className="acordions_six">
                <Col className=" col-12 order-1 order-lg-0 col-lg-6 align-self-center justify-content-center">

                    <Accordion defaultActiveKey="none">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Організація простору</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">У нашому офісі ми створили справжню геймерську атмосферу, де сучасні комп'ютери, оформлені
                                    неоновим світлом, домінують. Кожен робочий стіл обладнаний потужними геймінговими системами,
                                    які дозволяють нашій команді повністю зануритися в світ віртуальної реальності.</p>

                                <p className="p_in_accordion">Неонові відтінки та підсвічування створюють ефектне освітлення, що відзначає наш офіс серед інших.
                                    Крім того, ми використовуємо технології підсвічування, які реагують на геймплей, </p>
                                надаючи додатковий динамізм робочому середовищу.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Зони відпочинку</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">У зонах відпочинку встановлені ергономічні меблі, такі як м'які дивани, крісла та столики.
                                    Це надає можливість працівникам відпочити у комфортній атмосфері, а також забезпечує простір
                                    для неформальних зустрічей та обміну ідеями.</p>

                                <p className="p_in_accordion">Окрім внутрішніх зон відпочинку, наші офіси також мають зручне зовнішнє подвір'я або терасу.
                                    Це дозволяє працівникам відпочити на свіжому повітрі, насолоджуючись природою або коротким переривчастим прогулянками.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Технічне забезпечення</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">У нашому офісі працівники мають доступ до сучасного технічного забезпечення,
                                    що сприяє ефективності та високій продуктивності. Кожен отримує персональний
                                    комп'ютер або робочу станцію з високоякісним апаратним забезпеченням
                                    для швидкої та надійної роботи.</p>

                                <p className="p_in_accordion">Зокрема, для тих, хто займається розробкою відео-контенту, тестуванням ігор та роботою
                                    з віртуальною реальністю, надається спеціальне обладнання, таке як потужні графічні карти,
                                    високоякісні монітори та пристрої віртуальної реальності.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Комунікація та співпраця</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">Ми використовуємо інтегровані платформи для спільної роботи, такі як Slack або Microsoft Teams,
                                    які дозволяють співробітникам обговорювати проекти, ділитися документами
                                    та надсилати повідомлення в реальному часі.</p>


                                <p className="p_in_accordion">Додатково, проводяться регулярні зустрічі та онлайн-конференції, що допомагають підтримувати прозору комунікацію
                                    та зберігати зв'язок між віддаленими командами. Електронна пошта також використовується для формальних
                                    комунікацій та обміну важливою інформацією.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Безпека робочого середовища</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">Всі робочі місця оглядаються та обладнуються з урахуванням найвищих стандартів безпеки.
                                    Розміщення меблів, електроприладів та іншого обладнання планується так,
                                    щоб уникнути потенційних небезпек та травм.</p>

                                <p className="p_in_accordion"> У нас завжди є перша допомога та необхідні медичні засоби для надання допомоги
                                    в разі потреби. Також доступні консультації з медичним персоналом.</p>

                                <p className="p_in_accordion"> Заходи безпеки даних та конфіденційності включають в себе захист від несанкціонованого
                                    доступу, регулярні аудити та навчання персоналу щодо кібербезпеки.</p>




                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>

                <Col className="col-12 order-0 order-lg-1 col-lg-6 d-flex  justify-content-start flex-column align-items-center align-items-lg-end  ">

                    <img src={_img3} alt="" className="  img_accordion " />




                    <p className="label_img_section_six">Турнір CS:GO 2022 рік</p>





                </Col>

            </Row>

        </>
    );
}

export default Row_sectionSix_3;