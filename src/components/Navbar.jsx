import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react'
import { MyContext } from '../context/myContext';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const {isDrawerOpen, handleDrawerClose} = useContext(MyContext)

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleDrawerClose}  
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Crazy Panda 
                </Typography>
            </Toolbar>
            <Drawer
                open={isDrawerOpen}
                onClose={handleDrawerClose}
            >
                <Box sx={{width: 250}}>
                <List>
                    <NavLink to="/">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon><BackupTableIcon/></ListItemIcon>
                            <ListItemText>Table</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/slider">
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemIcon><ColorLensIcon/></ListItemIcon>
                            <ListItemText>Color picker</ListItemText>
                        </ListItem>
                    </NavLink>
                </List>
                </Box>
            </Drawer>
        </AppBar>
    )
}
