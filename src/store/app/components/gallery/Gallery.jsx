import * as React from 'react';

export class Gallery extends React.Component {
    componentWillMount() {
        document.body.classList.add('page-gallery');
      }
      
      componentWillUnmount() {
        document.body.classList.remove('page-gallery');
      }
    render() {
        return  (
        <div className='container'>
            <h1>Featured Projects</h1>

            <p className='mb-4 text-center'>Selection of projects finished between years 2014 — 2016.</p>

        <div className='row'>
            <div className='col-4'>
            <img src={require('../../../../../assets/images/gallery/photo_1.jpg')} />
        </div>

        <div className='col-4'>
            <img src={require('../../../../../assets/images/gallery/photo_2.jpg')} />
        </div>

        <div className='col-4'>
            <img src={require('../../../../../assets/images/gallery/photo_3.jpg')} />
        </div>
        </div>

        <div className='row'>
            <div className='col-4'>
             <img src={require('../../../../../assets/images/gallery/photo_1.jpg')} />
        </div>

        <div className='col-4'>
            <img src={require('../../../../../assets/images/gallery/photo_2.jpg')} />
        </div>

        <div className='col-4'>
            <img src={require('../../../../../assets/images/gallery/photo_3.jpg')} />
        </div>
        </div>

        <div className='row'>
         <div className='col-4'>
            <img src={require('../../../../../assets/images/gallery/photo_1.jpg')} />
        </div>

        <div className='col-4'>
             <img src={require('../../../../../assets/images/gallery/photo_2.jpg')} />
        </div>

        <div className='col-4'>
            <img src={require('../../../../../assets/images/gallery/photo_3.jpg')} />
        </div>
        </div>
        </div>
        );
    }
}