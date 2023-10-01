import React from "react";
import {Carousel} from 'antd';
import "react-multi-carousel/lib/styles.css";
import IMG1 from './img/1. business-business-deal.svg'
import IMG2 from './img/3. development-coding.png'
import IMG3 from './img/8. work-overworked-employee.png'
import IMG4 from './img/9. work-video-conference.png'


const contentStyle = {
    height: '160px',


    textAlign: 'center',
};

export const Slider = () => (
    <Carousel autoplay>
        <div style={ contentStyle}><img src={IMG1} alt="picture"/></div>
        <div style={ contentStyle}><img src={IMG2} alt="picture"/></div>
        <div style={ contentStyle}><img src={IMG3} alt="picture"/></div>
        <div style={ contentStyle}><img src={IMG4} alt="picture"/></div>
    </Carousel>

);




