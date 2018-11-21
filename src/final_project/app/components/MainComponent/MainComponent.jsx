import * as React from 'react';

import './MainComponent.scss';
import { SectionTitleComponent } from '../SectionTitleComponent/SectionTitleComponent.jsx';
import { PropertiesItemComponent } from '../PropertiesItemComponent/PropertiesItemComponent.jsx';


export const MainComponent = () => {
        return  (
        <section className="properties__section">
        <SectionTitleComponent
            subtitle="Your Personalized Coffee"
            title="COFFEE BUILD YOUR BASE" />
        <PropertiesItemComponent />
        </section>        
    );
}
