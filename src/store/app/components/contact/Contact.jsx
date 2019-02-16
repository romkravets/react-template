import * as React from 'react';

export class Contact extends React.Component {
  componentWillMount() {
    document.body.classList.add('page-contact');
  }
  
  componentWillUnmount() {
    document.body.classList.remove('page-contact');
  }
    render() {
        return  (
            <div className='container'>
            <div className='row'>
              <div className='col-md-8 push-md-2 col-lg-6 push-lg-3'>
                <h1>Let's get in touch!</h1>
                
                <form formAction='' className='card-form'>
                  <div className='row form-group'>
                    <div className='col-6'>
                      <input className='form-control' name='formName' id='formName' type='text' placeholder='Your name' />
                    </div>
    
                    <div className='col-6'>
                      <input className='form-control' name='formEmail' id='formEmail' type='email' placeholder='Your email address' />
                    </div>
                  </div>
    
                  <fieldset className='form-group'>
                    <textarea className='form-control' name='formMessage' id='formMessage' placeholder='Your message' required ></textarea>
                  </fieldset>
    
                  <fieldset className='form-group text-center'>
                    <button className='btn btn-primary' type='submit'>Send message</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          );
      }
}