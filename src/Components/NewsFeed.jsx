import { Modal, Row, Button, Card, Form, Col, Image} from "react-bootstrap";
/* import {Image as CloudImage } from "cloudinary-react"
import { useEffect } from "react"; */
import { connect } from "react-redux";
import { formatDistanceToNow } from 'date-fns'
import { useState } from "react";
import { editPostsWithThunk, deletePostsWithThunk} from "../app/redux/actions/actions";
import { useNavigate } from "react-router-dom";





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
    deletePost: postId => {
      dispatch(deletePostsWithThunk(postId))
    },
    editPost: (text, postId) => {
      dispatch(editPostsWithThunk({text},postId))
    }
  };  
};




const NewsFeed = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [text, setText] = useState('');

  /* useEffect(()=>{
    props.getPosts()
  },[])  */



  return (<>
     
       <Card className="mt-3 postCard"style={{ width: '33rem', borderRadius: "12px" }}>
            <div className="d-flex ml-3">
              <div className="profilePicStyle">
           {props.user?.image ?   
            <img className="profImg clickable" src={props.user.image} alt="profile pic" onClick={
              () => {
                navigate(`/profile/${props.user._id}`)
                
            }} /> :
                  <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="prof pic"/> }
              </div>
             <div className="postHeader">
                <h6 className="mb-0 ">{props.text}</h6>
                <p className="text-secondary mb-0">{props.username}</p>
                <p className="text-secondary mt-n1 mb-0">{formatDistanceToNow(new Date(props.createdAt))}</p>
              </div> 
              <div className=" ml-auto mr-3 mt-2" onClick={handleShow}>
                <i className="bi bi-three-dots" ></i>          
              </div>

            </div>
      <div className="mb-2">
        {props.image ?
        <img className="postImg" src={props.image} alt="post "/> :
       <div></div>}
      </div>
      <div className="interactionsContainer mb-2">
          <div> <i className="bi bi-hand-thumbs-up ml-4"></i></div>
      </div >
      
      <div className="d-flex justify-content-around mb-1 ml-4 border-top interactionButtons">
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
        <i className="bi bi-hand-thumbs-up  mr-1"></i>Like
        </Button>
        
        <Button className="d-flex align-items-center mr-3 font-weight-bolder" style={{color: "grey"}}  variant="white">
        <i className="bi bi-chat-text mr-1"></i> Comment
        </Button>
      </div>
      </Card>
      <Modal show={show} onHide={handleClose} className="modal-image">
            <Modal.Header closeButton>
            <Modal.Title style={{fontSize: "20px"}}>Options:</Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-0">
                  <div className="mb-3" style={{fontSize: "20px"}}>Post Actions:</div>
            <Row className="ml-1 py-2">
              <div onClick={()=>{handleClose();props.deletePost(props.postId)}} >                
                  <i className="bi bi-trash clickable" style={{fontSize: "20px"}}></i>
                  <span className="ml-4 mt-1 clickable font-weight-bold">Delete Post</span>
              </div>
            </Row>
            <Row className="ml-1 py-2 border-top">
              <div onClick={()=>{handleClose();handleShow2();}} >                
                  <i className="bi bi-pencil clickable " style={{fontSize: "20px"}}></i>
                  <span className="ml-4 mt-1 clickable font-weight-bold">Edit Post</span>
              </div>
            </Row>
                 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit your post</Modal.Title>
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
                              placeholder={props.text}
                              as="textarea" rows={5}
                            />
                        </Form.Group>
                        {/* <Row className="ml-2 mb-3 font-weight-bold">
                          <div style={{color: "#0b65c2"}}>
                            Add hastag
                          </div>
                        </Row> */}
                        <Row>
                          {/* <Col md={10}>
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
                          </Col> */}
                          <Col md={2} className="pl-0 ml-auto">
                          <Button 
                            onClick={()=>{props.editPost(text, props.postId)}}                         
                            variant="outline-dark"
                            style={{ borderRadius: "30px", fontWeight: "bold"}}>
                            Post
                         </Button>
                         </Col>
                        </Row>
              
                         
                         </Form>
                  </Modal.Body>
             
            </Modal>
                        </>
   
)


}
export default  connect(mapStateToProps, mapDispatchToProps)(NewsFeed)