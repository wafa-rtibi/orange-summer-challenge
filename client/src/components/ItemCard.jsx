import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/actions/itemActions';
import ItemEdit from './ItemEdit';
const ItemCard = ({item}) => {
  const dispatch=useDispatch()
  return (
    <>
      <Card border="warning" style={{ width: "18rem", margin:"10px" }}>
        <Card.Header style={{ color: "black" }}>{item._id}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{item.name}</Card.Title>
          <Card.Text style={{ color: "black" }}>{item.description}</Card.Text>
        </Card.Body>
        <Button variant="danger" onClick={() => dispatch(removeItem(item._id))}>
          Delete
        </Button>
        <ItemEdit item={item} />
      </Card>
    </>
  );
}

export default ItemCard