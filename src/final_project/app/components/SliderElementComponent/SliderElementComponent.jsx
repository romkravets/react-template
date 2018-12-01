import React from 'react';
//import PropTypes from 'prop-types';


import { ButtonComponent } from '../ButtonComponent/ButtonComponent.jsx';
import '../SliderComponent/SliderComponent.scss';

export const SliderElementComponent = ({property}) => {
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
                    <ButtonComponent className="cards__link" style={styles}/>
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
                    <ButtonComponent className="cards__link" style={styles}/>
                    <li className="cards__link cards__helper"><a href="#">{link}</a></li>
                </ul>
            </div>
            </div>
            </div>


        </div>
       
    )
}

// SliderElementComponent.propTypes = {
//    property: PropTypes.object.isRequired
// }


