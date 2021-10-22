import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

export default function ReleaseCard() {
    return (
        <div>
            <Card elevation={2}>
                <CardMedia image="/logo.png" component="img"/>
                <CardHeader title="Release Title"  subheader="14/09/2021" />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}