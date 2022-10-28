import { useState } from "react";
import { Image, Button, Card, Form, FormControl, Modal, Row, Col} from "react-bootstrap";
import { connect } from "react-redux";
import { upload, submitPostsWithThunk } from "../app/redux/actions/actions";

const mapStateToProps = state => {
  return {
  uploaded: state.logic.upload,
  loadState: state.logic.loading,
  postList: state.logic.posts,
  feed: state.logic.feed,
  currentUser: state.user.activeUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadToState: file => {
      dispatch(upload(file));
    },
    sendPost: (text,username,id,img)=> { 
            dispatch(submitPostsWithThunk({text,username,id},img));
    }
  };  
};

const AddPost = (props) => {

  const [text, setText] = useState('')
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const uploadImage = (text)=>{
    const formData = new FormData();
    console.log("image to be uploaded:",props.uploaded);
    formData.append("post", props.uploaded)
    /* for(let key of formData.entries()){
      console.log(key) 
    }*/
     console.log("doesitdata?",formData) 
      props.sendPost(text,props.currentUser.username,props.currentUser._id, formData);  
     setText('');
  }

 /*  useEffect(()=>{
    props.something?()
  },[]) 
 */
/*   onSubmit={(e)=>{e.preventDefault();props.sendPost(text);setText('')}} */
return (
     
       <Card className="mt-4"style={{ width: '33rem', borderRadius: "12px" }}>
            <div className="d-flex ml-3">
            <div className="profilePicStyle"> 
                    
            <img className="profImg" src={props.currentUser.image} alt="profile pic"/>
              </div>
             <Form  className="mt-3">
              <FormControl 
                type="text"
                placeholder="Create a post"
                className="pl-4"
                value="Create a post"
                onClick={()=>{handleShow();props.uploadToState({})}}
                style={{ backgroundColor: "white",
                border: "1px solid grey",
                borderRadius: "30px",
                height: "50px",
                width: "410px",
              }}
              readOnly
              />
            </Form> 

            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>Create a post</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form className="w-100">
                        <Row>
                          <Col md={2}>
                           <Image className="mt-1" style={{width: "60px", borderRadius: "50%"}} src={props.currentUser.image}/>
                          </Col>
                          <Col md={10}>
                          <div className="font-weight-bold">
                             {props.currentUser.name} {props.currentUser.surname}
                         </div>
                          <Button
                            size="sm"
                            variant="outline-dark"
                            style={{ borderRadius: "30px", fontWeight: "bold", }}>
                            <i className="bi bi-globe"></i> <span className="ml-2 mr-2">Anyone</span><i className="bi bi-caret-down-fill"></i>
                         </Button>
                         </Col>
                      </Row>
                       <Form.Group >
                            <Form.Control
                              style={{ marginTop: "-8px", fontSize: "17px", border: "none" }}
                              className="mb-3 mt-3"
                              onChange={(e)=>{setText(e.target.value);}}
                              placeholder="What do you want to talk about?"
                              as="textarea" rows={5}
                            />
                        </Form.Group>
                        <Row className="ml-2 mb-3 font-weight-bold">
                          <div style={{color: "#0b65c2"}}>
                            Add hastag
                          </div>
                        </Row>
                        <Row>
                          <Col md={10}>
                          <span className="ml-2">
                          <label htmlFor="picUploadBtn"><i className="bi bi-image-fill" style={{fontSize: "25px", color: "gray"}}></i></label>
                          <input type="file" className="d-none" id="picUploadBtn"
                          onChange={(e)=>{
                            props.uploadToState(e.target.files[e.target.files.length-1],);}}></input>
                          </span>
                          <span className="ml-4"> 
                          <i className="bi bi-play-btn-fill" style={{fontSize: "25px", color: "gray"}}></i>
                          </span>
                          <span className="ml-4">
                          <i className="bi bi-card-list" style={{fontSize: "25px", color: "gray"}}></i>
                          </span>
                          <span className="ml-4">
                          <i className="bi bi-briefcase-fill" style={{fontSize: "25px", color: "gray"}}></i>
                          </span>
                          <span className="ml-4">
                          <i className="bi bi-star-fill" style={{fontSize: "25px", color: "gray"}}></i>
                          </span>
                          <span className="ml-4">
                          <i className="bi bi-bar-chart-fill" style={{fontSize: "25px", color: "gray"}}></i>
                          </span>
                          <span className="ml-4">
                          <i className="bi bi-three-dots" style={{fontSize: "25px", color: "gray"}}></i>
                          </span>
                          </Col>
                          <Col md={2} className="pl-0">
                          <Button
                            variant="outline-dark"
                            style={{ borderRadius: "30px", fontWeight: "bold"}}
                            onClick={()=>{uploadImage(text);handleClose()}}>
                            Post
                         </Button>
                         </Col>
                        </Row>
              
                         
                         </Form>
                  </Modal.Body>
             
            </Modal>















            </div>
      <div className="d-flex justify-content-between mb-3 ml-4">
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
          <i style={{ color: "#0b65c2" }} className="bi bi-image mr-2"></i> Photo
        </Button>
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
          <i style={{ color: "#7fc15e" }} className="bi bi-play-btn-fill mr-2"></i>
          Video
        </Button>
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
          <i style={{ color: "#e7a33e" }} className="bi bi-calendar2-date mr-2"></i>
          Event
        </Button>
        <Button className="d-flex align-items-center mr-3 font-weight-bolder" style={{color: "grey"}}  variant="white">
          <i style={{ color: "#fc9295" }} className="bi bi-newspaper mr-2"></i> Write
          Article
        </Button>
      </div>
      </Card>
   
)


}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost)