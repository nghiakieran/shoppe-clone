import { useRoutes } from 'react-router-dom'
import ProductList from '~/pages/ProductList/ProductList'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'
import RegisterLayout from '~/layout/RegisterLayout/RegisterLayout'
import MainLayout from '~/layout/MainLayout/MainLayout'
import Profile from '~/pages/Profile/Profile'
import { AppContext } from '~/contexts/app.context'
import { useContext } from 'react'
import RejectedRoute from './RejectedRoute'
import ProtectedRoute from './ProtectedRoute'
import path from '~/constants/path'

const useRouteElements = () => {
  const { isAuthenticated } = useContext(AppContext)
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
      path: '/',
      element: <RejectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '/',
      element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: path.profile,
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
