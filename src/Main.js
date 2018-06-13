import React from 'react';
import { Carousel1 }  from './Carousel1';


const carouselSlides = ["Week 1","Week 2", "Week 3", "Week 4"];


export class Main extends React.Component {
    render() {
        return (
            <Carousel1
                slides={carouselSlides}
            />
        );
    }
  }