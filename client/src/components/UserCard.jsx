import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { removeUser } from '../redux/actions/userActions'
import UserEdit from './UserEdit'
const UserCard = ({user}) => {
  const dispatch=useDispatch()
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}> {user.name}</Card.Title>
        <Card.Text style={{ color: "black" }}>{user.email}</Card.Text>
        <Card.Text style={{color:"black"}}>{user.role}</Card.Text>
        <Button variant="danger" onClick={() => dispatch(removeUser(user._id))}>
          Delete
        </Button>
        <UserEdit user={user} />
      </Card.Body>
    </Card>
  );
}

export default UserCard