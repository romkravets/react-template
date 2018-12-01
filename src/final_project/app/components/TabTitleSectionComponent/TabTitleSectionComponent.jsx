import * as React from 'react';

import './TabTitleSectionComponent.scss';

export const TabTitleSectionComponent = (props) => {
        console.log(props);
        return  (
        <div className="tab-container__composition">
            <div className="tab-container__composition__description">{props.subtitle}</div>
            <div className="tab-container__composition__title">{props.title}</div>
        </div>
    );
}