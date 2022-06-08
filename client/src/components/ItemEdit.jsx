import React, { useState } from 'react'
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch} from 'react-redux'
import { editItem } from '../redux/actions/itemActions'

const ItemEdit = ({item}) => {
   const dispatch=useDispatch()
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [itemEdit, setItemEdit] = useState({name:"", description:""})
   const handleEdit=()=>{
      dispatch(editItem(item._id, itemEdit));
      handleClose()
   }
   return (
     <>
       <Button variant="primary" onClick={handleShow}>
         Edit Item
       </Button>

       <Modal show={show} onHide={handleClose} animation={false}>
         <Modal.Header closeButton>
           <Modal.Title>Edit Item</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <InputGroup className="mb-3">
             <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
             <FormControl
               onChange={(e) =>
                 setItemEdit({ ...itemEdit, name: e.target.value })
               }
               defaultValue={item.name}
               placeholder="Itemname"
               aria-label="Itemname"
               aria-describedby="basic-addon1"
             />
           </InputGroup>
           <InputGroup>
             <InputGroup.Text>Description</InputGroup.Text>
             <FormControl
               onChange={(e) =>
                 setItemEdit({ ...itemEdit, description: e.target.value})
               }
               defaultValue={item.description}
               as="textarea"
               aria-label="With textarea"
             />
           </InputGroup>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={handleEdit}>
             Save Changes
           </Button>
         </Modal.Footer>
       </Modal>
     </>
   );
}

export default ItemEdit