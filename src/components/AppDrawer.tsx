import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { DRAWER_WIDTH } from "../constants";

export interface AppDrawerProps {
  open?: boolean
  onClose?: () => void
}

export function AppDrawer({ open, onClose }: AppDrawerProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={open}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH, boxSizing: 'border-box' },
      }}
      onClose={onClose}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List onClick={onClose}>
          <ListItemButton component={NavLink} to='/'>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItemButton>
          <ListItemButton component={NavLink} to='/about'>
            <ListItemButton>
              <ListItemIcon>
                <QuestionMarkRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItemButton>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  )
}