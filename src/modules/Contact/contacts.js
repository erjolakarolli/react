import React from "react";
import Grid from '@material-ui/core/Grid';
import ContactCard from '../../components/ContactCard';

const Contacts = () => {
    return (
        <div className="wrapper">
            <h1>
                Contact Us
            </h1>
           <div>
           <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard />
                </Grid>
            </Grid>
        </div>
    </div>
    );
};

export default Contacts;