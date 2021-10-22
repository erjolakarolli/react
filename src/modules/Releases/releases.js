import React from "react";
import ReleaseGrid from "../../components/ReleasesGrid";

const Releases = () => {
    return (
        <div className="wrapper">
            <h1>
                Releases
            </h1>
            <div>
                <ReleaseGrid />
            </div> 
        </div>
    );
};

export default Releases;