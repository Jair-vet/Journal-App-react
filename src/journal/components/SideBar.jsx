import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
// import { TurnedInNot } from '@mui/icons-material';
// import { useSelector } from 'react-redux';
// import { SideBarItem } from './';

export const SideBar = ({ drawerWidth = 280 }) => {

    // const { displayName } = useSelector( state => state.auth );
    // const { notes } = useSelector( state => state.journal );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Jair Aceves
                        {/* { displayName } */}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary={ 'Velit enim culpa duis mollit deserunt elit' } />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

                {/* <List>
                    {
                        notes.map( note => (
                            <SideBarItem key={ note.id } { ...note } />
                        ))
                    }
                </List> */}

            </Drawer>

        </Box>
    )
}