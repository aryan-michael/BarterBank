import TextInputField from '../../components/TextInputField/TextInputField';
import './Login.scss';
import { TextField, Grid, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
    return (
        <>
            <div className='root-container'>
                <div className='sub-container'>
                    <div>
                        <h3 className='text'>Welcome to Barter Bank !</h3>
                    </div>
                    <div className='text-field'>
                        <TextInputField
                            icon={<PersonIcon fontSize='small' />}
                            label={"Username"}
                        ></TextInputField>
                    </div>
                    <div className='text-field'>
                        <TextInputField
                            icon={<LockIcon fontSize='small' />}
                            label={"Password"}
                        ></TextInputField>
                    </div>
                    <div className='button-container'>
                        <Button variant="contained">Login</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login