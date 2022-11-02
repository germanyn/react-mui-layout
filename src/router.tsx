import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { App } from './App'
import { ProtectedRoute } from './components/ProtectedRoute'
import { MainLayout } from './layouts/MainLayout'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <App />,
		children: [
			{
				element: (
					<ProtectedRoute redirect='/' type='need-no-auth'>
						<Outlet/>
					</ProtectedRoute>
				),
				children: [
					{
						path: '/sign-in',
						element: <SignIn />,
					},
					{
						path: '/sign-up',
						element: <SignUp />,
					},
				],
			},
			{
				element: (
					<ProtectedRoute redirect='/login'>
						<MainLayout/>
					</ProtectedRoute>
				),
				children: [
					{
						id: 'home',
						path: '',
						element: <Home/>,
					},
					{
						id: 'about',
						path: 'about',
						element: <About/>,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <Navigate to='/sign-in' />,
	},
])