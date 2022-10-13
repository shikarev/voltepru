import React, { Component } from "react";
import AnimationAbout from "../../../elements/AnimationAbout";

class AboutVoltep extends Component{
    render() {
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                    <AnimationAbout />
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">О нас</h2>
                                        <p className="description">В VOLTEP мы создаем цифровые решения в области профессионального обучения, градостроения, выставок и в сфере онлайн-образования.</p>
                                        <p className="description">Наши проекты реализованы на собственных программных решениях с использованием графических движков Unity и Unigine.</p>
                                        <p className="description">Предоставляем полный цикл разработки IT проектов от стадии согласования требований до внедрения в эксплуатацию.</p>
                                        <p className="description">Легко адаптируемся под особенности проектов и применяем для их реализации как и классический waterfall, так и agile методологии: Scrum и Kanban.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutVoltep;