import type { FirebaseApp } from 'firebase/app'
import { AuthCredential, createUserWithEmailAndPassword, initializeAuth, signInWithEmailAndPassword, User } from 'firebase/auth'
import { useMemo, useState } from 'react'
import { AuthContext, AuthContextType, BaseCredentials, useAuth } from './AuthContext'

export interface FirebaseAuthProvider {
	children: JSX.Element
	app: FirebaseApp
}

export function FirebaseAuthProvider({
	children,
	app,
}: FirebaseAuthProvider) {
	const [user, setUser] = useState<User | null>(() =>
		localStorage['authUser'] ? JSON.parse(localStorage['authUser']) : null,
	)

	function handleUserChange(user: User | null) {
		if (user) {
			localStorage.setItem('authUser', JSON.stringify(user))
		} else {
			localStorage.removeItem('authUser')
		}
		setUser(user)
	}

	const auth = useMemo(() => initializeAuth(app), [ app ])

	async function logIn(credentials: BaseCredentials) {
		const result = await signInWithEmailAndPassword(
			auth,
			credentials.username,
			credentials.password,
		)
		handleUserChange(result.user)
	}

	async function logOut() {
		auth.signOut()
		handleUserChange(null)
	}

	async function signUp(credentials: BaseCredentials) {
		const result = await createUserWithEmailAndPassword(
			auth,
			credentials.username,
			credentials.password,
		)
		handleUserChange(result.user)
	}

	const value = useMemo<AuthContextType<User>>(() => {
		return {
			user,
			signUp,
			logIn,
			logOut,
			isLoggedIn: !!user,
		}
	}, [user])

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export function useFirebaseAuth() {
	return useAuth<User, AuthCredential>()
}