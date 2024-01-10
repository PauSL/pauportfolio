import React from "react";
import './About.css';
import pauabout2 from '../assets/img/pauabout2.png';
import PauResume from '../assets/PauResume.pdf';

const About = () => {

    const handleDownloadCv = () => {
        const link = document.createElement('a');
        link.href = PauResume;
        link.download = 'Pau_Resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <section className="about-section" id='about'>
            <div className="timabout">
                <h2 className="about__title">About <span>Me</span></h2>
                <img src={pauabout2} alt="pausphere2" className="about-image" />
            </div>
            <div className="about__container grid">
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about-desc">
                        Hey there! I'm Pau, a front-end junior engineer with a deep crush on React. 
                        When I'm not coding up vibrant user interfaces, you'll find me 
                        striking chords and crafting melodies. 
                        Merging harmonies in both music and web design, 
                        I'm your go-to maestro for creative digital solutions. 
                        Let's make some sweet digital symphonies together! 
                        </p>
                        <button 
                        onClick={handleDownloadCv}
                        className='btnnav2' 
                        style={{ "--clr": "#06f6fd" }}

                        
                        ><span>Download CV</span><i></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About