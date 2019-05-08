import * as React from 'react';
import { Component } from 'react';
import { Header } from './header/Header.jsx';
import { Main } from './main/Main.jsx';


export class App extends Component {
    render() {
        return  (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}