import * as React from 'react';


export class NotFound extends React.Component {
  componentWillMount() {
    document.body.classList.add('page-not-found');
  }
  
  componentWillUnmount() {
    document.body.classList.remove('page-not-found');
  }
    render() {
        return  (
<div className='container'>
        <div className='row'>
          <div className='col-md-10 push-md-1 col-lg-8 push-lg-2 text-center'>
            <h1 className='mt-4 mb-4'>404!</h1>
            
            <h2>The page you are looking for doesn't exist.</h2>
          </div>
        </div>
      </div>
          );
      }
}