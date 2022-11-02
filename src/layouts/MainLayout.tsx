import { Box } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppDrawer } from '../components/AppDrawer'
import { AppMain } from '../components/AppMain'
import { AppToolbar } from '../components/AppToolbar'

export function MainLayout() {
	const [open, setOpen] = useState(false)
	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: '100vh',
			}}
		>
			<AppToolbar onMenuClick={() => setOpen(!open)}/>
			<AppDrawer open={open} onClose={() => setOpen(false)}/>
			<AppMain open={open}>
				<Outlet/>
			</AppMain>
		</Box>
	)
}