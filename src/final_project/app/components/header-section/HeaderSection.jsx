import * as React from 'react';

import { Route, Link } from "react-router-dom";
import { Navigation } from '../navigation/Navigation.jsx';
import { Logo } from './logo/Logo.jsx';
import { TitleHeader } from './title-header/TitleHeader.jsx';
import { VideoElement } from './video-element/VideoElement.jsx';

import { Coffee } from '../../pages/coffee/coffee.jsx';
import { Trang } from '../../pages/trang/Trang.jsx';


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
                    <Navigation>
                    {/* <Link to="/coffee">Coffee</Link>
                    <Link to="/trang">Home</Link> */}
                    </Navigation>

                    {/* <Route path="/coffee" exact={true} component={Coffee} />
                    <Route path="/trang" exact={true} component={Trang} /> */}
                </div>
          </header>
        );
    }
     
}
