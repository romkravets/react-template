import React from 'react';
import PropTypes from 'prop-types';

import '../SliderComponent/SliderComponent.scss';

 export const SliderElementComponent = ({property}) => {
    const {index, picture, city, title, link, price, subtitle} = property;
    console.log(property);
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="description">
            <div className="details ">
                <span className="price">{price}</span>
                <div className="title-box">
                    <h4 className="title-box__h4">{title}</h4>
                    <br />
                    <p>{subtitle}</p>
                </div>
                <ul className="features">
                    <button  type="submit" className="btn">MUA NGAY</button>
                    <li className="icon-car">{link}</li>
                </ul>
            </div>
            </div>
        </div>
        

        // src="https://i.postimg.cc/LXG8NSkg/slider-element-1.png"
        // <div id={`card-${index}`} className="card">
        //     <img src={picture} alt={city} />
        //     <div className="details">
        //         <span className="index">{index+1}</span>
        //         <p className="location">
        //             {city}<br />
        //             {address}
        //         </p>
        //         <ul className="features">
        //             <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
        //             <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
        //             <li className="icon-car">{carSpaces} <span>parking spots</span></li>
        //         </ul>
        //     </div>
        // </div>



        // export const SliderElementComponent = ({property}) => {
        //     const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
        //     return (
        //         <div className="element-slider__container" id={`card-${index}`}>
        //             <img src={picture} alt={city} />
                    // <div className="element-slider__container__details">
                    //     <span className="element-slider__container__index">{index+1}</span>
                    //     <h4 className="element-slider__container__location">
                    //     Title {city} {address}
                    //     </h4>
                    //     <p>decsriptions</p>
                    //     <div className="element-slider__container__features">
                    //         <button className="element-slider__container__features_btn">{bedrooms}</button>
                    //         <a className="element-slider__container__features_link">CHI TIẾT  {bathrooms}</a>
                    //     </div>
                    // </div>
        //         </div>
    )
}

SliderElementComponent.propTypes = {
    property: PropTypes.object.isRequired
}

