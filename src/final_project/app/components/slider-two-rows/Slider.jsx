import * as React from 'react';


import './Slider.scss';
import { SliderElement } from './slider-element/SliderElement.jsx';
import {dataKey} from '../dataKey/dataKey.jsx';


export class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);
        this.state = {
            properties: dataKey.properties,
            property: dataKey.properties[0]
        }
      }


    nextProperty() {
        const indexElement = this.state.property.index + 1;
        this.setState({
          property: dataKey.properties[indexElement]
        })
      }

      prevProperty() {
        const indexElement = this.state.property.index-1;
        this.setState({
          property: dataKey.properties[indexElement]
        })
      }

    render() {
        const {properties, property} = this.state;
        return (
         <div className="section-cards">
        <button className="section-element__btns_prev"
        onClick={() => this.prevProperty()}
        disabled={property.index === 0}></button>
        <button className="section-element__btns"
         onClick={() => this.nextProperty()}
        disabled={property.index === dataKey.properties.length+1}
        ></button>

        <div className="pages">
        
            <div className="cols">
            <div className={`cardss-slider actives-slide-${property.index}`}>
                <div className="cardss-slider-wrapper" className="cardss-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <SliderElement
                      key={property._id} 
                      property={property} />)
                  }
              </div>
            </div>
        </div>
      </div>
      </div>
      )
  }
}