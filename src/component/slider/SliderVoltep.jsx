import React, { Component } from "react";
import ServiceVoltep from "../../elements/service/ServiceVoltep";
import Particles from 'react-particles-js';

class SliderVoltep extends Component {
    render() {
        return (
            <div className="slider-activation slider-creative-agency with-particles">
                {/* Start Slider Area   */}
                    <div className="frame-layout__particles">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 50
                                    },
                                    "size": {
                                        "value": 4
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                        <div className="bg_image bg_image--40">
                            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center" data-black-overlay="6">
                                <div className="container position-relative">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner">
                                                <h1 className="title theme-gradient">Современные <br /> IT-Решения </h1>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Service Area */}
                                    <div className="service-wrapper service-white">
                                        <ServiceVoltep />
                                    </div>
                                    {/* End Service Area */}
                                
                                </div>
                            </div>
                        </div>
                {/* End Slider Area   */}
            </div>
            
        );
    }
}
export default SliderVoltep;