import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DrawerComponent: React.FC<{
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ drawerOpen, setDrawerOpen }) => {
    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Seasons', path: '/seasons' },
        { label: 'Grand Prix', path: '/grandprix' },
        { label: 'Drivers', path: '/drivers' },
        { label: 'Constructors', path: '/constructors' },
        { label: 'Circuits', path: '/circuits' },
        { label: 'Races', path: '/races' },
        { label: 'Sessions', path: '/sessions' },
        { label: 'Results', path: '/results' },
        { label: 'Session Types', path: '/sessiontypes' },
    ];

    return (
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} component={NavLink} to={item.path} onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default DrawerComponent;
