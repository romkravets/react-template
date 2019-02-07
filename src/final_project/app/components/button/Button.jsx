import * as React from 'react';
import './Button.scss';




export class Button extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return  (
      <button  href = "#" type="submit" className="btn-all">MUA NGAY</button>
      )
  }
}
