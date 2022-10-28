import { useState, useEffect } from "react";
import { Col, Button, Row, Card, Form, Container, Modal, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { handleFetchWithThunk, upload, uploadPicWithThunk, addUserWithThunk } from "../app/redux/actions/actions";


const mapStateToProps = state => {
  return {
  loadState: state.logic.loading,
  currentUser: state.user.activeUser,
  uploaded: state.logic.upload
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: username => {
      dispatch(handleFetchWithThunk(username));      
    },
    uploadToState: (file) => {
      dispatch(upload(file));          
    },
    uploadToSite: (file,id) =>{
          dispatch(uploadPicWithThunk(file,id))
        },
    addUser: (newUser, pic) =>{
      dispatch(addUserWithThunk(newUser, pic))
    }
  };  
};
const imageMimeType = /image\/(png|jpg|jpeg|gif)/i; 
const LogIn = (props) => {
  
  const [fieldText, setFieldText] = useState("")
  const [validated, setValidated] = useState(false);
  const [usernameField, setUsernameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [nameField, setNameField] = useState("");
  const [surnameField, setSurnameField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [locationField, setLocationField] = useState("");
  const [bioField, setBioField] = useState("");
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 /*  const uploadImage = ()=>{
    const formData = new FormData();
    formData.append("profile", props.uploaded);
    props.uploadToSite(formData,props.currentUser._id);
  } */

const handleSubmit =  (e) => {
  const form = e.currentTarget;
  if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation(); 
  }else{
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", props.uploaded);
    const newUser = {username:usernameField, email:emailField, name:nameField, surname:surnameField, title:titleField, area:locationField, bio:bioField, image:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"};
    props.addUser(newUser, formData)
    handleClose()
  }
  setValidated(true);  
};

const changeHandler = (e) => {
const target = (e.target.files[e.target.files.length-1]);

props.uploadToState(target);     
const file = target;
if (!file.type.match(imageMimeType)) {
alert("Image mime type is not valid");
return;
} 
setFile(file); 
}

useEffect(() => {
let fileReader, isCancel = false;
if (file) {
fileReader = new FileReader();
fileReader.onload = (e) => {
  const { result } = e.target;
  if (result && !isCancel) {
    setFileDataURL(result)
  }
}
fileReader.readAsDataURL(file);
}
return () => {
isCancel = true;
if (fileReader && fileReader.readyState === 1) {
  fileReader.abort();
}
}
}, [file]); 

useEffect(()=>{setFileDataURL(props.currentUser.image);
},[props.currentUser.image]);   

 return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{height: "100vh" }}>
{       
<Container className="d-flex flex-column justify-content-center align-items-center">

<Col className="d-flex flex-column justify-content-center align-items-center">
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Card className="mt-4 px-3 logInCard justify-content-around align-items-center"style={{height: "15rem", width: '15rem', borderRadius: "12px"}}>
          <i className="bi bi-linkedin "
              style={{color: "#0b65c2", fontSize: "35px"}}></i>
        <Form.Control type="text" placeholder="Enter your username here" className="px-2" 
        onChange={(e)=>{
          setFieldText(e.target.value);
          
        }} />
        <div className="d-flex align-items-center">
        <Button variant="primary"
        onClick={()=>{
          props.getUser(fieldText);         
        }}
        >Log In</Button>
        <div className="mx-2">-or-</div>
        <Button variant="outline-primary"
        onClick={handleShow}
        >Sign Up</Button>
        </div>
          </Card>
  
        </Row>
      </Col>
              </Container>
     } 
      <Modal size="lg" show={show} onHide={() => {handleClose();setFileDataURL(props.currentUser.image)}} className="modal-image">
                              <Modal.Header closeButton >
                              <Modal.Title className="font-weight-bold" style={{fontSize: "20px"}}>Please fill out the fields below to sign up.</Modal.Title>
                              </Modal.Header>
                              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                              <Modal.Body>
                              
                              {!fileDataURL ? (<Row className="mt-4 d-flex justify-content-center align-items-center">
                              <span className="ml-2 ">
                              <label className=" btn btn-outline-dark my-0 " htmlFor="picUploadBtn"><i className="bi bi-camera-fill mr-2"></i>
                              <span id="userName">Add Avatar</span></label>
                              <input type="file" className="d-none"  id="picUploadBtn" onChange={(e)=>
                              changeHandler(e)}>
                              </input>
                              </span>
                              </Row>
                              ):(<Row className="justify-content-md-center">
                                <span className="ml-2 ">
                              <label className=" btn btn-outline-dark my-0 " htmlFor="picUploadBtn"> <Image className=""
                              src={fileDataURL} roundedCircle 
                              style={{ height: "300px", width: "300px"}}/>     
                              <span id="userName"></span></label>
                              <input type="file" className="d-none"  id="picUploadBtn" onChange={(e)=>
                              changeHandler(e)}>
                              </input>
                              </span>            
                              </Row>)}
                              <Row className="justify-content-center align-items-center mt-3">
                                  
                                  <Form.Group>
                                    <Form.Control className="my-1" required type="text" placeholder="Username" 
                                    onChange={(e)=>{
                                      setUsernameField(e.target.value);
          
                                      }}/>
                                    <Form.Control className="my-1" required type="text" placeholder="Email"
                                    onChange={(e)=>{
                                      setEmailField(e.target.value);
          
                                      }} />
                                    <Form.Control className="my-1" required type="text" placeholder="Name" 
                                    onChange={(e)=>{
                                      setNameField(e.target.value);
          
                                      }}/>
                                    <Form.Control className="my-1" required type="text" placeholder="Surname" 
                                    onChange={(e)=>{
                                      setSurnameField(e.target.value);
          
                                      }}/>
                                    <Form.Control className="my-1" required type="text" placeholder="Title" 
                                    onChange={(e)=>{
                                      setTitleField(e.target.value);
          
                                      }}/>
                                    <Form.Control className="my-1" required type="text" placeholder="Location" 
                                    onChange={(e)=>{
                                      setLocationField(e.target.value);
          
                                      }}/>
                                    <Form.Control className="my-1" required as="textarea" placeholder="Bio" rows={3} 
                                    onChange={(e)=>{
                                      setBioField(e.target.value);
          
                                      }}/>
                                  </Form.Group>

                                  


                                </Row>
                              </Modal.Body>
                              <Modal.Footer>
                               
                              <Row className="mt-2 pl-2">    

                              <Button 
                               type="submit" 
                              /* onClick={} */ variant="primary ml-3">                               
                               <span>Sign Up</span>
                               </Button>                            
                               
                               </Row>
                              </Modal.Footer>
                              </Form>
                        </Modal>

  
              </div>
 )
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)