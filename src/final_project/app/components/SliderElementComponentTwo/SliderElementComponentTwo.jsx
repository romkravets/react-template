import React from 'react';
import PropTypes from 'prop-types';

import '../SliderComponentTwo/SliderComponentTwo.scss';
import {ButtonComponent} from "../ButtonComponent/ButtonComponent.jsx";


 export const SliderElementComponentTwo = ({property}) => {
    const {index, picture, title, link, price, subtitle, old_price} = property;
    let styles = {
      paddingLeft: '24px',
      marginRight: '10px',
      display: 'inline-block'
    }
    return (
        <div id={`card-${index}`} className="card">
            <img className="card__img" src={picture} />
            <div className="card__description">
            <div className="card__details ">
                <ul className="card__prices">
                    <li className="card__price">{price}</li>
                    <li className="card__old-price">{old_price}</li>
                </ul>
                <div className="card__title-box">
                    <h4 className="card__title">{title}</h4>
                    <br />
                    <p className="card__subtitle">{subtitle}</p>
                </div>
                <ul className="card__features">
                    <ButtonComponent className="card__link" style={styles}/>
                    <li className="card__link card__helper"><a href="#">{link}</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

SliderElementComponentTwo.propTypes = {
    property: PropTypes.object.isRequired
}

