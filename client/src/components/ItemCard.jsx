import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../redux/actions/itemActions";
const ItemCard = ({ item }) => {
  const [newItem, setnewItem] = useState({ name: "", description: "" });
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <Card 
    style={{ width: "18rem",margin:"10px" }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="danger" onClick={() => dispatch(removeItem(item._id))}>
          delete
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(editItem(item.id, newItem))}
        >
          edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
