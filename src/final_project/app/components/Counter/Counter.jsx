import * as React from 'react';
import '../TopNavComponent/TopNavComponent.scss';

export const Counter = (props) => {
        return  (
        <div className="header-menu__cart" onClick={props.onCount}> 
        <a  className="header-menu__cart_link" href="#">
          <div className="header-menu__counter-wrapper">
            <div className="header-menu__counter">{props.count}</div>
          </div>
        </a>
      </div>
    );
}
