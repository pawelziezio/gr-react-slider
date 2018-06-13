import React from 'react';
import { Carousel1 }  from './Carousel1';


const carouselSlidesData = [
    {
        content: "Week 1"
    },
    {
        content: "Week 2"
    },
    {
        content: "Week 3"
    },
    {
        content: "Week 4"
    }
    ];


export class Main extends React.Component {
    render() {
        return (
            <Carousel1
                slides={carouselSlidesData}
            />
        );
    }
  }