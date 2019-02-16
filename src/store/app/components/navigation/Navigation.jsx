import * as React from 'react';
import { HashRouter as Router, Route, Link, hashHistory } from "react-router-dom";
import { Home} from '../home/Home.jsx';
import { About } from '../about/About.jsx';
import { Gallery } from '../gallery/Gallery.jsx';
import { Contact } from '../contact/Contact.jsx';

export class Navigation extends React.Component {
    render() {
        return  (
          <Router history={hashHistory}>
          <nav className='navbar-toggleable-sm '>
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
            <ul className='nav flex-column flex-md-row navbar-fixed-top navbar-custom' role='nav'>
              <li className='nav-item'>
                <Link to="/" className='nav-link' activeClassName='nav-link-active'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/about" className='nav-link' activeClassName='nav-link-active'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to="/gallery" className='nav-link' activeClassName='nav-link-active'>Gallery</Link>
              </li>
              <li className='nav-item'>
                <Link to="/contact" className='nav-link' activeClassName='nav-link-active'>Contact</Link>
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