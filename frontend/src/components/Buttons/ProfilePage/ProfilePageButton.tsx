import { Box } from "@mui/material"

const ProfilePageButton = () => {
    return (
        <div className='root'>
            <a href="" style={{ textDecoration: "none" }}>
                <Box sx={{ border: '2px', backgroundColor: 'pink', width: 400, height: 100 }}>
                    <span>Your Orders</span>
                </Box>
            </a>
        </div>
    )
}

export default ProfilePageButton