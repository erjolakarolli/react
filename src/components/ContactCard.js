import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default function ContactCard() {
    return (
        <div>
            <Card elevation={2}>
                <CardMedia image="/logo.svg" component="img"/>
                <CardHeader title="Contact name"  subheader="Event Manager" />
                <CardContent>
                    <Link className="contact-link" to='tel:01923697653'>
                        <PhoneIcon />
                        01923697653
                    </Link>
                    <br />
                    <Link className="contact-link" to='mailto:matthew.bendall@renault.co.uk?subject=Media Inquiry'>
                        <EmailIcon />
                        matthew.bendall@renault.co.uk
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}