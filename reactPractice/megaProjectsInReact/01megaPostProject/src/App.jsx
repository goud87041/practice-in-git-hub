import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './AppWrite/Auth'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { logIn, logOut } from './Store/AuthSlice'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(logIn(userData))
        } else {
          dispatch(logOut())
        }
      } catch (error) {
        dispatch(logOut())
      } finally {
        setLoading(false)
      }
    }
    checkUser()
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
