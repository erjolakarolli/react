import React from "react";
import Carousel from "./Carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReleaseGrid from "../../components/ReleasesGrid";
import IMAGES from '../../components/Images';
import GalleryIMG from "react-grid-gallery";

const Images = () => {
    return (
        <div>
            <GalleryIMG
                images={IMAGES}
                enableLightbox={true}
                maxRows={2}
                backdropClosesModal
                enableImageSelection={false}
                // currentImage={3}
                // isOpen={ true}
            />
        </div>
    );
};

const Home = () => {
    return (
        <>
            <div>
                <Carousel />
            </div>
            <div className="wrapper">
                <h1>Latest Releases</h1>
                <ReleaseGrid  />
                <h1>Latest Images</h1>
                <Images />
            </div>
        </>
    );
};

export default Home;