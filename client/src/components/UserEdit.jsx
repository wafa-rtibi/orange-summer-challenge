import React ,{useState} from "react";
import {useDispatch} from 'react-redux'
import { editUser } from "../redux/actions/userActions";
import { Button, Modal, InputGroup ,Form , FormControl} from "react-bootstrap";
import axios from "axios";
const UserEdit = ({user}) => {
  const dispatch=useDispatch()
  const [userEdit, setUserEdit] = useState({name:"", email:"", password:"" , role:"" , image:""})
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleEdit=()=>{
     dispatch(editUser(user._id, userEdit))
     handleClose()
   }
    const [file, setFile] = useState("");
    const [filename, setfilename] = useState("choose file");
    const [uploadedFile, setUploadedFile] = useState({});

    const handleChange = async (e) => {
      setFile(e.target.files[0]);
      setfilename(e.target.files[0].name);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      try {
        const res = await axios.post("/upload", formData, {});
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        filePath
          ? setUserEdit({ ...userEdit, image: filePath })
          : setUserEdit({
              ...userEdit,
              image:user.image
            });
      } catch (error) {
        console.log(error);
      }
    };
   return (
     <>
       <Button variant="primary" onClick={handleShow}>
         Edit User
       </Button>

       <Modal show={show} onHide={handleClose} animation={false}>
         <Modal.Header closeButton>
           <Modal.Title>Edit user informations</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <img
             src={
               uploadedFile.filePath || user.image
             }
             style={{ width: "125px", height: "125px" }}
             alt="image"
           ></img>
           <Form.Group controlId="formFile" className="mb-3">
             <Form.Label>Choose image</Form.Label>
             <Form.Control type="file" onChange={handleChange} />
             <button type="submit" onClick={handleSubmit}>
               submit
             </button>
           </Form.Group>
           <InputGroup className="mb-3">
             <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
             <FormControl
               onChange={(e) =>
                 setUserEdit({ ...userEdit, name: e.target.value })
               }
               defaultValue={user.name}
               placeholder="Username"
               aria-label="Username"
               aria-describedby="basic-addon1"
             />
           </InputGroup>
           <InputGroup className="mb-3">
             <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
             <FormControl
              defaultValue={user.email}
               onChange={(e) =>
                 setUserEdit({ ...userEdit, email: e.target.value })
               }
               placeholder="Email"
               aria-label="Username"
               aria-describedby="basic-addon1"
             />
           </InputGroup>
           <InputGroup className="mb-3">
             <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
             <FormControl
               onChange={(e) =>
                 setUserEdit({ ...userEdit, password: e.target.value })
               }
               defaultValue={user.password}
               type="password"
               placeholder="Password"
               aria-label="password"
               aria-describedby="basic-addon1"
             />
           </InputGroup>
           <Form.Select
             aria-label="Default select example"
             onChange={(e) => setUserEdit({ ...userEdit, role: e.target.value })}
           >
             <option>Role</option>
             <option
               style={{ color: "black" }}
               value="MANAGER"
              
             >
               Manager
             </option>
             <option
               style={{ color: "black" }}
               value="USER"
              
             >
               User
             </option>
           </Form.Select>
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
};

export default UserEdit;
