import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { AppDrawer } from "./components/AppDrawer";
import { AppMain } from "./components/AppMain";
import { AppToolbar } from "./components/AppToolbar";

export function App() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppToolbar/>
      <AppDrawer/>
      <AppMain>
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
