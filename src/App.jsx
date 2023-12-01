import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './contextApi/UserContext'
function App() {
 
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
