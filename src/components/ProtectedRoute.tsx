import { useMemo } from 'react'
import { Navigate, To } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'

export type ProtectedRouteProps = {
	type?: 'need-auth' | 'need-no-auth'
  children: JSX.Element
	redirect: To
}

export function ProtectedRoute({
	type = 'need-auth',
	children,
	redirect,
}: ProtectedRouteProps) {
	const { isLoggedIn } = useAuth()
	const isAuth = useMemo(() => isLoggedIn, [isLoggedIn])
	const needAuth = type === 'need-auth'
	return isAuth === needAuth
		? children
		: <Navigate to={redirect} />
}
