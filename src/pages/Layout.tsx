import { Outlet } from 'react-router-dom'
import Navigator from 'widgets/Navigator'

export default function () {
	return (
		<>
			<Outlet />
			<Navigator />
		</>
	)
}