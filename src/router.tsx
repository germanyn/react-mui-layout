import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { About } from './pages/About'
import { Home } from './pages/Home'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <App />,
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
])