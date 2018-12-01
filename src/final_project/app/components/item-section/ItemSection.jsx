import * as React from 'react';

import { TitleItemSection } from '../title-item-section/TitleItemSection.jsx';
import { PropertiesItemSection } from './properties-item-section/PropertiesItemSection.jsx';
import './ItemSection.scss';

export const ItemSection = () => {
        return  (
        <section className="properties__section">
        <TitleItemSection
            subtitle="Your Personalized Coffee"
            title="COFFEE BUILD YOUR BASE" />
        <PropertiesItemSection />
        </section>
    );
}
