import React from "react";
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import portfolio1 from '../assets/img/portfolio1.png';
import captport from '../assets/img/captport.jpg';
import igport from '../assets/img/igport.jpg';
import musport from '../assets/img/musport.jpg';
import novaex from '../assets/img/novaex.jpg';
import redditcl from '../assets/img/redditcl.jpg';
import igenes from '../assets/img/igenes.jpg'


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
                        <img src={novaex} alt="" />
                    </div>
                    <h3>Mr.Nova Band Website</h3>
                    <div className="portfolio-cta">
                    <a href="" className="pbtn">Github</a>
                    <a href="https://www.mrnovaoficial.com/" className="rbtn">Live Website</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={redditcl} alt="" />
                    </div>
                    <h3>Reddit Clone</h3>
                    <div className="portfolio-cta">
                    <a href="https://github.com/PauSL/redditClone" className="pbtn">Github</a>
                    <a href="https://reddit-clone-three-inky.vercel.app/" className="rbtn">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={igenes} alt="" />
                    </div>
                    <h3>Igenesport Website (Wordpress)</h3>
                    <div className="portfolio-cta">
                    <a href="https://igenesport.com/" className="dbtn">Live Web</a>
                    </div>
                </article>
             </div>

        </section>
        
        
        
        </>
    )
}