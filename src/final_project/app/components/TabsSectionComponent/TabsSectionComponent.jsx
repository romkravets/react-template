import * as React from 'react';

import { TabTitleSectionComponent } from '../TabTitleSectionComponent/TabTitleSectionComponent.jsx';
import { TabsComponent } from '../TabsComponent/TabsComponent.jsx';
import { TabApp } from '../TabApp/TabApp.jsx';
import './TabsSectionComponent.scss';


export const TabsSectionComponent = () => {
      return (
        <div className="tabs-section-container">
           
            <div className="tabs-section-container__center">
            <TabTitleSectionComponent
                    subtitle = "Best Gift For Best Friend" 
                    title ="GIFTSET"/>
                    
            </div>
            <div className="tabs-section-container__right">
            {/* <TabsComponent /> */}
            <TabApp />
            </div>
      </div>
    );
}