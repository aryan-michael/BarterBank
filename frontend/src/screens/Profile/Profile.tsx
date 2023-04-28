import NavBar from "../../components/NavBar/NavBar"
import ProfilePageButton from "../../components/Buttons/ProfilePage/ProfilePageButton"
import settings from '../../images/settings.gif';
import orders from '../../images/orders.gif';
import returns from '../../images/returns.gif';
import address from '../../images/address.gif';
import contact from '../../images/contact.gif';



import "./Profile.scss"

const Profile = () => {
    return (
        <div className="root-container">
            <div>
                <NavBar />
            </div>
            <div className="box">
                <h2>Your Account</h2>
                <div className="box-sub">
                    <ProfilePageButton
                        image={orders}
                        label2="Your Orders"
                    />
                    <ProfilePageButton
                        image={settings}
                        label2="Account Settings"
                    />
                    <ProfilePageButton
                        image={returns}
                        label2="Your Returns"
                    />
                    <ProfilePageButton
                        image={address}
                        label2="Your Addresses"
                    />
                    <ProfilePageButton
                        image={contact}
                        label2="Contact Us"
                    />
                </div>

            </div>
        </div>
    )
}

export default Profile