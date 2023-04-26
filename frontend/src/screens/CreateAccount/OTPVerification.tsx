import TextInputField from '../../components/TextInputField/TextInputField';
import SubmitButton from '../../components/Buttons/Submit/SubmitButton';
import Divider from '@mui/material/Divider';
import './OTPVerification.scss';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PinIcon from '@mui/icons-material/Pin';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/BarterBank.png';
import Checkbox from '@mui/material/Checkbox';
import PreLoginFooter from '../../components/PreLoginFooter/PreLoginFooter';

function OTPVerification() {

    const Navigate = useNavigate();

    return (
        <>
            <div className='password-container'>
                <div>
                    <img src={logo} alt="company logo" />
                </div>

                <div className='sub-password-container'>
                    <div className='box-shadow-container'>
                        <div>
                            <h2 className='text'>2-Step Verification</h2>
                        </div>

                        <div className="t-c-left">
                            <p>For added security, please enter the One Time <br />Password (OTP) that has been sent to a phone <br />number ending with 123</p>
                        </div>

                        <div className='text-field'>

                            <TextInputField
                                icon={<PinIcon fontSize='small' />}
                                label={"Enter OTP"}
                                sx={{ m: 0.5, width: '35ch' }}
                            />
                            <div className='signin-checkbox'>
                                <div className='check-box'>
                                    <Checkbox size="small" />
                                </div>
                                <div className='check-box-label'>
                                    <p className='check-box-label-text'>Don't ask for codes on this device</p>
                                </div>
                            </div>
                        </div>

                        <div className='submit-button-container'>
                            <SubmitButton text={"Sign in"} />
                        </div>

                        <div className="t-c-left">
                            <p><a href="/login/user-id" className='t-c-link'><ArrowRightIcon fontSize="inherit" />Didn't receive the OTP?</a></p>
                        </div>
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

export default OTPVerification
