import { Typography, Box, Card, Divider, IconButton, SvgIcon } from '@mui/material'
import { green } from '@mui/material/colors'
import { useFirebaseAuth } from '../hooks/FirebaseAuthContext'
import { GithubAuthProvider, signInWithPopup, getAuth, GoogleAuthProvider, AuthProvider } from 'firebase/auth'
import { ReactComponent as Github} from '../assets/github.svg'
import { ReactComponent as Google} from '../assets/google.svg'

export type SignLayoutProps = {
	children: JSX.Element | JSX.Element[]
}

export function SignLayout({ children }: SignLayoutProps) {
	const { handleUserChange } = useFirebaseAuth()

	async function logInWithProvider(provider: AuthProvider) {
		const auth = getAuth()
		const result = await signInWithPopup(auth, provider)
		handleUserChange(result.user)
	}

	async function handleGitHubLogIn() {
		await logInWithProvider(new GithubAuthProvider())
	}

	async function handleGoogleLogIn() {
		await logInWithProvider(new GoogleAuthProvider())
	}

	return (
		<Box
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
				Welcome to My App
			</Typography>

			<Box
				component={Card}
				maxWidth='480px'
				p={2}
				width='100%'
			>
				{ children }
				<Divider sx={{ my: 2 }}>
					<Typography fontStyle='italic' color='gray'>
						OR WITH
					</Typography>
				</Divider>
				<Box
					justifyContent='center'
					display='flex'
					gap={2}
				>
					<IconButton onClick={handleGitHubLogIn}>
						<SvgIcon component={Github} fontSize='large'/>
					</IconButton>
					<IconButton onClick={handleGoogleLogIn}>
						<SvgIcon component={Google} fontSize='large'/>
					</IconButton>
				</Box>
			</Box>
		</Box>
	)
}