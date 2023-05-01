import './NavBar2.scss';

const NavBar2 = () => {
    return (
        <>
            <div className="root-container">
                <div className='bottom-buttons'>
                    <a href='' className='link'> <span className='spans'>Best Sellers</span></a>
                    <a href='' className='link'> <span className='spans'>Deals</span></a>
                    <a href='' className='link'> <span className='spans'>Customer Service</span></a>
                    <a href='' className='link'> <span className='spans'>Coupons</span></a>
                    <a href='/profile' className='link'> <span className='spans'>Profile</span></a>
                </div>
            </div>
        </>
    )
}

export default NavBar2
