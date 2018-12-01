import * as React from 'react';

import { Title } from '../title-element/Title.jsx';
import { Slider } from '../slider-two-rows/Slider.jsx';

import './ShoppingSection.scss';

export const ShoppingSection = () => {
      return (
        <div className="shop-section-first-container">
            <div className="shop-section-first-container__center">
            <Title
                    subtitle = "Choose Your Favorite" 
                    title ="CHUẨN GU ĐÚNG VỊ"/>
            <Slider />
            </div>
            <div className="shop-section-first-container__right">
            </div>
      </div>
    );
}