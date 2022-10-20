import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
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
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}