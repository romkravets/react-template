import * as React from 'react';

import './Title.scss';

export const Title = (props) => {
        return  (
        <div className="shopping-container__composition">
            <div className="shopping-container__composition__description">{props.subtitle}</div>
            <div className="shopping-container__composition__title">{props.title}</div>
        </div>
    );
}