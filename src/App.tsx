import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppDrawer } from "./components/AppDrawer";
import { AppMain } from "./components/AppMain";
import { AppToolbar } from "./components/AppToolbar";
import { theme } from "./theme";

export function App() {
  const [open, setOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppToolbar onMenuClick={() => setOpen(!open)}/>
          <AppDrawer open={open} onClose={() => setOpen(false)}/>
          <AppMain open={open}>
            <Outlet/>
          </AppMain>
        </Box>
    </ThemeProvider>
  )
}
