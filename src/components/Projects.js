import React from "react";
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import portfolio1 from '../assets/img/portfolio1.png';
import captport from '../assets/img/captport.jpg';
import igport from '../assets/img/igport.jpg';
import musport from '../assets/img/musport.jpg';


export const Projects = () => {
    const isMobile = () => window.innerWidth <= 767;
    const [ref, inView] = useInView( {
        threshold: isMobile() ? 0.1 : 0.2,
        triggerOnce: true,
    });


    return (
        <>
        <section ref={ref} className={`projects ${inView ? 'animate' : ''}`} id='projects' >
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>
            <div className="portfolio-container">
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={musport} alt="portfolio1" />
                    </div>
                    <h3>Music Player App</h3>
                    <div className="portfolio-cta">
                    <a href="https://github.com/PauSL/MusicPlayerApp" className="pbtn">Github</a>
                    <a href="https://novamusicplayer.netlify.app/" className="rbtn">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={igport} alt="portfolio2" />
                    </div>
                    <h3>Ignite App</h3>
                    <div className="portfolio-cta">
                    <a href="https://github.com/PauSL/IgniteApp" className="pbtn">Github</a>
                    <a href="https://igniteeapp.netlify.app/" className="rbtn">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={captport} alt="portfolio3" />
                    </div>
                    <h3>Animated Portfolio</h3>
                    <div className="portfolio-cta">
                    <a href="https://github.com/PauSL/capture-portf" className="pbtn">Github</a>
                    <a href="https://caputreproject.netlify.app/" className="rbtn">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio1} alt="" />
                    </div>
                    <h3>This is a portfolio item</h3>
                    <div className="portfolio-cta">
                    <a href="https://github.com/PauSL/capture-portf" className="pbtn">Github</a>
                    <a href="https://github.com/PauSL/capture-portf" className="rbtn">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio1} alt="" />
                    </div>
                    <h3>This is a portfolio item</h3>
                    <div className="portfolio-cta">
                    <a href="https://github.com/PauSL/capture-portf" className="pbtn">Github</a>
                    <a href="https://github.com/PauSL/capture-portf" className="rbtn">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio1} alt="" />
                    </div>
                    <h3>This is a portfolio item</h3>
                    <div className="portfolio-cta">
                    <a href="https://github.com/PauSL/capture-portf" className="gbtn">Github</a>
                    <a href="https://github.com/PauSL/capture-portf" className="dbtn">Live Demo</a>
                    </div>
                </article>
             </div>

        </section>
        
        
        
        </>
    )
}