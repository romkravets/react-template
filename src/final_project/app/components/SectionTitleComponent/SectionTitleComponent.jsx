import * as React from 'react';

import './SectionTitleComponent.scss';

export const SectionTitleComponent = (props) => {
        console.log(props);
        return  (
        <div className="container__composition">
            <div className="container__composition__description">{props.subtitle}</div>
            <div className="container__composition__title">{props.title}</div>
        </div>
    );
}