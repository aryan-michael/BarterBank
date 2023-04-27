import React from 'react'
import "./NavBar.scss"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import TextInputField from '../../components/TextInputField/TextInputField';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/BarterBankLogoWhite.png';


function NavBar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className='logo'>
                    <img src={logo} alt="company logo" />
                </div>
                <div className="dropdowns">
                    <p>Hello</p>
                    <p>user</p>
                </div>
                <div className='text-field'>
                    <TextInputField
                        icon={<SearchIcon fontSize='small' />}
                        label={"Search"}
                        type={"text"}
                    />
                </div>
                <div className="items">
                    <div className="item">
                        <ShoppingCartIcon className='icon' />
                    </div>
                    <div className="item">
                        <AccountCircleIcon className='icon' />
                    </div>
                </div>
            </div>
            <div className='bottom-buttons'>
                <div></div>
            </div>
        </div>
    )
}

export default NavBar