import NavBar from "../../components/NavBar/NavBar"
import ProfilePageButton from "../../components/Buttons/ProfilePage/ProfilePageButton"

const Profile = () => {
    return (
        <div className="root-container">
            <div>
                <NavBar />
            </div>
            <div>
                <ProfilePageButton />
            </div>
        </div>
    )
}

export default Profile