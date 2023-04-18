import TextInputField from '../../components/TextInputField/TextInputField';
import SubmitButton from '../../components/Buttons/Submit/SubmitButton';
import './Login.scss';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
    return (
        <>
            <div className='root-container'>
                <div>
                    <h2 className='text'>Welcome to Barter Bank !</h2>
                </div>

                <div className='sub-container'>
                    <div>
                        <h2 className='text'>Sign in</h2>
                    </div>
                    <div className='text-field'>
                        <TextInputField
                            icon={<PersonIcon fontSize='small' />}
                            label={"Username"}
                        />
                    </div>
                    <div className='text-field'>
                        <TextInputField
                            icon={<LockIcon fontSize='small' />}
                            label={"Password"}
                        />
                    </div>
                    <div className='button-container'>
                        <SubmitButton text={"Sign in"} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login