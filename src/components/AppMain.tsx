import { Box, Toolbar } from "@mui/material";

export interface AppMainProps {
  children: React.ReactNode
}

export function AppMain({ children }: AppMainProps) {
  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar/>
      { children }
    </Box>
  )
}