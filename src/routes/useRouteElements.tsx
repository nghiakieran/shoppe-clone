import { useRoutes } from 'react-router-dom'
import ProductList from '~/pages/ProductList/ProductList'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'
import RegisterLayout from '~/layout/RegisterLayout/RegisterLayout'
import MainLayout from '~/layout/MainLayout/MainLayout'
import Profile from '~/pages/Profile/Profile'
import ProtectedRoute from './ProtectedRoute'
import RejectedRoute from './RejectedRoute'

const isAuthenticated = true

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      index: true, // Không quan tâm thứ tự đặt object này ở đâu tránh lỗi vòng lặp
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <RejectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}

export default useRouteElements
