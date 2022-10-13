import React, { Component } from "react";
import {FaWhatsapp , FaTelegramPlane } from "react-icons/fa";

const SocialShare = [
    {Social: <FaWhatsapp /> , link: 'https://wa.me/79161201088/' , text: '/WHATSAPP'},
    {Social: <FaTelegramPlane /> , link: 'https://t.me/ivan_teplov', text: '/TELEGRAMM'},

]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Открыты к сотрудничеству</span>
                                        <h2>Связаться <br /> с нами</h2>
                                        <a className="rn-button-style--2" href="/contacts">
                                            <span>Контакты</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Быстрый доступ</h4>
                                                <ul className="ft-link">
                                                    <li><a href="#about">О нас</a></li>
                                                    <li><a href="#projects">Проекты</a></li>
                                                    <li><a href="/contacts">Контакты</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>На связи</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:info@voltep.ru">info@voltep.ru</a></li>
                                                    <li><a href="tel:+74991132419">+7 499 113 24 19</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        <div className="col-lg-12 pt--40"><a href="https://navigator.sk.ru/orn/1123672" target="_blank" rel="noopener noreferrer"><img width='100px' src="/assets/images/brand/sk-resident-1.png" alt="Logo Skolkovo"/></a></div>
                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright 2020 Voltep.ru — Современные IT-Решения</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;
