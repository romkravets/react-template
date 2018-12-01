import React from 'react';

import '../Slider.scss';
import { Button } from '../../button/Button.jsx';


export const SliderElement = ({property}) => {
    const {index, picture, title, link, price, subtitle} = property;
    let styles = {
      paddingLeft: '24px',
      marginRight: '10px',
      display: 'inline-block'
    }
    return (
        <div>
             <div id={`cards-${index}`} className="cards">
            <img className="cards__img" src={picture} />
            <div className="cards__description">
            <div className="cards__details ">
                <ul className="cards__prices">
                    <li className="cards__price">{price}</li>
                </ul>
                <div className="cards__title-box">
                    <h4 className="cards__title">{title}</h4>
                    <br />
                    <p className="cards__subtitle">{subtitle}</p>
                </div>
                <ul className="cards__features">
                    <Button className="cards__link" style={styles}/>
                    <li className="cards__link cards__helper"><a href="#">{link}</a></li>
                </ul>
            </div>
            </div>
            </div>

            <div id={`cards-${index}`} className="cards">
            <img className="cards__img" src={picture} />
            <div className="cards__description">
            <div className="cards__details ">
                <ul className="cards__prices">
                    <li className="cards__price">{price}</li>
                </ul>
                <div className="cards__title-box">
                    <h4 className="cards__title">{title}</h4>
                    <br />
                    <p className="cards__subtitle">{subtitle}</p>
                </div>
                <ul className="cards__features">
                    <Button className="cards__link" style={styles}/>
                    <li className="cards__link cards__helper"><a href="#">{link}</a></li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    )
}

