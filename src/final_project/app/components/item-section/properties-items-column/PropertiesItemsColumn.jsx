import * as React from 'react';

import '../ItemSection.scss';
import './PropertiesItemsColumn.scss';

export const PropertiesItemsColumn = (props) => {
        return  (
            <div className="properties-container__column">
                <img className="properties-container__img" src={props.imageUrl} alt="Revo" />
                <a href="#" className="properties-container__title">{props.title}</a>
                 <p className="properties-container__subtitle">{props.subtitle}</p>
            </div>
    );
}
