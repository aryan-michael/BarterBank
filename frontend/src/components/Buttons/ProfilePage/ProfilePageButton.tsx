
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

    const boxSX = {
        width: 300,
        boxShadow: '6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        margin: "20px",
        "&:hover": {
            border: "1px solid lightgray",
            boxShadow: '20',
            cursor: 'pointer',
        },
    };

    const handleProfilePageButtonClick = () => {
        console.log("thik hai bhai")
    }

    return (
        <Card onClick={handleProfilePageButtonClick} sx={boxSX}>
            <div className='sub'>
                <img className='image' src={props.image} alt="image" />
            </div>
            <CardContent>
                <div className='title'>
                    <Typography variant="h5" component="div" className='sub-title'>
                        {props.label2}
                    </Typography>
                    <ArrowForwardIcon className='icon' />
                </div>
            </CardContent>
        </Card>
    );
}