import { Container, Typography, Box, Card } from '@mui/material'
import { green } from '@mui/material/colors'

export type SignLayoutProps = {
	children: JSX.Element | JSX.Element[]
}

export function SignLayout({ children }: SignLayoutProps) {
	return (
		<Container
			sx={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				backgroundColor: green[500],
			}}
		>
			<Typography
				component='h1'
				variant='h4'
				align='center'
				color='white'
				mb={4}
			>
				Wellcome to My App
			</Typography>

			<Box
				component={Card}
				maxWidth='480px'
				p={2}
				width='100%'
			>
				{ children }
			</Box>
		</Container>
	)
}