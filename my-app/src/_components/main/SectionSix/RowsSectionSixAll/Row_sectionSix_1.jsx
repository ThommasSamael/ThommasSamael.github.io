import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Accordion from 'react-bootstrap/Accordion';

import _img1 from '../../../../img/_img1.jpg';

const Row_sectionSix_1 = () => {
    return (
        <>
            <Row >

                <Col className="col-12 col-lg-7 p-0">
                    <h3 className="mini_title">Про компанію</h3>
                </Col>

            </Row>

            <Row className="acordions_six ">
                <Col className="col-12 order-1 order-lg-0 col-lg-6  align-self-center justify-content-center  ">

                    <Accordion defaultActiveKey="none " >
                        <Accordion.Item eventKey="0 ">
                            <Accordion.Header>Чому саме WildBoar Games</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">"Wild" відображає наше прагнення до нескорених горизонтів, де кожна гра — це новий світ для відкриттів та пригод.
                                    Ми прагнемо до дикої енергії і безмежного потенціалу, які приносить геймінг.</p>

                                <p className="p_in_accordion">"Boar" представляє силу та витримку. Наша команда — це невгамовні, сміливі та міцні індивіди, готові взяти на себе
                                    виклики та просуватися вперед, не зупиняючись перед нічим. Це також символізує нашу активну участь у кіберспорті та
                                    постійне прагнення до вдосконалення.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Де знаходяться офіси компанії </Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">  Швеція - Стокгольм:
                                    Офіс у Стокгольмі відповідає за партнерства та співпрацю. </p>

                                <p className="p_in_accordion"> Україна - Київ:
                                    Офіс у Києві є центром тестування ігор та забезпечення якості. </p>

                                <p className="p_in_accordion"> Німеччина - Берлін:
                                    Офіс у Берліні служить центром творчості та розробки ігрового контенту. </p>

                                <p className="p_in_accordion">Франція - Париж:
                                    Офіс у Парижі відповідає за маркетингові та PR-стратегії компанії.</p>

                                <p className="p_in_accordion"> Велика Британія - Лондон:
                                    Офіс у Лондоні фокусується на розвитку кіберспортивного напряму компанії. </p>

                                <p className="p_in_accordion"> Іспанія - Барселона:
                                    Барселона стала базою для тестування технологій віртуальної реальності. </p>

                                <p className="p_in_accordion"> Італія - Рим:
                                    У Римі зосереджено відділ контент-креації. </p>

                                <p className="p_in_accordion"> Нідерланди - Амстердам:
                                    Амстердамський офіс відповідає за стрімінг та виробництво відео-контенту. </p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Коли відбулося зародження компанії</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion"> WildBoar Games почала свою діяльність у 2010 році у Стокгольмі, Швеція.
                                    Це місце визначається як місце народження компанії, де було прийнято рішення
                                    заснувати і розпочати свою діяльність.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Яка кількість співробітників у компанії</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">У WildBoar Games активно розвивається та нараховує більше 1000 талановитих співробітників.
                                    Ця чисельність включає в себе різні фахові напрями, такі як розробка відео-ігор, кіберспорт,
                                    віртуальна реальність, маркетинг та багато інших. Наша команда веде інноваційний підхід до
                                    геймінгу та технологій, регулярно випускаючи захоплюючі проекти та беручи участь у кіберспортивних
                                    подіях. Ми пишаємося тим, що з кожним днем розвиваємось, надаючи нашим клієнтам та геймерській
                                    аудиторії ще більше захоплюючих інновацій та вражень.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Які плани на майбутнє у компанії</Accordion.Header>
                            <Accordion.Body>
                                <p className="p_in_accordion">WildBoar Games у своїх планах на майбутнє має ряд великих та захоплюючих ініціатив.
                                    Ми активно працюємо над розвитком інноваційних ігор та технологій, щоб продовжити
                                    вражати та виводити геймінг на новий рівень.</p>

                                <p className="p_in_accordion"> Наша місія полягає в створенні унікальних та захоплюючих експериментів у світі відео-ігор та розваг.
                                    Ми плануємо розширювати свої горизонти, залучаючи нових талановитих співробітників, розгортаючи нові
                                    проекти та встановлюючи партнерства, щоб розширити вплив WildBoar Games на ринку.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col className="col-12 order-0 order-lg-1 col-lg-6 d-flex  justify-content-start flex-column align-items-center align-items-lg-end  ">

                    <img src={_img1} alt="" className=" d-block img_accordion " />




                    <p className="label_img_section_six">Генеральний офіс в Стокгольмі</p>




                </Col>

            </Row>

        </>
    );
}

export default Row_sectionSix_1;