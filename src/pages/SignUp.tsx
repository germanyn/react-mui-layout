import { Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'
import { SignLayout } from '../layouts/SignLayout'

export function SignUp() {
	const { signUp } = useAuth()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	})
	async function handleSignUp(event: FormEvent) {
		event.preventDefault()
		setLoading(true)
		try {
			await signUp(credentials)
			navigate('/')
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}
	return (
		<SignLayout>
			<Typography
				component='h2'
				variant='h4'
				align='center'
				gutterBottom
				color='primary'
				fontWeight='bold'
			>
				Sign Up
			</Typography>
			<form onSubmit={handleSignUp}>
				<Stack
					spacing={2}
					flex={1}
					width='100%'
					component={FormControl}
					disabled={loading}
				>
					<TextField
						label='E-mail'
						fullWidth
						value={credentials.username}
						onChange={event => setCredentials({
							...credentials,
							username: event.target.value,
						})}
						type='email'
					/>
					<TextField
						label='Password'
						fullWidth
						type='password'
						value={credentials.password}
						onChange={event => setCredentials({
							...credentials,
							password: event.target.value,
						})}
					/>
					<Button variant='contained' type='submit'>
						Confirm
					</Button>
					<Typography align='center'>
						<Link
							to='/sign-in'
						> {'Have a account? Sign in!'} </Link>
					</Typography>
				</Stack>
			</form>
		</SignLayout>
	)
}