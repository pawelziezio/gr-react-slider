import React from 'react';
import './Carousel1.css';


class CarouselLeftArrow extends React.Component {
	render() {
		return (
			<button
				className="carousel__arrow carousel__arrow--left"
				onClick={this.props.onClick}
			>
				<span className="fa fa-2x fa-angle-left" ></span>
			</button>
		);
	}
}


class CarouselRightArrow extends React.Component {
	render() {
		return (
		<button
			className="carousel__arrow carousel__arrow--right"
			onClick={this.props.onClick}
		>
			<span className="fa fa-2x fa-angle-right" ></span>
		</button>
		);
	}
}


class CarouselIndicator extends React.Component {
	render() {
		return (
			<li>
				<button
					className={
						this.props.index === this.props.activeIndex
						? "carousel__indicator carousel__indicator--active"
						: "carousel__indicator"
					}
					onClick={this.props.onClick}
				>
				</button>
			</li>
		);
	}
}

// wyświetlanie
class CarouselSlide extends React.Component {
	render() {
		return (
			<li
				className={
					this.props.index === this.props.activeIndex
						? "carousel__slide carousel__slide--active "
						: "carousel__slide"
				}
			>
				<p className="carousel-slide__content">{this.props.slide}</p>
			</li>
		);
	}
}

export class Carousel1 extends React.Component {
    constructor(props) {
		super(props);

		this.goToSlide = this.goToSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.goToNextSlide = this.goToNextSlide.bind(this);

		this.state = {
			activeIndex: 0					// zaczyamy od pierwszego
		};
   	}

	goToSlide(index) {
		this.setState({
			activeIndex: index
		});
	}

	goToPrevSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex; 	// aktywny slide
		let { slides } = this.props;			// dekopozycja tablicy slidów z propsów --- plik Main.js
		let slidesLength = slides.length;

		if (index < 1) {						// gdy jesteśmy na pierwszym slajdzie o indeksie [0]
			index = slidesLength; 				//wejście na ostani slide dopiero po -1
		}

		--index;

		this.setState({
			activeIndex: index
		});
	}

	goToNextSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;		// aktywny slide
		let { slides } = this.props;			// dekopozycja tablicy slidów z propsów --- plik index.js
		let slidesLength = slides.length - 1;

		if (index === slidesLength) {
			index = -1; 							//wejście na pierwszy slide (o indeksie: [0])dopiero po +1
		}

		++index;

		this.setState({
			activeIndex: index
		});
	}

	render() {
		return (
			<div className="carousel">
				<CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

				<ul className="carousel__slides">
				{this.props.slides.map((slide, index) =>
					<CarouselSlide
					key={index}
					index={index}
					activeIndex={this.state.activeIndex}
					slide={slide}
					/>
				)}
				</ul>

				<CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

				<ul className="carousel__indicators">
				{this.props.slides.map((slide, index) =>
					<CarouselIndicator
					key={index}
					index={index}
					activeIndex={this.state.activeIndex}
					onClick={e => this.goToSlide(index)}
					/>
				)}
				</ul>
			</div>
		);
	}
}

