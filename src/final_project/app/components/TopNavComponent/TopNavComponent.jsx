import * as React from 'react';
import './TopNavComponent.scss';

import { Counter } from '../Counter/Counter.jsx';


export class TopNavComponent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
      this.state = {
        count: 0
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }


  render() {
    return (
     <nav className="header-menu">
        <Counter count={this.state.count} onCount={this.handleClick} />
        <ul className="header-menu__items">
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">TRANG</a></li>
          <li className="header-menu__item">
          <a className="header-menu__link" href="#">Coffee</a></li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Fiftset olis</a></li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Lene he</a></li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Lene Uyr</a></li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Phin ma mau</a></li>
        </ul>
    </nav> 
    );
  }
}