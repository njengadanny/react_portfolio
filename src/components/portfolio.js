import React, { Component } from "react";
export default class Portfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check out some of my projects.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrod-thirds cf" alt="">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <div className="columns porfolio-item">
                                            <div className="item-wrap">
                                                <a href="https://github.com/njengadanny/" target="_blank">
                                                    <img src={'${item.imgurl}'} className="item-img" alt=""/>
                                                    <div className="overlay">
                                                        <div className="porfolio-item-meta">
                                                            {/* <h5>{item.name}</h5> */}
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    
}