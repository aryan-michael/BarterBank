import './SubmitButton.scss';
import { Button } from '@mui/material';

export interface Props {
    text: String;
}

function SubmitButton(props: Props) {
    return (
        <>
            <div className='submit-button'>
                <Button variant="contained">{props.text}</Button>
            </div>
        </>
    )
}

export default SubmitButton