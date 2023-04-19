import './RegistrationButton.scss';
import { Button } from '@mui/material';

export interface Props {
    text: String;
}

function RegistrationButton(props: Props) {
    return (
        <>
            <div className='registration-button'>
                <Button className="registration-button-component" variant="contained">{props.text}</Button>
            </div>
        </>
    )
}

export default RegistrationButton