import * as React from 'react';

import '../HeaderSection.scss';

export const Logo = () => {
        return  (
        <div className="header-container__logo">
                <a href=""><img className="header-container__logo_img"
                src={require("../../../../../../assets/images/img/header/revo_logo-compressor.png")}
                alt="Revo"/>
                </a>
        </div>
    );
}