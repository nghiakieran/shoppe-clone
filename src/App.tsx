import { Toaster } from 'sonner'
import useRouteElements from './routes/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <div>
      <Toaster />
      {routeElements}
    </div>
  )
}

export default App
