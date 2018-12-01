import * as React from 'react';

import './TabTitle.scss';

export const TabTitle = (props) => {
        return  (
        <div className="tab-container__composition">
            <div className="tab-container__composition__description">{props.subtitle}</div>
            <div className="tab-container__composition__title">{props.title}</div>
        </div>
    );
}