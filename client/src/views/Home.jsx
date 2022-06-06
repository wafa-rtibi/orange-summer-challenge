import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import ItemCard from "../components/ItemCard";
import Navbaar from "../components/Navbaar";
import UserCard from "../components/UserCard";

const Home = () => {
  const dispatch=useDispatch()
  const role=localStorage.getItem("role")
  const users=useSelector(state=>state.reducerUser.users)
  const items=useSelector(state=>state.reducerItem.items)
  return (
    <div>
      <Navbaar/>
    
      {role == "MANAGER"
        ? users?.map((el) => <UserCard key={el.id} user={el} />)
        : null}
      {items?.map((el) => (
        <ItemCard key={el.id} item={el} />
      ))}
    </div>
  );
};

export default Home;
