import * as React from 'react';
import './ButtonComponent.scss';




export const ButtonComponent = (props) => {
  return  (
  <button type="submit" className="btn-all" onClick={props.onCount}>MUA NGAY</button>
  )
}






// export const ButtonCounter = (props) => {
//   return  (
//   <div className="header-menu__cart" onClick={props.onClick}> 
//   <a  className="header-menu__cart_link" href="#">
//     <div className="header-menu__counter-wrapper">
//       <div className="header-menu__counter">{props.count}</div>
//     </div>
//   </a>
// </div>
// );
// }






// import * as React from 'react';
// import './ButtonComponent.scss';




// export const ButtonComponent = (props) => {
//   return  (
//   <button type="submit" className="btn-all" onCount={this.handleClick}>MUA NGAY</button>
//   )
// }