import * as React from 'react';

import { TopNavComponent } from '../TopNavComponent/TopNavComponent.jsx';
import { LogoComponent } from '../LogoComponent/LogoComponent.jsx';
import { TitleComponent } from '../TitleComponent/TitleComponent.jsx';
import { VideoComponent } from '../VideoComponent/VideoComponent.jsx';


import './HeaderComponent.scss';



export const HeaderComponent = () => {
      return (
        <header className="header-container">
            <div className="header-container__left">
                <div className="header-container__composition">
                    <LogoComponent />
                    <TitleComponent />
                </div>
            </div>
            <VideoComponent />
            <div className="header-container__right">
                <TopNavComponent />
            </div>
      </header>
    );
}
