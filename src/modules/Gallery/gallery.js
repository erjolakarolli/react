import React from "react";
import IMAGES from '../../components/Images';
import GalleryIMG from "react-grid-gallery";

const Images = () => {
    return (
        <div>
            <GalleryIMG
                images={IMAGES}
                enableLightbox={true}
              //   maxRows={2}
                backdropClosesModal
                enableImageSelection={false}
                // currentImage={3}
                // isOpen={ true}
            />
        </div>
    );
};

const Gallery = () => {
    return (
        <div className="wrapper">
            <h1>
                Images
            </h1>
            <Images />
        </div>
    );
};

export default Gallery;