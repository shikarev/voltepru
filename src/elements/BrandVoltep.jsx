import React, { Component } from "react";

class BrandVoltep extends Component{
    render(){
        let title = 'Партнеры';
        return(
            <React.Fragment>
            <div className="portfolio-wrapper">
                <div className="container">
                        <div className="row">
                                <div className="section-title pb--30">
                                    <h2>{title}</h2>
                                    {/* <p>{description}</p> */}
                                </div>
                        </div>
                </div>

                <ul className="brand-style-2">
                    <li>
                        <a href="https://sk.ru/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/brand/sk-resident.png" alt="Logo Skolkovo"/></a>
                    </li>
                    <li>
                        <a href="http://realesmedia.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/brand/realesmedia-logo.png" alt="Logo RealEsMedia"/></a>
                    </li>
                    <li>
                        <a href="https://rosatom.ru/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/brand/rosatom-logo.png" alt="Logo RosAtom"/></a>
                    </li>
                    <li>
                        <a href="https://www.rzd.ru/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/brand/rzd-logo.png" alt="Logo Rzd"/></a>
                    </li>
                </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default BrandVoltep;