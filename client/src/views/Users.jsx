import React ,{useEffect}from 'react'
import Footer from '../components/Footer';
import Navbaar from '../components/Navbaar';
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../redux/actions/userActions';
import UserCard from '../components/UserCard';
import AddUser from '../components/AddUser';
const Users = () => {
  const dispatch=useDispatch()
  const users = useSelector((state) => state.reducerUser.users);
  const role=localStorage.getItem('role')
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  
  return (
    <div>
      <Navbaar/>
      <AddUser/>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {role=="MANAGER"?users?.map(el=><UserCard key={el._id} user={el}/>) : <h1>ONLY FOR MANAGERS</h1>}
      </div>
      <Footer/>
    </div>
  );
}

export default Users
