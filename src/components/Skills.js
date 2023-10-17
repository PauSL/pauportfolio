import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import SkillCircs from './SkillCrics';

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is visible
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,  // Adjust if needed
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);


    return (
        <>
        <section className='skills-container' id='skills'>
            <div className='skills-text'>
                <h2>Skills</h2>
                <h4>My Experience</h4>
            </div>
            <div className='skillcircles' ref={skillsRef}>
            <div className='skill-item'>
                <SkillCircs percentage={85} animate={isVisible} />
                <div className='skill-title'>Html</div>
            </div>
            <div className='skill-item'>
                <SkillCircs percentage={90} animate={isVisible} />
                <div className='skill-title'>CSS</div>
            </div>
            <div className='skill-item'>
                <SkillCircs percentage={90} animate={isVisible} />
                <div className='skill-title'>JavaScript</div>
            </div>
            <div className='skill-item'>
                <SkillCircs percentage={85} animate={isVisible} />
                <div className='skill-title'>React</div>
            </div>
            <div className='skill-item'>
                <SkillCircs percentage={80} animate={isVisible} />
                <div className='skill-title'>Wordpress</div>
            </div>
            <div className='skill-item'>
                <SkillCircs percentage={95} animate={isVisible} />
                <div className='skill-title'>SEO</div>
            </div>
            </div>
        </section>     
        </>
    )
};
