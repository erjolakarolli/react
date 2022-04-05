import React from "react";
import Carousel from "./Carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Grid from '@material-ui/core/Grid';
import ReleaseCard from "../../components/ReleasesCard";
import IMAGES from '../../components/Images';
import GalleryIMG from "react-grid-gallery";
import ArrorRight from '@material-ui/icons/ArrowRight';

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

const IndexReleases = () => {
    return (
        <div>
            <Grid container spacing={3}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <ReleaseCard />
                    </Grid>
                ))}
           </Grid>
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
                <h1 className="sectionTitle">Latest Announcements 
                    <a href="/announcement">View all 
                      <ArrorRight />
                    </a> 
                </h1>
                <IndexReleases  />
                <h1 className="sectionTitle">Latest Images
                     <a href="/gallery">View all 
                       <ArrorRight />
                     </a> 
                </h1>
                <Images />
            </div>
        </>
    );
};

export default Home;