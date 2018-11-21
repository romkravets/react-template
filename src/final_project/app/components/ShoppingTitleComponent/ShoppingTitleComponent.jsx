import * as React from 'react';

import './ShoppingTitleComponent.scss';

export const ShoppingTitleComponent = (props) => {
        console.log(props);
        return  (
        <div className="container__composition">
            <div className="container__composition__description">{props.subtitle}</div>
            <div className="container__composition__title">{props.title}</div>
        </div>
    );
}