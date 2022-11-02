import HomeIcon from '@mui/icons-material/Home'
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { To } from 'react-router-dom'
import { DRAWER_WIDTH } from '../constants'
import { ListItemButtonLink } from './ListItemButtonLink'
import { useAuth } from '../hooks/AuthContext'

export interface DrawerItem {
	to: To
	text: string
	icon: React.ReactNode
}

export interface AppDrawerProps {
	open?: boolean
	onClose?: () => void
}

export function AppDrawer({ open, onClose }: AppDrawerProps) {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.only('xs'))
	const { logOut } = useAuth()
	const itens: DrawerItem[] = [
		{
			text: 'Home',
			to: '/',
			icon: <HomeIcon />,
		},
		{
			text: 'About',
			to: '/about',
			icon: <QuestionMarkRoundedIcon />,
		},
	]
	return (
		<Drawer
			variant={isMobile ? 'temporary' : 'persistent'}
			open={open}
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				['& .MuiDrawer-paper']: { width: DRAWER_WIDTH, boxSizing: 'border-box' },
			}}
			onClose={onClose}
		>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<List onClick={isMobile ? onClose : undefined}>
					{itens.map(item => (
						<ListItem key={item.text} disablePadding>
							<ListItemButtonLink to={item.to}>
								<ListItemIcon>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButtonLink>
						</ListItem>
					))}
				</List>
			</Box>
			<Box mt='auto'>
				<Divider />
				<List onClick={isMobile ? onClose : undefined}>
					<ListItem disablePadding>
						<ListItemButton onClick={() => logOut()}>
							<ListItemIcon>
								<LogoutIcon/>
							</ListItemIcon>
							<ListItemText primary='Sign out' />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	)
}