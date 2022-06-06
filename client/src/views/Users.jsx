import React, { useEffect,useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Navbaar from "../components/Navbaar";
import UserCard from "../components/UserCard";
import {  useDispatch,useSelector } from "react-redux";
import { addUser, getUsers } from "../redux/actions/userActions";
import axios from "axios";
const Users = () => {
  const [newUser, setnewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
  });
  const [show, setShow] = useState(false);
   const dispatch=useDispatch()
   const users = useSelector((state) => state.reducerUser.users);
    const role = localStorage.getItem("role");
    console.log(users)
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
      const handleAdd = () => {
        dispatch(addUser(newUser));
        handleClose()
      };
    useEffect(() => {
      dispatch(getUsers())
    }, [])
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
        const res = await axios.post("/upload", formData, {
          headers: {
            Content: "multipart/form-data",
          },
        });
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        setnewUser({ ...newUser, image: filePath.toString() });
      } catch (error) {
        console.log(error);
      }
    };
    
  return (
    <div>
      <Navbaar />
      <h1>Users</h1>
      <Button variant="primary" onClick={handleShow}>
        Add user
      </Button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {role == "MANAGER" ? (
          users?.map((el) => (
            <UserCard style={{ margin: "10px" }} key={el.id} user={el} />
          ))
        ) : (
          <h2>Acces only for Managers</h2>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Image :
          <img
            src={
              uploadedFile.filePath ||
              "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
            }
            alt="image"
          ></img>
          <div>
            <input type="file" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>
              submit
            </button>
          </div>
          Name:{" "}
          <input
            type="text"
            onChange={(e) => setnewUser({ ...newUser, name: e.target.value })}
          ></input>
          Email :
          <input
            type="email"
            onChange={(e) => setnewUser({ ...newUser, email: e.target.value })}
          ></input>
          Password :
          <input
            type="password"
            onChange={(e) =>
              setnewUser({ ...newUser, password: e.target.value })
            }
          ></input>
          Role :{" "}
          <select
            onChange={(e) => setnewUser({ ...newUser, role: e.target.value })}
          >
            <option value="MANAGER">MANGAER</option>
            <option value="USER">USER</option>
          </select>
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
    </div>
  );
};

export default Users;