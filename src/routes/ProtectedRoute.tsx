import { Navigate, Outlet } from 'react-router-dom'
import path from '~/constants/path'

type Props = {
  isAuthenticated: boolean
}
export default function ProtectedRoute({ isAuthenticated }: Props) {
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}
