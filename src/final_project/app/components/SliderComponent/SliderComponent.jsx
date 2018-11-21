import * as React from 'react';


import './SliderComponent.scss';
import { SliderElementComponent } from '../SliderElementComponent/SliderElementComponent.jsx';
import {dataKey} from '../dataKey/dataKey.jsx';


export class SliderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.nextProperty = this.nextProperty.bind(this);
        this.state = {
            properties: dataKey.properties,
            property: dataKey.properties[0]
        }
      }


    nextProperty() {
        const newIndex = this.state.property.index + 1;
        this.setState({
          property: dataKey.properties[newIndex]
        })
      }

    render() {
        const {properties, property} = this.state;
        return (
        <div className="App">

  

        <div className="page">
        <button className="section-element__btn"
         onClick={() => this.nextProperty()}
        disabled={property.index === dataKey.properties.length-1}
        >Next</button>
            <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <SliderElementComponent  key={property._id} property={property} />)
                  }
              </div>
            </div>
        </div>
      </div>
      </div>
            // <div className="slider-container">
            //     <div className="slider-container__items slider-container__items_one">
            //     <div className="slider-container__first-row">
            //         <div className="slider-container__item_first">1</div>
            //         <div className="slider-container__item_first">2</div>
            //         <div className="slider-container__item_first">3</div>
            //         <div className="slider-container__item_first">4</div>
            //         <div className="slider-container__item_first">5</div>
            //     </div>
            //     </div>
            //     <div className="slider-container__items slider-container__items_two">
            //     <div className="slider-container__second-row">
            //         <div className="slider-container__item_second">1</div>
            //         <div className="slider-container__item_second">2</div>
            //         <div className="slider-container__item_second">3</div>
            //         <div className="slider-container__item_second">4</div>
            //         <div className="slider-container__item_second">5</div>
            //     </div>
            //     </div>
            // </div>
        )
    }
}