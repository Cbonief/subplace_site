import {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/css';

const slider_data = [
    'slider_placeholder.jpg',
    'slider_placeholder2.jpg',
    'slider_placeholder3.jpg',
    'slider_placeholder4.jpg',
]


export default function ImageSlider(props){
    const [option, setOption] = useState('0');

    function set(value){
        console.log(value);
        setOption(value);
    }

    return(
        <>
            <div className="swiper-container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {slider_data.map((image, key) => (
                        <SwiperSlide key={key}>
                            <img src={image} alt={`slide-${key}`} className="test"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
        // <div className="slider">
        //     <div className="navigation-manual">
        //         <label className="slider-btn-container">
        //             <input type="radio" value={'0'} checked={option === '0'} onChange={(e)=>{set(e.target.value)}}/>
        //             <span className="slider-btn-checkmark"></span>
        //         </label>
        //         <label className="slider-btn-container">
        //             <input type="radio" value={'1'} checked={option ==='1'} onChange={(e)=>{set(e.target.value)}}/>
        //             <span className="slider-btn-checkmark"></span>
        //         </label>
        //         <label className="slider-btn-container">
        //             <input type="radio" value={'2'} checked={option === '2'} onChange={(e)=>{set(e.target.value)}}/>
        //             <span className="slider-btn-checkmark"></span>
        //         </label>
        //         <label className="slider-btn-container">
        //             <input type="radio" value={'3'} checked={option === '3'} onChange={(e)=>{set(e.target.value)}}/>
        //             <span className="slider-btn-checkmark"></span>
        //         </label>
        //     </div>
        //     <div className="slides">
        //         <div className="slide first">
        //             <img src="slider_placeholder.jpg" alt=""/>
        //         </div>
        //         <div className="slide">
        //             <img src="slider_placeholder2.jpg" alt=""/>
        //         </div>
        //         <div className="slide">
        //             <img src="slider_placeholder3.jpg" alt=""/>
        //         </div>
        //         <div className="slide">
        //             <img src="slider_placeholder4.jpg" alt=""/>
        //         </div>

        //         <div className="navigation-auto">
        //             <div className="auto-btn1"/>
        //             <div className="auto-btn2"/>
        //             <div className="auto-btn3"/>
        //             <div className="auto-btn4"/>
        //         </div>

        //     </div>
        // </div>
    );
}