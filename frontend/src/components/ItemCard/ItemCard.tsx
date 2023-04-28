import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./ItemCard.scss"

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
export default function ItemCard(props: Props) {
    return (
        <Card sx={{ width: 450, boxShadow: '6', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
            <div className='root'>
                <div className='sub'>
                    <img className='image' src={props.image} alt="image" />
                </div>
                <CardContent>
                    <div className='title'>
                        <Typography variant="h5" component="div" className='sub-title1'>
                            {props.label1}
                        </Typography>
                        <Typography component="div" className='sub-title2'>
                            {props.label2}
                        </Typography>
                        <Typography variant="h5" component="div" className='sub-title3'>
                            {props.label3}
                        </Typography>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}