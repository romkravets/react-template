import * as React from 'react';

import { SliderElementCard  } from './slider-element-card/SliderElementCard.jsx';
import {dataKeyTwo} from '../dataKeyTwo/dataKeyTwo.jsx';

import './SliderOneRow.scss';

export class SliderOneRow extends React.Component {
    constructor(props) {
        super(props);
        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);
        this.state = {
            properties: dataKeyTwo.properties,
            property: dataKeyTwo.properties[0]
        }
      }
    nextProperty() {
        const indexElement = this.state.property.index + 1;
        this.setState({
          property: dataKeyTwo.properties[indexElement]
        })
      }
      prevProperty() {
        const indexElement = this.state.property.index-1;
        this.setState({
          property: dataKeyTwo.properties[indexElement]
        })
      }
    render() {
        const {properties, property} = this.state;
        return (
        <div className="section-cards">
        <button className="section-element__btn_prev"
        onClick={() => this.prevProperty()}
        disabled={property.index === 0}>
        </button>

        <button className="section-element__btn"
         onClick={() => this.nextProperty()}
        disabled={property.index === dataKeyTwo.properties.length+1}
        ></button>
        <div className="page">
       
            <div className="col">
            <div className={`cards-slider active-slide-${property.index+1}`}>
                <div className="cards-slider-wrapper" className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <SliderElementCard  key={property._id} property={property} />)
                  }
              </div>
            </div>
        </div>
      </div>
      </div>
      )
    }
}