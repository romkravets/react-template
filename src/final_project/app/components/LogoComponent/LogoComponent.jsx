import * as React from 'react';

import '../HeaderComponent/HeaderComponent.scss';

export const LogoComponent = () => {
        return  (
        <div className="header-container__logo">
                <a href=""><img className="header-container__logo_img" src={require("../../../../common/styles/img/header/revo_logo-compressor.png")} alt="Revo"/></a>
        </div>
    );
}