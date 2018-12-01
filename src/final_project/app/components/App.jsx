import * as React from 'react';
import { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import { HeaderSection } from './header-section/HeaderSection.jsx';
import { ItemSection } from './item-section/ItemSection.jsx';
import { ShoppingSection } from './shopping-section/ShoppingSection.jsx';
import { TabsSection } from './tabs-section/TabsSection.jsx';
import { SecondShoppingSection } from './second-shopping-section/SecondShoppingSection.jsx';
import { Footer } from '../../../common/Footer/Footer.jsx';

import './App.scss';


export class App extends Component {
    render() {
        return  (
            <Router>
                <div className="page-container">
                    <HeaderSection />
                    <ItemSection />
                    <ShoppingSection />
                    <TabsSection />
                    <SecondShoppingSection />
                    <Footer />
                </div>
            </Router>
        );
    }
}