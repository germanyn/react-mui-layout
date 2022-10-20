import { Box, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import { AppDrawer } from "./components/AppDrawer";
import { AppMain } from "./components/AppMain";
import { AppToolbar } from "./components/AppToolbar";

export function App() {
  const [open, setOpen] = useState(false)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppToolbar onMenuClick={() => setOpen(!open)}/>
      <AppDrawer open={open}/>
      <AppMain open={open}>
        <Typography
          component="h2"
          variant="h4"
        >
          Content
        </Typography>
      </AppMain>
    </Box>
  )
}
