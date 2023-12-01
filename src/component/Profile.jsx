import {useContext} from 'react'
import UserContext from '../contextApi/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  return(
    <div>
  if(!user) {
    <div>please login!</div>
  }
  else{
   <div>Welcome{user.username}</div>
  } 
  </div>
    )

  
}

export default Profile