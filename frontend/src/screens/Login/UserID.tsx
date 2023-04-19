import TextInputField from '../../components/TextInputField/TextInputField';
import SubmitButton from '../../components/Buttons/Submit/SubmitButton';
import RegistrationButton from '../../components/Buttons/Register/RegistrationButton';
import Divider from '@mui/material/Divider';
import './UserID.scss';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

function UserID() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/login/password`);
    }

    return (
        <>
            <div className='user-id-container'>
                <div>
                    <h2 className='text'>Welcome to Barter Bank !</h2>
                </div>

                <div className='sub-user-id-container'>
                    <div className='box-shadow-container'>
                        <div>
                            <h2 className='text'>Sign in</h2>
                        </div>
                        <div className='text-field'>
                            <TextInputField
                                icon={<PersonIcon fontSize='small' />}
                                label={"Username"}
                                type={"text"}
                            />
                        </div>
                        {/* <div className='text-field'>
                            <TextInputField
                                icon={<LockIcon fontSize='small' />}
                                label={"Password"}
                            />
                        </div> */}
                        <div className='submit-button-container' onClick={handleClick}>
                            <SubmitButton text={"Continue"} />
                        </div>
                    </div>

                    <div className="divider">
                        <Divider>First time at BarterBank?</Divider>
                    </div>
                </div>

                <div className='registration-button'>
                    <RegistrationButton text={"Create your BarterBank account"} />
                </div>
            </div>

            <Divider style={{ padding: "1rem" }} />
        </>
    );
}

export default UserID