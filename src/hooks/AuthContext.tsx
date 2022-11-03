import { createContext, useContext } from 'react'

export type BaseCredentials = {
	username: string
	password: string
}

export type AuthContextType<UserType = any, CredentialsType = BaseCredentials> = {
	user: UserType | null
	signUp: (credentials: CredentialsType) => Promise<void> 
	logIn: (credentials: CredentialsType) => Promise<void>
	logOut: () => void
	isLoggedIn:  boolean
}

export function createAuthContext<UserType = unknown, CredentialsType = unknown>() {
	return createContext<AuthContextType<UserType, CredentialsType> | null>(null)
}

export const AuthContext = createAuthContext<any, BaseCredentials>()

export const useAuth = <ContextType = AuthContextType>() => {
	return useContext(AuthContext) as ContextType 
}
