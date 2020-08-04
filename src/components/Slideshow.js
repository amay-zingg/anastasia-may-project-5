// * * * * ALL THE IMAGES
// import slideDragon from '../images/slides/slide-dragon.jpg';
// import thumbDragon from '../images/slides/thumb-dragon.jpg';

// import slideDogPoker from '../images/slides/slide-dog-poker.jpg';
// import thumbDogPoker from '../images/slides/thumb-dog-poker.jpg';

// import slideHeron from '../images/slides/slide-heron.jpg';
// import thumbHeron from '../images/slides/thumb-heron.jpg';



import React from 'react';
import ImageGallery from 'react-image-gallery';
import { view } from 'react-easy-state';

class Slideshow extends React.Component {

  render() {

    const images = [
    {
        original: 'https://anastasiamay.ca/assets/KAT/slide-dog-poker.jpg',
        thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-dog-poker.jpg',
    },
    {
        original: 'https://anastasiamay.ca/assets/KAT/slide-dragon.jpg',
        thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-dragon.jpg',
    },
    {
        original: 'https://anastasiamay.ca/assets/KAT/slide-heron.jpg',
        thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-heron.jpg',
    }
    ];

    return (
      <ImageGallery items={images} />
      // 'THIS IS GALLERY'
    );
  }

};

export default view(Slideshow);