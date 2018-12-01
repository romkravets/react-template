import * as React from 'react';

import './ShoppingTitleComponent.scss';

export const ShoppingTitleComponent = (props) => {
        return  (
        <div className="shopping-container__composition">
            <div className="shopping-container__composition__description">{props.subtitle}</div>
            <div className="shopping-container__composition__title">{props.title}</div>
        </div>
    );
}