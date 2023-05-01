import TextInputField from '../../../components/TextInputField/TextInputField';
import SubmitButton from '../../../components/Buttons/Submit/SubmitButton';
import Divider from '@mui/material/Divider';
import './Password.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../images/BarterBankLogo.png';
import Checkbox from '@mui/material/Checkbox';
import PreLoginFooter from '../../../components/PreLoginFooter/PreLoginFooter';

function Password() {

    const Navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleChange = () => {
        console.log("aankh pe click kiya");
        setShow(!show);
    }

    const handleForgotPassword = () => {
        Navigate(`/login/password/forgot-password`);
    }

    const handleChangeID = () => {
        Navigate(`/login/user-id`);
    }

    return (
        <>
            <div className='password-container'>
                <div className='logo'>
                    <img src={logo} alt="company logo" />
                </div>

                <div className='sub-password-container'>
                    <div className='box-shadow-container'>
                        <div>
                            <h2 className='text'>Sign in</h2>
                        </div>



                        <div className='text-field'>
                            <div className='account-id-change'>
                                <div className='id'>
                                    peakyblinders@gmail.com
                                </div>
                                <div className='change' onClick={handleChangeID}>
                                    Change
                                </div>
                            </div>
                            <div className='forgot-password' onClick={handleForgotPassword}>Forgot Password?</div>
                            <TextInputField
                                icon={!show ? (
                                    <VisibilityIcon className="visibility-icon" onClick={handleChange} fontSize="small" />
                                ) : (
                                    <VisibilityOffIcon className="visibility-icon" onClick={handleChange} fontSize="small" />
                                )}
                                label={"Password"}
                                type={show ? "text" : "password"}
                                sx={{ m: 0.5, width: '35ch' }}
                            />
                            <div className='signin-checkbox'>
                                <div className='check-box'>
                                    <Checkbox size="small" />
                                </div>
                                <div className='check-box-label'>
                                    <p className='check-box-label-text'>Keep me signed in. <a href="/terms&conditions" className='t-c-link'>Details <ArrowDropDownIcon fontSize="inherit" /></a></p>
                                </div>
                            </div>
                        </div>

                        <div className='submit-button-container'>
                            <SubmitButton text={"Sign in"} />
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

export default Password
