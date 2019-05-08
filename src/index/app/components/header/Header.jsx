import * as React from 'react';
import { HashRouter as Router, Route, Link, hashHistory } from "react-router-dom";

import './Header.scss';

export class Header extends React.Component {
   constructor() {
      super();
      this.state = {
         isOpened: false,
      }
      this.menu = [
         {
            title: 'Mac',
            to: "/"
         },
         {
           title: 'iPhone',
           to: "/roster"
        },
        {
           title: 'Watch',
           to: "/schedule"
        },
        {
           title: 'Music',
           to: "/roster"
        },
        {
           title: 'OSX',
           to: "/contactus"
        }

      ];

   }

    render() {
         let classNames = "global-nav global-nav_darken ";
         if(this.state.isOpened) {
            classNames += 'global-nav_opened';
         }

         const listItems = this.menu.map((item) => {
             return <li class="global-nav__item">
             <Link to={item.to} class="global-nav__link">
               { item.title }
             </Link>
           </li>
          });

        return  ( <header className="header">
         <nav className={classNames}>
            <div className="global-nav__mobile-controls">
            <div className="global-nav__burger burger">
               <span className="burger__raw"></span>
               <span className="burger__raw"></span>
            </div>
            <div className="logo">
               <img src={require("../../../../../assets/images/apple_image.svg")} alt=""/>
            </div>
            <div className="global-nav__cart">
               <img src={require("../../../../../assets/images/cart_image.svg")} alt="" />
            </div>
            </div>
            <ul className="global-nav__menu">{ listItems }</ul>
         </nav>
      </header>
          );
      }
}