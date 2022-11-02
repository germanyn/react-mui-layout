import { CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { firebaseApp } from './firebase'
import { FirebaseAuthProvider } from './hooks/FirebaseAuthContext'
import { theme } from './theme'

export function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<FirebaseAuthProvider app={firebaseApp}>
				<Outlet/>
			</FirebaseAuthProvider>
		</ThemeProvider>
	)
}
