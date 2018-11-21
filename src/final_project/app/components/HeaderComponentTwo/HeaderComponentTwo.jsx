import * as React from 'react';

import { SliderComponentTwo } from '../SliderComponentTwo/SliderComponentTwo.jsx';
import { ShoppingTitleComponent } from '../ShoppingTitleComponent/ShoppingTitleComponent.jsx';

import './HeaderComponentTwo.scss';



export const HeaderComponentTwo = () => {
      return (
        <div className="shop-section-second-container">
           
            <div className="shop-section-second-container__center">
            <ShoppingTitleComponent
                    subtitle = "Choose Your Favorite" 
                    title ="CHUẨN GU ĐÚNG VỊ"/>
            <SliderComponentTwo />
            </div>
            <div className="shop-section-second-container__right">
            
            </div>
      </div>
    );
}
