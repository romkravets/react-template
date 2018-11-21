import * as React from 'react';


import './SliderComponentTwo.scss';
import { SliderElementComponentTwo  } from '../SliderElementComponentTwo/SliderElementComponentTwo.jsx';
import {dataKeyTwo} from '../dataKeyTwo/dataKeyTwo.jsx';


export class SliderComponentTwo extends React.Component {
    constructor(props) {
        super(props);
        this.nextProperty = this.nextProperty.bind(this);
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

    render() {
        const {properties, property} = this.state;
        return (
        <div className="section-cards">

        <div className="page">
        <button className="section-element__btn"
         onClick={() => this.nextProperty()}
        disabled={property.index === dataKeyTwo.properties.length+1}
        ></button>
            <div className="col">
            <div className={`cards-slider active-slide-${property.index+1}`}>
                <div className="cards-slider-wrapper" className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <SliderElementComponentTwo  key={property._id} property={property} />)
                  }
              </div>
            </div>
        </div>
      </div>
      </div>
      )
    }
}