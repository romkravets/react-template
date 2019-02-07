import * as React from 'react';
import './Navigation.scss';

import { Counter } from '../counter/Counter.jsx';


export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
      this.state = {
        count: 2,
        menu: []
       
    };

    this.fetchMenus();
  }


  fetchMenus() {
    setTimeout(() => {
      this.setState((oldState) => {
        const newState = Object.assign({}, oldState);
        newState.menu = [
          {
            title: 'TRANG',
            href: 'other_react_page.html',
          },
          {
            title: 'Coffee',
            href: 'lesson_15.html',
          },
          {
            title: 'Fiftset olis',
            href: 'http://google.com',
          },
          {
            title: 'Lene he',
            href: '/lesson_14.html',
          },
          {
            title: 'Lene Uyr',
            href: 'http://google.com',
          },
          {
            title: 'Phin ma mau',
            href: 'http://google.com',
          }
        ];
        return newState;
      })
    }, 0);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const listItems = this.state.menu.map((item, i) => {
      return <li key={i} className="header-menu__item">
        <a href={item.href} className="header-menu__link">
          <span>{item.title}</span>
        </a>
      </li>
    });
    return (
     <nav className="header-menu">
        <Counter count={this.state.count} onCount={this.handleClick} />
        <ul className="header-menu__items">{listItems}</ul>
    </nav>
    );
  }
}