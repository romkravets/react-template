import * as React from 'react';
import { Component } from 'react';
import { Home } from './home/Home.jsx';
import { About } from './about/About.jsx';
import { Navigation } from './navigation/Navigation.jsx';
import { Gallery } from './gallery/Gallery.jsx';

export class App extends Component {
    render() {
        return  (
            <div>
            <Navigation />
                <div>
                {this.props.children}
                </div>
            </div>

        );
    }
}