import * as React from 'react';

import '../HeaderSection.scss';

export const TitleHeader = () => {
        return  (
        <div className="header-container__main-title">
            <h1 className="header-container__title">You
                <br/>
            <span className="header-container__title_second-style">personalized</span>
                <br/>
            <span className="header-container__title_third-style">coffee</span>
            </h1>
        </div>
    );
}