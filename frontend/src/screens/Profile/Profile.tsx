import NavBar from "../../components/NavBar/NavBar"
import ProfilePageButton from "../../components/Buttons/ProfilePage/ProfilePageButton"
import image from '../../images/settings.jpg';
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
                        label2="Your Orders"
                    />
                    <ProfilePageButton
                        image={image}
                        label2="Account Settings"
                    />
                    <ProfilePageButton
                        label2="Your Returns"
                    />
                    <ProfilePageButton
                        label2="Your Addresses"
                    />
                    <ProfilePageButton
                        label2="Contact Us"
                    />
                </div>

            </div>
        </div>
    )
}

export default Profile