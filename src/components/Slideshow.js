import React from 'react';
import ImageGallery from 'react-image-gallery';
import { view } from 'react-easy-state';

class Slideshow extends React.Component {
	render() {
		const images = [
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-dog-poker.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-dog-poker.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-wild.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-wild.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-dragon.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-dragon.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-heron.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-heron.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-3ninjas.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-3ninjas.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-bike.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-bike.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-gadget.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-gadget.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-grom.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-grom.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-hostel.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-hostel.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-embassy.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-embassy.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-mona-lisa.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-mona-lisa.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-devil.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-devil.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-baboon.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-baboon.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-raptor.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-raptor.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-lemur.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-lemur.jpg'
			},
			{
				original: 'https://anastasiamay.ca/assets/KAT/slide-afford.jpg',
				thumbnail: 'https://anastasiamay.ca/assets/KAT/thumb-afford.jpg'
			}
		];

		return (
			<div className="slideshow-wrapper">
				<ImageGallery items={images} />
			</div>
		);
	}
}

export default view(Slideshow);
