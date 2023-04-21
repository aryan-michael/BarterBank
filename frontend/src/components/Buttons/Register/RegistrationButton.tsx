import './RegistrationButton.scss';
import { Button } from '@mui/material';

export interface Props {
    text: string;
    onClick: () => void;
}

function RegistrationButton(props: Props) {
    return (
        <>
            <div className='registration-button'>
                <Button onClick={props.onClick}className="registration-button-component" variant="contained">{props.text}</Button>
            </div>
        </>
    )
}

export default RegistrationButton
