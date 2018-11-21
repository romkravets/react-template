import * as React from 'react';

import { ShoppingTitleComponent } from '../ShoppingTitleComponent/ShoppingTitleComponent.jsx';
import { SliderComponent } from '../SliderComponent/SliderComponent.jsx';

import './ShoppingSectionComponent.scss';

export const ShoppingSectionComponent = () => {
      return (
        <div className="shop-section-first-container">
            <div className="shop-section-first-container__center">
            <ShoppingTitleComponent
                    subtitle = "Choose Your Favorite" 
                    title ="CHUẨN GU ĐÚNG VỊ"/>
            <SliderComponent />
            </div>
            <div className="shop-section-first-container__right">
            </div>
      </div>
    );
}