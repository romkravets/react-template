import * as React from 'react';

import { TabTitle } from './tab-title/TabTitle.jsx';
import { TabApp } from '../tabs/TabApp.jsx';
import './TabsSection.scss';

export const TabsSection = () => {
      return (
        <div className="tabs-section-container">
            <div className="tabs-section-container__center">
                <TabTitle
                    subtitle = "Best Gift For Best Friend" 
                    title ="GIFTSET"/>
            </div>
            <div className="tabs-section-container__right">
                <TabApp />
            </div>
      </div>
    );
}