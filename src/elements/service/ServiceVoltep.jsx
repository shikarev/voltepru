import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Области применения',
        description: 'Создаем решения для рынка информационных технологий, выставок, онлайн образования, профессиональной подготовки и обучения, архитектурного проектирования, VR/AR, а также игры.'
    },
    {
        icon: '02',
        title: 'Стек технологий',
        description: 'В нашем арсенале графические движки Unity и Unigine, сервисы React и WebGL. Используем собственные программные и серверные решения, базы данных, интеграции с CDN.'
    },
    {
        icon: '03',
        title: 'Возможности',
        description: 'Совместно с группой компаний RealEsMedia выполняем индивидуальные проекты, а также предлагаем комплексные решения.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;