import React, { useState, useEffect } from 'react';
import './SkillCircs.css'

const SkillCircs = ({ percentage, animate }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (animate) {
            const interval = setInterval(() => {
                if (counter < percentage) {
                    setCounter(prevCounter => prevCounter + 1);
                } else {
                    clearInterval(interval);
                }
            }, 20);

            return () => clearInterval(interval);
        }
    }, [counter, percentage, animate]);

    return (
        <div className='circleshero'>
        <div className='skillbar'>
            <div className='skillouter'>
                <div className='skillin'>
                    <div>{counter}%</div>
                </div>
            </div>
            <svg className='scir' xmlns='http://www.w3.org/2000/svg' 
            version='1.1' width={'160px'} height={'160px'}>
                <defs>
                    <linearGradient id={`GradientColor-${percentage}`}>
                        <stop offset={'0%'} stopColor='#06f6fd' />
                        <stop offset={'100%'} stopColor='#069afd' />
                    </linearGradient>
                </defs>
                { 
                    (() => {
                        const C = 2 * Math.PI * 70;
                        const offset = C - (counter / 100) * C;
                        return (
                            <circle 
                                cx={'80'} 
                                cy={'80'} 
                                r={'70'} 
                                strokeLinecap='round' 
                                strokeDasharray={C}
                                strokeDashoffset={offset}
                                stroke={`url(#GradientColor-${percentage})`}
                                strokeWidth={'20px'}
                            />
                        )
                    })()
                }
            </svg>
        </div>
        </div>
    );
    
}
export default SkillCircs;
