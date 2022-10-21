import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { DRAWER_WIDTH } from "../constants";

export interface AppMainProps {
  children: React.ReactNode
  open?: boolean
}

export function AppMain({ children, open }: AppMainProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <Box component='main' sx={{
      flexGrow: 1,
      p: 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(!isMobile && { marginLeft: `-${DRAWER_WIDTH}px` }),
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }}>
      <Toolbar/>
      { children }
    </Box>
  )
}
