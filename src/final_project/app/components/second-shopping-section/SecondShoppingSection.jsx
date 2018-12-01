import * as React from 'react';

import { SliderOneRow } from '../slider-one-row/SliderOneRow.jsx';
import { Title } from '../title-element/Title.jsx';

import './SecondShoppingSection.scss';

export const SecondShoppingSection = () => {
      return (
        <div className="shop-section-second-container">
            <div className="shop-section-second-container__center">
            <Title
                    subtitle = "Choose Your Favorite" 
                    title ="CHUẨN GU ĐÚNG VỊ"/>
            <SliderOneRow />
            </div>
            <div className="shop-section-second-container__right">
            </div>
      </div>
    );
}
