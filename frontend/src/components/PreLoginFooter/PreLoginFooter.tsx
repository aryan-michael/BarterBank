import Chip from '@mui/material/Chip';
import './PreLoginFooter.scss';
import GavelIcon from '@mui/icons-material/Gavel';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export interface Props {
    style: any;
}

const PreLoginFooter = (props: Props) => {
    return (
        <>
            <div className='footer-container' style={props.style}>
		        <div className="footer-chips">
		        	<div className='chip-1'><a href="/contact-us"><Chip className='chip-1' icon={<PermContactCalendarIcon />} label="Contact Us" /></a></div>
		            <div className='chip-2'><a href="/terms&conditions"><Chip className='chip-2' icon={<GavelIcon />} label="Terms & Condtions" /></a></div>
		            <div className='chip-3'><a href="/help-desk"><Chip className='chip-3' icon={<AccessibilityNewIcon />} label="Need Help?" /></a></div>
		        </div>
		        <div className="footer-date">
		            &copy; {new Date().getFullYear()} 
		            {" "}Copyright of BarterBank.com, Inc.
		        </div>
            </div>   
        </>
    )
}

export default PreLoginFooter
