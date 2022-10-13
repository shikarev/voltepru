import React, { Component } from "react";
import Slider from "react-slick";
import { slickDot } from "../../../page-demo/script";


const list = [
    {
        image: 'image-1',
        category: 'Интерактивная платформа',
        title: 'ViExpo',
        link: '/viexpo'
    },
    {
        image: 'image-2',
        category: 'Интерактивная платформа',
        title: 'MapVis',
        link: '/mapvis'
    },
    {
        image: 'image-3',
        category: 'Программно-аппаратные комплексы',
        title: 'Тренажерные системы',
        link: '/trenazhernie-sistemy'
    }
    // {
    //     image: 'image-4',
    //     category: 'Игра',
    //     title: 'Deliver the Future',
    //     link: '/deliver-the-future'
    // },
    // {
    //     image: 'image-4',
    //     category: '3 моделирование',
    //     title: '3D Площадка',
    //     link: '/portfolio-details33'
    // },
    // {
    //     image: 'image-4',
    //     category: 'VR сцена',
    //     title: 'Клавесин',
    //     link: '/portfolio-details34'
    // },
    // {
    //     image: 'image-4',
    //     category: 'VR Игра',
    //     title: 'All New VR Show',
    //     link: '/portfolio-details32'
    // }
]

class Projects extends Component{
    render(){
        let title = 'Проекты';
        // description = 'Текущие и завершенные проекты компании.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    {/* <p>{description}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="slick-space-gutter--15 slickdot--20">
                                            <Slider {...slickDot}>
                                                {list.map((value , index) => (
                                                    <div className="portfolio" key={index}>
                                                        {/* <a href={`${value.link}`}> */}
                                                            <div className="thumbnail-inner">
                                                                <div className={`thumbnail ${value.image}`}></div>
                                                                <div className={`bg-blr-image ${value.image}`}></div>
                                                            </div>
                                                        {/* </a> */}
                                                        <div className="content">
                                                            <div className="inner">
                                                                <p>{value.category}</p>
                                                                <h4><a href={`${value.link}`}>{value.title}</a></h4>
                                                                <div className="portfolio-button">
                                                                    <a className="rn-btn" href={`${value.link}`}>К проекту</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Projects;