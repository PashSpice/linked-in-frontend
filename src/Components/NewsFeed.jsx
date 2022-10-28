import { Modal, Row, Button, Card, Form, Col, Image} from "react-bootstrap";
/* import {Image as CloudImage } from "cloudinary-react"
import { useEffect } from "react"; */
import { connect } from "react-redux";
import { formatDistanceToNow } from 'date-fns'
import { useState } from "react";
import { editPostsWithThunk, deletePostsWithThunk,LikePostWithThunk} from "../app/redux/actions/actions";
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
    },
    giveLike: (postId, userId) => {
      dispatch(LikePostWithThunk(postId, userId))
    },
  
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
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
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
                navigate(`/profile/${props._id}`)
                
            }} /> :
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="prof pic" style={{width:"60px"}}/> }
              </div>
             <div className="postHeader">
                <h6 className="mb-0 ">{props.text}</h6>
                {props.user &&props.user.name && <p className="text-secondary mb-0">{`${props.user.name} ${props.user.surname}`}</p>}
                <p className="text-secondary mt-n1 mb-0">{formatDistanceToNow(new Date(props.createdAt))}</p>
              </div> 
              <div className=" ml-auto mr-3 mt-2" onClick={handleShow}>
                {props.user && props.currentUser.username===props.user.username? <i className="bi bi-three-dots" ></i>:<div></div>}          
              </div>

            </div>
      <div className="mb-2">
        {props.image ?
        <img className="postImg" src={props.image} alt="post "/> :
       <div></div>}
      </div>
      <div className="interactionsContainer mb-2">
          <div className="d-flex"> <div className="ml-3 mb-0 mr-0">{`${props.likes?.length}`}</div><i className="bi bi-hand-thumbs-up ml-0" onClick={()=>{handleClose3();handleShow3();}}></i></div>
      </div >
      
      <div className="d-flex justify-content-around mb-1 ml-4 border-top interactionButtons">
        <Button className="d-flex align-items-center font-weight-bolder" onClick={() => {props.giveLike(props.postId,props.currentUser._id)}} style={{color: "grey"}} variant="white">
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
                        <Row>                          
                          <Col md={2} className="pl-0 ml-auto">
                          <Button 
                            type="button"
                            onClick={(e)=>{props.editPost(text, props.postId);}}                         
                            variant="outline-dark"
                            style={{ borderRadius: "30px", fontWeight: "bold"}}>
                            Post
                         </Button>
                         </Col>
                        </Row>
              
                         
                         </Form>
                  </Modal.Body>
             
            </Modal>
            <Modal size="sm" show={show3} onHide={() => {handleClose3()}} className="modal-image">
                              <Modal.Header closeButton >
                              <Modal.Title className="font-weight-bold" style={{fontSize: "20px"}}>Liked By:</Modal.Title>
                              </Modal.Header>                              
                              <Modal.Body>
                              {/* {props.likes.map((person, index)=>{
                                <div  key={index + "like"}>

                                </div>
                              }} */}
                              </Modal.Body>
                              
                        </Modal>
                        </>
   
)


}
export default  connect(mapStateToProps, mapDispatchToProps)(NewsFeed)