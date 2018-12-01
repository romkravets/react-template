import * as React from 'react';

import './TitleItemSection.scss';

export const TitleItemSection = (props) => {
        return  (
        <div className="container__composition">
            <div className="container__composition__description">{props.subtitle}</div>
            <div className="container__composition__title">{props.title}</div>
        </div>
    );
}