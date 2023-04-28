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

                <div style={{ width: "100px" }} />

                <div className="dropdowns">
                    <LocationOnIcon className='icon' />
                    <a href='' className='address-link'>
                        <span className='location'>Select Your Address</span>
                    </a>
                </div>

                <div style={{ width: "100px" }} />

                <div className='search-bar-component'>
                    <InputBase
                        placeholder='Search BarterBank.com'
                        type={"text"}
                        className="search-bar"

                    />
                    <IconButton className="search-icon" type="button" sx={{ p: '10px', color: 'white' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>

                <div style={{ width: "100px" }} />

                <div className="items">
                    <div className="item">
                        <Button className="submit-button-component" variant='text' style={{ color: 'white' }}>Returns & Orders</Button>
                    </div>

                    <div className="item">
                        <ShoppingCartIcon className='icon' />
                    </div>

                    <div className="item">
                        <AccountCircleIcon className='icon' />
                        <a href='' className='profile-link'>
                            <span className='profile'>Hello, Sign in</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar