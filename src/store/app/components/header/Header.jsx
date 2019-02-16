import * as React from 'react';
import { HashRouter as Router, Route, Link, hashHistory } from "react-router-dom";


export class Header extends React.Component {
    render() {
        return  (
          <header>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
              </ul>
            </nav>
        </header>
          );
      }
}