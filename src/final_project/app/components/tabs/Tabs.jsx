import React, { Component } from "react";

import { Button } from '../button/Button.jsx';
import "./Tabs.scss";
import './TabsComponent.scss';

export function TabPanel(props) {
  return (
      <div className="tabs-composition">
            <div className="tabs-composition__img">{props.picture}</div>
            <div className="tabs-composition__information"> 
              <div className="tabs-composition__price">{props.price}</div>
              <div className="tabs-composition__label">{props.label}</div>
              <div className="tabs-composition__text">{props.text}</div>
              <ul className="tabs-composition__box_img">
              <div></div>
              <div className="tabs-composition__pictureleft">{props.pictureleft}</div>
                <li className="tabs-composition__box-left">Loại hạt Fine <br/>Robusta Blend</li>
              <div className="tabs-composition__pictureright">{props.pictureright}</div>
                <li className="tabs-composition__box-right">Độ cao<br/>{props.mountain}</li>
              </ul>
              <ul className="tabs-composition__links">
                <Button/>
                <li className="tabs-composition__link"><a href="#">{props.component}</a></li>
              </ul>
            </div>
        </div>
  );
}

class TabsButtons extends Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(id, e) {
    this.props.onTabChange(id);
  }

  render() {
    return (
      <div className="tabs">
        {this.props.items.map((item, id) => (
          <button
            key={id}
            className="tabs__control"
            onClick={e => {
              this.handlerClick(id, e);
            }}
          >
            {item.props.title}
          </button>
        ))}
      </div>
    );
  }
}

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(selectedTabId) {
    this.setState((state, props) => {
      return {
        selectedTab: selectedTabId
      };
    });
  }

  render() {
    return (
      <div className="tabs-section-container__box">
      <div className="tabs-content">
        {this.props.children.map((item, index) => {
          const selected =
            index === this.state.selectedTab ? "tabs-content__item_active" : "";
          return (
            <div key={index} className={selected + " tabs-content__item"}>
              {item}
            </div>
          );
        })}
        </div>

        <TabsButtons
          items={this.props.children}
          onTabChange={this.handlerClick} />
      </div>
    );
  }
}
