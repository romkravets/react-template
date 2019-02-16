import * as React from 'react';

export class About extends React.Component {
  componentWillMount() {
    document.body.classList.add('page-about');
  }
  
  componentWillUnmount() {
    document.body.classList.remove('page-about');
  }
    render() {
        return  (
            <div className='container'>
            <div className='row'>
              <div className='col-md-10 push-md-1 col-lg-8 push-lg-2'>
                <h1>About Me</h1>
                <p>I like to focus on creating unique and clean design concepts, prototypes and interactive experiences. My expertise and skills cover the whole design process, from research and to visual design and execution.</p>
                <p>I work with a wide range of clients, from startups to well-established companies. My clients are usually looking for user-centered design and product design visions to help them improve their product and grow their brand.</p>
              </div>
            </div>
          </div>
        );
    }
}