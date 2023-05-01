import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../images/BarterBankLogoWhite.png';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ChecklistIcon from '@mui/icons-material/Checklist';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

export default function ClippedDrawer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#212A3E' }}>
                <Toolbar>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <img src={logo} alt="company logo" />
                        <Typography>
                            Hello, User !!
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "#212A3E" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem key={'Add Product'} disablePadding sx={{ color: 'white' }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <PostAddIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Add Product
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Listed Products'} disablePadding sx={{ color: 'white' }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <ChecklistIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Listed Products
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Product Verification Status'} disablePadding sx={{ color: 'white' }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <VerifiedIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Product Verification Status
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Handle Orders'} disablePadding sx={{ color: 'white' }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <LocalShippingIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Handle Orders
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem key={'Account Settings'} disablePadding sx={{ color: 'white' }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Account Settings
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Log Out'} disablePadding sx={{ color: 'white' }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Log Out
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}