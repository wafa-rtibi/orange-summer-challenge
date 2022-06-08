import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbaar from '../components/Navbaar'
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../redux/actions/userActions'
import { getItem } from "../redux/actions/itemActions";
const Home = () => {
  const dispatch=useDispatch()
  const users = useSelector((state) => state.reducerUser.users);
  const items = useSelector((state) => state.reducerItem.items);
   const role = localStorage.getItem("role");
   useEffect(() => {
     dispatch(getUsers());
     dispatch(getItem())
   }, [dispatch]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbaar />
      {role == "MANAGER" ? (
        <div>
          <h2 style={{ color: "black" }}>USERS {users.length} </h2>
          <Table striped bordered hover>
            <thead>
              <tr style={{ color: "black" }}>
                <th style={{ color: "black" }}>Image</th>
                <th style={{ color: "black" }}>Name</th>
                <th style={{ color: "black" }}>Email</th>
                <th style={{ color: "black" }}>Role</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((el) => (
                <tr style={{ color: "black" }}>
                  <td style={{ color: "black" }}>
                    <img src={el.image} alt="user" style={{width:"50px", height:"50px"}}/>
                  </td>
                  <td style={{ color: "black" }}> {el.name} </td>
                  <td style={{ color: "black" }}> {el.email} </td>
                  <td style={{ color: "black" }}> {el.role} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
      <div>
        <h2 style={{ color: "black" }}>Items {items.length} </h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ color: "black" }}>Name</th>
              <th style={{ color: "black" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((el) => (
              <tr>
                <td style={{ color: "black" }}>{el.name}</td>
                <td style={{ color: "black" }}> {el.description} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}

export default Home