import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderVoltep2 from "../component/header/HeaderVoltep2";
import FooterTwoVoltep from "../component/footer/FooterTwoVoltep";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';

class MainViexpo extends Component {
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
                <Helmet pageTitle="Интерактивная платформа Voltep.Online" />
                <HeaderVoltep2 homeLink="/" logo="symbol-dark" color="color-black"/>

                {/* Start Video Area  */}
            <div className="bg_color--1">
                <div className="rn-team-wrapper pt--200">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <h2>Voltep.Online</h2>
                                        <p>Платформа для проведения интерактивных мероприятий</p>
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
                                    <img className="w-100" src="/assets/images/video/voltep-online-bg.png" alt="Video Voltep.Online" />
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='xdkFXK2ZIks' onClose={() => this.setState({ isOpen: false })} />
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
                                        <p>Voltep.Online предоставляет компаниям возможность проводить мероприятия в виртуальном пространстве.</p>
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
                                                    <h2 className="title">О платформе</h2>
                                                    <p>Voltep.Online предоставляет компаниям возможность проводить мероприятия в виртуальном пространстве.</p>
                                                    <p>Платформа позволяет проводить выставки, конференции, корпоративы, викторины, ярмарки, онлайн-экскурсии, показы строительных проектов, осмотры прототипов и другие мероприятия, проходящие в режиме реального времени.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="https://cdn.viexpo.ru/viexpo-webgl/media/voltep-isometric.png" alt="About Images" />
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
                                                    <img className="w-100" src="/assets/images/projects/viexpo/about-viexpo.png" alt="About Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h2 className="title">Особенности</h2>
                                                    <h5 className="title">Индивидуальность</h5>
                                                    <p>Размеры и интерьер помещений платформы настраиваются под требования и фирменный стиль заказчика.</p>
                                                    <h5 className="title">Кроссплатформенность</h5>
                                                    <p>Платформа доступна в двух исполнениях:</p>
                                                    <ul className="liststyle">
                                                        <li>приложение для Windows и MacOS</li>
                                                        <li>web-версия с поддержкой современных браузеров</li>
                                                    </ul>
                                                    <h5 className="title">Живое общение</h5>
                                                    <p>Платформа позволяет общаться в голосовом и текстовом чате. Реализована возможность общаться как между всеми посетителями, так и тет-а-тет.</p>
                                                    <h5 className="title">Доступность</h5>
                                                    <p>Гости могут посещать мероприятие 24/7.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h2 className="title">Возможности</h2>
                                                    <ul className="liststyle">
                                                        <li>потоковое вещание на экран в сцене платформы</li>
                                                        <li>демонстрация продукта</li>
                                                        <li>текстовое и голосовое общение</li>
                                                        <li>переговорные комнаты</li>
                                                        <li>"задать вопрос"</li>
                                                        <li>конференц-зал</li>
                                                        <li>техническая поддержка</li>
                                                        <li>статистика</li>
                                                    </ul>
                                                    <div className="about-button mt--50">
                                                        <a className="rn-button-style--2 btn-solid" href="https://voltep.online/">Подробней на сайте</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/projects/viexpo/features-viexpo.png" alt="About Images" />
                                                    {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button> */}
                                                </div>
                                            </div>
                                        </div>
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
export default MainViexpo;