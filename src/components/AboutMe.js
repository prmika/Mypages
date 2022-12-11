import React, { useState } from 'react';
import './AboutMe.css'
//  import img1 from './IMG_8897.png';

function AboutMe() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);

    
    return (
        <>
            <div className='AboutMe'>
                <div className='AboutMe-image'>
                <img src="./logo512.png" alt=""/>
                </div>
                <div className='AboutMe-text'>
                   <h1>In this section tell something about youssssssssssssssssssssssssssssssssssssssssss</h1> 
                   <p>
                    plaplaplaplaplaplaplaplplaplaplaplaplaplapla
                   </p>
                </div>






            </div>
        </>
    )
}

export default AboutMe