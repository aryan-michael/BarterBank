
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ProfilePageButton.scss"

export interface Props {
    label1?: string;
    label2?: string;
    label3?: string;
    image?: any;

}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function ProfilePageButton(props: Props) {
    return (
        <div className='root'>
            <a href='' style={{ textDecoration: 'none' }}>
                <Card sx={{ width: 300, boxShadow: '6', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='sub'>
                        <img className='image' src={props.image} alt="image" />
                    </div>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.label1}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {props.label2}
                        </Typography>
                        <Typography variant="body2">
                            {props.label3}
                        </Typography>
                    </CardContent>
                </Card>
            </a>
        </div>
    );
}