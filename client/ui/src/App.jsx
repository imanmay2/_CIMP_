
import LoginPage from './pages/jsx/Auth'
import AdminDashboard from './pages/jsx/AdminDashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>
    },
    {
      path: "/adminDashBoard",
      element:<AdminDashboard/>
    },
    {
      path: "/presidentDashBoard",
      element:<AdminDashboard/>
    },
    {
      path: "/facultyDashBoard",
      element:<AdminDashboard/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;
