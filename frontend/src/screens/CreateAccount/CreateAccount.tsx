import './CreateAccount.scss';
import TextInputField from '../../components/TextInputField/TextInputField';
import SubmitButton from '../../components/Buttons/Submit/SubmitButton';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/BarterBank.png';
import PreLoginFooter from '../../components/PreLoginFooter/PreLoginFooter';
import { TextField } from '@mui/material';

const CreateAccount = () => {

	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/login/otp-verification`);
	}

	const [show, setShow] = useState(false);

	const handleChange = () => {
		console.log("aankh pe click kiya");
		setShow(!show);
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
							<h2 className='text'>Create Account</h2>
						</div>
						<div className='text-field'>

							<TextInputField
								icon={<PersonIcon fontSize='small' />}
								label={"Full name"}
								type={"text"}
								sx={{ m: 0.5, width: '35ch' }}
							/>
						</div>
						<div className='text-field'>

							<TextInputField
								icon={<EmailIcon fontSize='small' />}
								label={"Email address"}
								type={"text"}
								sx={{ m: 0.5, width: '35ch' }}
							/>
						</div>
						<div className='text-field' style={{ display: "flex" }}>
							<TextField
								label="+91"
								variant="outlined"
								size='small'
								sx={{ m: 0.5, width: '6.5ch' }}
								disabled
							/>
							<TextInputField
								icon={<PhoneIcon fontSize='small' />}
								label={"Mobile number"}
								type={"text"}
								sx={{ m: 0.5, width: '27.5ch' }}
							/>
						</div>
						<div className='text-field'>
							<TextInputField
								icon={!show ? (
									<VisibilityIcon className="visibility-icon" onClick={handleChange} fontSize="small" />
								) : (
									<VisibilityOffIcon className="visibility-icon" onClick={handleChange} fontSize="small" />
								)}
								label={"Set a strong password"}
								type={show ? "text" : "password"}
								sx={{ m: 0.5, width: '35ch' }}
							/>
							{/* <p className='helper-text'><QuestionMarkOutlinedIcon className='helper-text' />Passwords must be at least 8 characters long.</p> */}
							<div className='helper-text'><svg className='helper-text-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" /></svg>Passwords must be at least 8 characters long.</div>
						</div>
						<div className="t-c-left">
							<p>By enrolling your mobile number and email, you <br />consent to receive automated messages from <br />BarterBank.</p>
						</div>

						<div className='submit-button-container' onClick={handleClick}>
							<SubmitButton text={"Continue"} />
						</div>

						<div>
							<Divider className="divide-main" />
						</div>

						<div className="t-c-left">
							<p>Already have an account? <a href="/login/user-id" className='t-c-link'>Sign in <ArrowRightIcon fontSize="inherit" /></a></p>
							<p>Become a seller? <a href="/create-account" className='t-c-link'>Create a Business Account <ArrowRightIcon fontSize="inherit" /></a></p>
						</div>

						<div className="t-c-left">
							<p>By creating an account or logging in, you agree to <br />BarterBank's <a href="/terms&conditions" className='t-c-link'>Terms & Conditions.</a></p>
						</div>
					</div>

				</div>

			</div>

			<Divider className="divide-main" />

			<div>
				<PreLoginFooter />
			</div>
		</>
	)
}

export default CreateAccount
