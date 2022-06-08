import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userActions";
import { Button, Modal, InputGroup, Form, FormControl } from "react-bootstrap";
import axios from "axios";

const AddUser = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    dispatch(addUser(newUser));
    handleClose();
  };
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
        ? setNewUser({ ...newUser, image: filePath })
        : setNewUser({
            ...newUser,
            image:
              "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
          });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>ADD USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={
              uploadedFile.filePath ||
              "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
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
                setNewUser({ ...newUser, name: e.target.value })
              }
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <FormControl
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
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
                setNewUser({ ...newUser, password: e.target.value })
              }
              type="password"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option>Role</option>
            <option style={{ color: "black" }} value="MANAGER">
              Manager
            </option>
            <option style={{ color: "black" }} value="USER">
              User
            </option>
          </Form.Select>
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
};

export default AddUser;
