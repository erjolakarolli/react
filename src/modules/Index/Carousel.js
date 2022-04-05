import React from "react";
import { Carousel } from "react-responsive-carousel";


export default () => (
    <Carousel autoPlay infiniteLoop interval="5000" transitionTime="3000" showThumbs={false}>
        <div>
            <img src="https://picsum.photos/700/400?img=1" alt="img1" />
            <p className="legend">HEDA Site`s First Carousel Title</p>
        </div>
        <div>
            <img src="https://picsum.photos/700/400?img=2" alt="img2" />
            <p className="legend">Title 2</p>
        </div>
        <div>
            <img src="https://picsum.photos/700/400?img=3" alt="img3" />
            <p className="legend">Title 3</p>
        </div>
    </Carousel>
);