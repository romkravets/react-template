import * as React from 'react';

import { Navigation } from '../navigation/Navigation.jsx';
import { Logo } from './logo/Logo.jsx';
import { TitleHeader } from './title-header/TitleHeader.jsx';
import { VideoElement } from './video-element/VideoElement.jsx';
import './HeaderSection.scss';

export class HeaderSection extends React.Component {
    render() {
        return (
            <header className="header-container">
                <div className="header-container__left">
                    <div className="header-container__composition">
                        <Logo />
                        <TitleHeader />
                    </div>
                </div>
                <VideoElement />
                <div className="header-container__right">
                    <Navigation />
                </div>
          </header>
        );
    }
     
}
