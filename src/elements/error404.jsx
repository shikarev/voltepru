import React, { Component } from 'react';
import HeaderVoltep2 from "../component/header/HeaderVoltep2";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import FooterTwoVoltep from "../component/footer/FooterTwoVoltep";

class error404 extends Component {
    
    render() {
        return (
            <>
                <div className="active-dark">
                <HeaderVoltep2 homeLink="/" logo="symbol-dark" color="color-black"/>
                </div>
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">404!</h1>
                                    <h3 className="sub-title">Страница не найдена</h3>
                                    <span>Страницу, которую вы искали, найти не удалось.</span>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Назад на главную</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <div className="active-dark">
                    <FooterTwoVoltep /> 
                </div>
            </>
        )
    }
}
export default error404;
