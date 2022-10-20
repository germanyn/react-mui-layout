import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";


export function AppToolbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
        >
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}