import TextInputField from '../../components/TextInputField/TextInputField';
import SubmitButton from '../../components/Buttons/Submit/SubmitButton';
import Divider from '@mui/material/Divider';
import './Password.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/BarterBank.png';
import Checkbox from '@mui/material/Checkbox';
import PreLoginFooter from '../../components/PreLoginFooter/PreLoginFooter';

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
                <div>
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
                            />
                            <div className='signin-checkbox'>
                                <div className='check-box'>
                                    <Checkbox size="small" />
                                </div>
                                <div className='check-box-label'>
                                    <p className='check-box-label-text'>Keep me signed in.</p>
                                </div>
                            </div>

                            {/* <FormGroup>
                                <FormControlLabel control={<Checkbox size="small" />} label="Keep me signed in." />
                            </FormGroup> */}
                        </div>

                        <div className='submit-button-container'>
                            <SubmitButton text={"Sign in"} />
                        </div>
                    </div>

                </div>

            </div>

            <Divider className="divide-main" />

            <div>
                <PreLoginFooter style={{ height: "51vh" }} />
            </div>
        </>
    );
}

export default Password