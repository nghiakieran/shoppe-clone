import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  isAuthenticated: boolean
}
export default function ProtectedRoute({ isAuthenticated }: Props) {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
