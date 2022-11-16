import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
    const style_sheet = {
        backgroundImage: "url(/images/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }
    const content = [" We are a creative group ", " of people who design ", " influential brands and ", " digital experiences." ];
    return ( 
        <section id='home' className="home" style={style_sheet}>
            <div className="overlay"></div>
            <div className="shadow"></div>
            <div className="home-content">
                <div className="main-content">
                    <h3>Welcome to Glint</h3>
                    <h1>
                    {content[0]}
                    <br/>
                    {content[1]}
                    <br/>
                    {content[2]}
                    <br/>
                    {content[3]}
                    </h1>
                    <div className="content-buttons">
                        <a href="#contact" className="smoothscroll btn"> Start a Project </a>
                        <a href="#about" className="smoothscroll btn"> More About Us </a>
                    </div>
                </div>
                <div className="home-scroll">
                    <a href="#about" className="scroll-link smoothscroll">
                        <span>Scroll Down</span>
                    </a>
                </div>
                <div className="scroll-line"></div>
            </div>
            <ul className="social-list">
            <li><a href="#0"><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a></li><li> <a href="#0"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twiiter</span></a></li><li> <a href="#0"><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a></li><li> <a href="#0"><i className="fa fa-behance" aria-hidden="true"></i><span>Behance</span></a></li><li> <a href="#0"><i className="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a></li>
            </ul>
        </section>
     );
}

export default Home;