import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../assets/css/Gallery.css';

let images = [];
for (let i=1; i<=20; i++) {
	images.push( { original: require('../assets/images/gallery/'+i+'.jpg'),
				       thumbnail: require('../assets/images/gallery/'+i+'.jpg'),
				       description : 'CREATE DEPLOY DESTROY',
				       thumbnailTitle: 'image' } );
}

class Gallery extends Component {
  render() {
    return(
      <div className='Gallery'>
        <div className='contentWrap'>
          <div className='row'>
            <div className='col s12'>
              <ImageGallery items={images} showIndex={true} lazyLoad={true} slideInterval={3000} disableThumbnailScroll={false} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
