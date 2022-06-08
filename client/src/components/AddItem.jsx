import React ,{useState}from 'react'
import {useDispatch} from 'react-redux'
import {Button, Modal, InputGroup , FormControl} from 'react-bootstrap'
import { addItem } from '../redux/actions/itemActions';
const AddItem = () => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newItem, setNewItem] = useState({ name: "", description: "" });
  const handleAdd = () => {
    dispatch(addItem(newItem));
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <FormControl
              onChange={(e) =>
                setNewItem({ ...newItem, name: e.target.value })
              }
             
              placeholder="Itemname"
              aria-label="Itemname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <FormControl
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
             
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem