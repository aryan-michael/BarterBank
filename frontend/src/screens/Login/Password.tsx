import TextInputField from '../../components/TextInputField/TextInputField';
import SubmitButton from '../../components/Buttons/Submit/SubmitButton';
import RegistrationButton from '../../components/Buttons/Register/RegistrationButton';
import Divider from '@mui/material/Divider';
import './Password.scss';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Password() {
    return (
        <>
            <div className='password-container'>
                <div>
                    <h2 className='text'>Welcome to Barter Bank !</h2>
                </div>

                <div className='sub-password-container'>
                    <div className='box-shadow-container'>
                        <div>
                            <h2 className='text'>Sign in</h2>
                        </div>

                        <div className='text-field'>
                            <TextInputField
                                icon={<LockIcon fontSize='small' />}
                                label={"Password"}
                                type={"password"}
                            />
                        </div>
                        <div className='submit-button-container'>
                            <SubmitButton text={"Sign in"} />
                        </div>
                    </div>

                </div>

            </div>

            <Divider style={{ padding: "1rem" }} />
        </>
    );
}

export default Password