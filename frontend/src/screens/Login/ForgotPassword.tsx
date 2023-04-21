import TextInputField from '../../components/TextInputField/TextInputField';
import SubmitButton from '../../components/Buttons/Submit/SubmitButton';
import Divider from '@mui/material/Divider';
import './ForgotPassword.scss';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../images/BarterBank.png';
import PreLoginFooter from '../../components/PreLoginFooter/PreLoginFooter';

function ForgotPassword() {

    return (
        <>
            <div className='password-container'>
                <div>
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
                                label={"Email"}
                                type={"text"}
                            />
                        </div>

                        <div className='submit-button-container'>
                            <SubmitButton text={"Continue"} />
                        </div>
                    </div>

                </div>

            </div>

            <Divider className="divide-main" />

            <div>
                <PreLoginFooter style={{ height: "55.5vh" }} />
            </div>
        </>
    );
}

export default ForgotPassword
