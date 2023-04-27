import React from 'react'
import "./NavBar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/BarterBankLogoWhite.png';
import { Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';


function NavBar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className='logo'>
                    <img src={logo} alt="company logo" />
                </div>
                <div className="dropdowns">
                    <LocationOnIcon className='icon' />
                    <a href='' className='address-link'>
                        <span className='location'>
                            Select Your<br />Address</span>
                    </a>
                </div>
                <div className='text-field'>
                    <InputBase
                        placeholder='Search BarterBank.com'
                        type={"text"}
                        sx={{ p: '3px 4px', m: 0.5, width: '70ch', backgroundColor: 'white', borderRadius: '4px' }}
                    />
                    <IconButton type="button" sx={{ p: '10px', color: 'white' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
                <div className="items">
                    <div className="item">
                        <Button className="submit-button-component" variant='text' style={{ color: 'white' }}>Returns & Orders</Button>
                    </div>
                    <div className="item">
                        <ShoppingCartIcon className='icon' />
                    </div>
                    <div className="item">
                        <AccountCircleIcon className='icon' />
                        <a href='/login/user-id' className='profile-link'>
                            <span className='profile'>
                                Hello, SignIn</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar