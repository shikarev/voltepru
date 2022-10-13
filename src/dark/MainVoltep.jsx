import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderVoltep from "../component/header/HeaderVoltep";
import FooterVoltep from "../component/footer/FooterVoltep";
import SliderVoltep from "../component/slider/SliderVoltep";
import ServiceTwoVoltep from "../elements/service/ServiceTwoVoltep";
import AboutVoltep from "../component/HomeLayout/homeOne/AboutVoltep";
import Projects from "../component/HomeLayout/homeOne/Projects";
import BrandVoltep from "../elements/BrandVoltep";
import Helmet from "../component/common/Helmet";

class MainDemo extends Component {
    render() {
        return (
            <div className="active-dark">
                <Helmet pageTitle="Voltep" />
                <HeaderVoltep homeLink="/" logo="symbol-dark" color="color-black"/>

                {/* Start Slider Area   */}
                <div className="slider-wrapper" id="home">
                    <SliderVoltep />
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area about-position-top pb--110 pt--110 bg_color--1 " id="about">
                    <AboutVoltep />
                </div>
                {/* End About Area */}

                {/* Start Service Area  */}
                <div className="service-area ptb--80  bg_image bg_image--40" id="service">
                    <div className="container">
                        <ServiceTwoVoltep />
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1" id="projects">
                    <div className="rn-slick-dot">
                        <Projects />
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandVoltep />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <FooterVoltep />

            </div>
        )
    }
}
export default MainDemo;