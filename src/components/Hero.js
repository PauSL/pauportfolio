import React, { useState, useEffect} from 'react';
import "./Hero.css"
import pausphere3 from '../assets/img/pausphere3.png'
import pauspheremb from '../assets/img/pauspheremb.png';

export const Hero = () => {
    return (
        <>
            <section className='home'>
                <div className='hero-text'>
                <h1>Hello, <span>It's Pau!</span></h1>
                <p>I'm a <strong className='str'>front-end developer</strong>, deeply smitten by the rhythms of 
                        JavaScript and the harmonies of React. 
                        But wait, there's a twist in the tale! <br />Off the screen, 
                        I craft melodies as a Musician and drop cool songs as a 
                        music producer. When code meets chords, that's where my creativity truly soars. 
                        Looking for a developer with a beat?
                        You're in for a treat!
                </p>
                <div className='social-icons'>
                    <a href="https://github.com/PauSL" target='_blank'><i className="ri-github-fill"></i></a>
                    <a href="https://www.linkedin.com/in/pau-saezdev" target='_blank'><i className="ri-linkedin-fill"></i></a>
                    <a href="https://open.spotify.com/artist/161Wxex9nghDK9QmzKmPje?si=_OsjSbjMRYabofpxCfDyXg" target='_blank'><i className="ri-spotify-line"></i></a>
                </div>
                <a className='btnh' href="https://www.linkedin.com/in/pau-saezdev/" target='_blank'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Let's Connect!
                </a>     
                </div>
                    <img className='pau-sphere' src={pausphere3} alt="" />
                    <img className='pau-spheremb' src={pauspheremb} alt="" />
            </section>
        </>
    )
}


