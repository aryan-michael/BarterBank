import TextInputField from '../../../components/TextInputField/TextInputField';
import SubmitButton from '../../../components/Buttons/Submit/SubmitButton';
import Divider from '@mui/material/Divider';
import './ForgotPassword.scss';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../../images/BarterBankLogo.png';
import PreLoginFooter from '../../../components/PreLoginFooter/PreLoginFooter';

function ForgotPassword() {

    return (
        <>
            <div className='password-container'>
                <div className='logo'>
                    <img src={logo} alt="company logo" />
                </div>

                <div className='sub-password-container'>
                    <div className='box-shadow-container'>
                        <div>
                            <h2 className='text'>Password Assistance</h2>
                        </div>

                        <div className='text-field'>

                            <div className='info'>
                                Enter the email address or phone number associated <br />with your BarterBank account.
                            </div>

                            <TextInputField
                                icon={<PersonIcon fontSize='small' />}
                                label={"Email or mobile number"}
                                type={"text"}
                                sx={{ m: 0.5, width: '35ch' }}
                            />
                        </div>

                        <div className='submit-button-container'>
                            <SubmitButton text={"Continue"} />
                        </div>
                    </div>

                    <div className="t-c">
                        Has your email address or mobile number <br />changed?
                    </div>

                    <div className="t-c-left">
                        <p>If you no longer use the email address associated with your<br />BarterBank account, you may contact <a href="/terms&conditions" className='t-c-link'>Customer Service</a> for <br />help restoring access to your account.</p>

                    </div>

                </div>

            </div>



            <Divider className="divide-main" />

            <div>
                <PreLoginFooter />
            </div>
        </>
    );
}

export default ForgotPassword
