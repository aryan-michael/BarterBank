import TextInputField from '../../../components/TextInputField/TextInputField';
import SubmitButton from '../../../components/Buttons/Submit/SubmitButton';
import RegistrationButton from '../../../components/Buttons/Register/RegistrationButton';
import Divider from '@mui/material/Divider';
import './UserID.scss';
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
import logo from '../../../images/BarterBankLogo.png';
import PreLoginFooter from '../../../components/PreLoginFooter/PreLoginFooter';

function UserID() {

    const navigate = useNavigate()

    const handleRegistration = () => {
        navigate(`/create-account`);
    }

    const handleClick = () => {
        navigate(`/login/password`);
    }

    return (
        <>
            <div className='user-id-container'>

                <div className='logo'>
                    <img src={logo} alt="company logo" />
                </div>

                <div className='sub-user-id-container'>
                    <div className='box-shadow-container'>
                        <div>
                            <h2 className='text'>Sign in</h2>
                        </div>
                        <div className='text-field'>
                            <TextInputField
                                icon={<PersonIcon fontSize='small' />}
                                label={"Email"}
                                type={"text"}
                                sx={{ m: 0.5, width: '35ch' }}
                            />
                        </div>

                        <div className='submit-button-container' onClick={handleClick}>
                            <SubmitButton text={"Continue"} />
                        </div>

                        <div className="t-c-left">
                            <p>By continuing, you agree to BarterBank's <a href="/terms&conditions" className='t-c-link'>Terms & <br />Conditions.</a></p>
                        </div>

                        <div className="t-c-left">
                            <p><a href="/login/user-id" className='t-c-link'><ArrowRightIcon fontSize="inherit" />Need Help?</a></p>
                        </div>
                    </div>


                    <Divider className="divide-1">First time at BarterBank?</Divider>

                </div>

                <div className='registration-button'>
                    <RegistrationButton onClick={handleRegistration} text={"Create your BarterBank account"} />
                </div>

            </div>

            <Divider className="divide-main" />

            <div>
                <PreLoginFooter />
            </div>
        </>
    );
}

export default UserID
