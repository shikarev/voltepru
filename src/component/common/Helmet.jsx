import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Современные IT-Решения </title>
                    <meta name="description" content="Разработка инновационных программных продуктов в сфере обучения и подготовки специалистов на базе тренажеров, а также в сфере визуализации и презентации продукции наших заказчиков с использованием самых новейших средств в области информационных технологий." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
