import React, { useEffect } from 'react';
import './Script.js';
import './About.css';

function About () {
    const para = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.";
    const stats = [{count: 127, text: "Awards Received"}, {count: 1505, text: "Cups of Coffee"}, {count: 109, text: "Projects Completed"}, {count: 102, text: "Happy Clients"}];
    const list = stats.map((item, index) => {return (<div key={index} className="stats-block">
    <div className="count">{item.count}</div>
    <h5>{item.text}</h5>
    </div>)});
    useEffect(() => {
        let fadeAnimation = () => {
            let elements = document.querySelectorAll('.fadeUp');
            elements.forEach((item) => {
                if(item.getBoundingClientRect().top <= (window.innerHeight) && !item.classList.contains('animate'))
                {
                    item.classList.add('animate');
                    if(item.classList.contains('about-stats')){
                        var elements = document.querySelectorAll('.count');
                        elements.forEach(element => {
                            let target = parseInt(element.innerHTML);
                            let count = 0;
                            let speed = 2000/target;
                            let inc = (target > 127) ? 3 : 1;
                            let id = null;
                            let updateCount = () => {
                                if(count < target)
                                {
                                    count+=inc;
                                    element.innerHTML=count;
                                }
                                else {
                                    clearInterval(id);
                                    element.innerHTML=target;
                                }
                            }
                            id = setInterval(updateCount, speed);
                        });
                    }
                }

            })
        }
        window.addEventListener('scroll', fadeAnimation);
        window.addEventListener('load', fadeAnimation);
        return _ => {
            window.removeEventListener('scroll', fadeAnimation);
            window.addEventListener('load', fadeAnimation);
        };
    })
    return ( 
        <section className="about" id="about">
            <div className="about-header about-row fadeUp">
                <div className="about-full">
                    <h3 className="subhead-1">Hello There</h3>
                    <h1 className="subhead-2">We are Glint</h1>
                </div>
            </div>
            <div className="about-desc about-row fadeUp">
                <div className="about-full">
                    <p>
                        {para}
                    </p>
                </div>
            </div>
            <div className="about-stats about-row fadeUp">
                {list}
            </div>
            <div className="about-line"></div>
        </section>
     );
}

export default About ;