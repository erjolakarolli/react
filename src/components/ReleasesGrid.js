import React from "react";
import Grid from '@material-ui/core/Grid';
import ReleaseCard from "./ReleasesCard";

export default function ReleaseGrid() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReleaseCard />
                </Grid>
            </Grid>
        </div>
    )
}