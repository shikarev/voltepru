import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderVoltep2 from "../component/header/HeaderVoltep2";
import FooterTwoVoltep from "../component/footer/FooterTwoVoltep";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import AnimationLearn from "../elements/AnimationLearn";


class MainMapvis extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <div className="active-dark">
                <Helmet pageTitle="Тренажерные системы" />
                <HeaderVoltep2 homeLink="/" logo="symbol-dark" color="color-black"/>

                {/* Start Video Area  */}
            <div className="bg_color--1">
                <div className="rn-team-wrapper pt--200">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <h2>Тренажерные системы</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rn-section pb--120">
                    <div className="container">
                        <div className="row sercice-details-content align-items-center">
                            <div className="col-lg-12">
                                <div className="thumb position-relative">
                                    <img className="w-100" src="/assets/images/projects/trenazher-systems/trenazher-big-01.jpg" alt="Тренажерные системы" />
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='yJWz-ADk37Y' onClose={() => this.setState({ isOpen: false })} />
                                    <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* End Video Area  */}

                {/* Start About Area  */}
                {/* <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/projects/viexpo/ind-viexpo.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">О платформе</h2>
                                        <p>ViExpo предоставляет компаниям возможность проводить мероприятия в виртуальном пространстве.</p>
                                        <p>Платформа позволяет проводить выставки, конференции, корпоративы, викторины, ярмарки, онлайн-экскурсии, показы строительных проектов, осмотры прототипов и другие мероприятия, проходящие в режиме реального времени.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End About Area  */}

                {/* Start About Area  */}
                {/* <div className="rn-about-area ptb--120 bg_image bg_image--40">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/projects/viexpo/about-viexpo.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 order-2 order-lg-1">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Особенности</h2>
                                        <strong><p>Индивидуальность</p></strong>
                                        <p>Размеры и интерьер помещений платформы настраиваются под требования и фирменный стиль заказчика.</p>

                                        <strong><p>Кроссплатформенность</p></strong>
                                        <p>Платформа доступна в двух исполнениях:</p>
                                        <ul className="list-style--1">
                                            <li><FiCheck />приложение для Windows и MacOS</li>
                                            <li><FiCheck />web-версия с поддержкой современных браузеров</li>
                                        </ul>
                                        <strong><p>Живое общение</p></strong>
                                        <p>Платформа позволяет общаться в голосовом и текстовом чате. Реализована возможность общаться как между всеми посетителями, так и тет-а-тет.</p>
                                        <strong><p>Доступность</p></strong>
                                        <p>Гости могут посещать мероприятие 24/7.</p>
                                    </div>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="/about">See how it works</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End About Area  */}

                {/* Start About Area  */}
                {/* <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/projects/viexpo/interface-viexpo.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Удобный интерфейс</h2>
                                        <p>Интерфейс, адаптированный для целевой аудитории, позволяет пользователю быстро освоиться в виртуальном трехмерном пространстве.</p>
                                        <p>Для перемещения по выставке используется стандартная комбинация клавиш WASD (ЦФЫВ)</p>
                                        <p>Камерой обзора можно управлять как и с помощью мыши, так и с помощью комбинации клавиш ← ↑ ↓ →</p>
                                        <p>Для взаимодействия с элементами интерфейса и интерактивным контентом выставки достаточно щелкнуть по нему левой кнопкой мыши.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End About Area  */}

                {/* Start About Area  */}
                {/* <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/projects/viexpo/about-viexpo.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 order-2 order-lg-1">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Возможности</h2>
                                        <ul className="list-style--1">
                                            <li><FiCheck />потоковое вещание на экран в сцене платформы</li>
                                            <li><FiCheck />демонстрация продукта</li>
                                            <li><FiCheck />текстовое и голосовое общение</li>
                                            <li><FiCheck />переговорные комнаты</li>
                                            <li><FiCheck />"задать вопрос"</li>
                                            <li><FiCheck />конференц-зал</li>
                                            <li><FiCheck />техническая поддержка</li>
                                            <li><FiCheck />статистика</li>
                                        </ul>
                                    </div>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="http://viexpo.ru/">Подробней на сайте</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End About Area  */}

                {/* Start About Area  */}
                {/* <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/projects/viexpo/ind-viexpo.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                    <h2 className="title">Возможности</h2>
                                        <ul className="list-style--1">
                                            <li><FiCheck />потоковое вещание на экран в сцене платформы</li>
                                            <li><FiCheck />демонстрация продукта</li>
                                            <li><FiCheck />текстовое и голосовое общение</li>
                                            <li><FiCheck />переговорные комнаты</li>
                                            <li><FiCheck />"задать вопрос"</li>
                                            <li><FiCheck />конференц-зал</li>
                                            <li><FiCheck />техническая поддержка</li>
                                            <li><FiCheck />статистика</li>
                                        </ul>
                                    </div>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="http://viexpo.ru/">Подробней на сайте</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End About Area  */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h2 className="title">Общие сведения</h2>
                                                    <p>Тренажерные системы – это программно-аппаратный комплекс, содержащий комплект учебных материалов, автоматизированную систему обучения и систему хранения и обработки данных.</p>
                                                    <p>Особенностью тренажерных систем является практическая подготовка специалистов по таким направлениям, как эксплуатация, техническое обслуживание и ремонт сложных изделий, устройств, комплексов.</p>
                                                    <h5 className="title">Тренажерные системы автоматизируют следующие процессы:</h5>
                                                    <ul className="liststyle">
                                                        <li>Обучение;</li>
                                                        <li>Подготовка учебных материалов;</li>
                                                        <li>Проверка знаний;</li>
                                                        <li>Учет успеваемости;</li>
                                                        <li>Доступ к справочным материалам о предмете обучения.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/projects/trenazher-systems/tren-img-01.png" alt="Общие сведения" />
                                                    {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/projects/trenazher-systems/tren-img-02.png" alt="Обучение" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h2 className="title">Обучение</h2>
                                                    <h5 className="title">По согласованию с заказчиком в тренажерную систему встраивают комплект учебных материалов, содержащий:</h5>
                                                    <ul className="liststyle">
                                                        <li>Лекции;</li>
                                                        <li>Документацию (презентации, руководства по эксплуатации, инструкции);</li>
                                                        <li>Интерактивные трехмерные модели, которые позволяют наглядно демонстрировать предмет обучения;</li>
                                                        <li>Интерактивные виртуальные сцены. В данных сценах могут быть исполнены специализированные миссии и практические задания;</li>
                                                        <li>Мультимедийные материалы.</li>
                                                    </ul>
                                                    <h5 className="title">При проведении обучения тренажерные системы могут работать в следующих режимах:</h5>
                                                    <ul className="liststyle">
                                                        <li>Самостоятельная подготовка;</li>
                                                        <li>Демонстрация лекций;</li>
                                                        <li>Практическое занятие.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h2 className="title">Проверка знаний</h2>
                                                    <h5 className="title">Для проверки знаний используется следующие механизмы:</h5>
                                                    <ul className="liststyle">
                                                        <li>Тесты, поставляемые с удобным редактором;</li>
                                                        <li>Контрольные интерактивные виртуальные сцены, проверяющие знания обучаемых в условиях, приближенным к реальным.</li>
                                                    </ul>
                                                <p>Информация о выполненных тестах и контрольных сценах заносится в журнал.</p>
                                                <p>Преподаватель может посмотреть успеваемость обучаемых за выбранный период, выгрузить журнал в файл или распечатать.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                <AnimationLearn />
                                                    {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        {/* <div className="row sercice-details-content pb--40 align-items-top">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h2 className="title">Учет успеваемости</h2>
                                                <p>Информация о выполненных тестах и контрольных сценах заносится в журнал.</p>
                                                <p>Преподаватель может посмотреть успеваемость обучаемых за выбранный период, выгрузить журнал в файл формата «.csv» или распечатать.</p>
                                                    <div className="about-button mt--50">
                                                        <a className="rn-button-style--2 btn-solid" href="http://www.realesmedia.com/mapvis.html">Подробней на сайте</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                            <div className="details mt_md--30 mt_sm--30">
                                                <h2 className="title">Проверка знаний</h2>
                                                <p>Для проверки знаний используется следующие механизмы:</p>
                                                    <ul className="liststyle">
                                                        <li>Тесты, поставляемые с удобным редактором;</li>
                                                        <li>Контрольные интерактивные виртуальные сцены, проверяющие знания обучаемых в условиях, приближенным к реальным.</li>
                                                    </ul>
                                                    <div className="about-button mt--50">
                                                        <a className="rn-button-style--2 btn-solid" href="http://www.realesmedia.com/mapvis.html">Подробней на сайте</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <FooterTwoVoltep />

            </div>
        )
    }
}
export default MainMapvis;