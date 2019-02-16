import * as React from 'react';
import { HashRouter as Router, Route, Link, hashHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Home} from '../home/Home.jsx';
import { About } from '../about/About.jsx';
import { Gallery } from '../gallery/Gallery.jsx';
import { Contact } from '../contact/Contact.jsx';

export class Navigation extends React.Component {
    render() {
        return  (
          
          <Router history={hashHistory}>
          <nav className='navbar-toggleable-sm'>
            <button className='navbar-toggler navbar-toggler-right'
                    type='button' data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center'
                  id='navbarNav'></div>
            <ul className='nav flex-column flex-md-row' role='nav'>
              <li className='nav-item'>
                <NavLink to="/" className='nav-link'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/about" className='nav-link' activeClassName='nav-link-active'>About</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/gallery" className='nav-link' activeClassName='nav-link-active'>Gallery</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/contact" className='nav-link' activeClassName='nav-link-active'>Contact</NavLink>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path='/contact' component={Contact} />

          </nav>
        </Router>
          );
      }
}