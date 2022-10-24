import { Card,Image, Row, Col, Button, Modal, ModalBody} from "react-bootstrap"
import { useState } from "react";
import FileUploadTestComp from "./FileUploadTestComp";


const HeaderProfileFriend = (props) => {
     
      const [show, setShow] = useState(false);


      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

  

       

return (
      <Card className="mt-4"style={{ width: '46rem', borderRadius: "12px", height: "450px"}}>
                  <Image 
                  src="https://media.istockphoto.com/videos/defocused-seamless-loop-background-video-id1016831586?s=640x640"
                  style={{backgroundSize: "cover", height: "200px",  borderRadius: "10px 10px 0 0"}} fluid/>
                   <Image  className="ml-5 clickable"
                   src={props.user.image} roundedCircle 
                   style={{ height: "150px", width: "150px", marginTop: "-100px", border: "5px solid white"}}
                   />
                   <Row>
                         <Col md={8}>
                         <div className="ml-4 pl-3 font-weight-bold" style={{fontSize: "27px"}}>{props.user.name} {props.user.surname}
                         <span className="font-weight-light ml-2" style={{fontSize: "15px"}}>(he/him)</span>
                         </div>
                         </Col>
                         <Col md={4}>
                          <div className="mt-3">
                          <Image 
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3OEVxWnMEGekDEUZA-ScFV4xT6AiDvx12JFU1fL7nA&s"
                              style={{ width: "30px"}} />
                             <span className="ml-2 font-weight-bold">Epicode Global</span>
                          </div>     
                         </Col>
                   </Row>
                   <Row>
                         <div className="ml-5 pl-2">{props.user.title}</div>
                   </Row>
                   
                   <Row>
                         
                         <div className="ml-5 pl-2 font-weight-lighter" style={{fontSize: "15px"}}>{props.user.area}</div>
                         <div className="ml-2" onClick={handleShow}>
                              <span className="" style={{fontSize: "15px", textDecoration: "underline", color: "#0b65c2"}}>Contact info</span>
                        </div>
                         <Modal show={show} onHide={handleClose} className="modal-image">
                              <Modal.Header closeButton>
                              <Modal.Title style={{fontSize: "20px"}}>{props.user.name} {props.user.surname}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                    <div className="mb-3" style={{fontSize: "20px"}}>Contact Info</div>
                              <Row className="ml-1">
                                    <i className="bi bi-linkedin" style={{fontSize: "20px"}}></i>
                                    <span className="ml-4 mt-1 font-weight-bold">Your profile</span>
                              </Row>
                                    <div className="font-weight-bold ml-5" style={{color: "#0b65c2", fontSize: "14px"}}>linkedin.com/in/{props.user._id}</div>
                              <Row className="ml-1 mt-3">
                                    <i className="bi bi-envelope" style={{fontSize: "20px"}}></i>
                                    <span className="ml-4 mt-1 font-weight-bold">Email</span>
                              </Row>
                                    <div className="font-weight-bold ml-5" style={{color: "#0b65c2", fontSize: "14px"}}>{props.user.email}</div>
                              </Modal.Body>
                              <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                              Close
                              </Button>
                              </Modal.Footer>
                        </Modal>

                   </Row>
                   <Row>
                        <div className="font-weight-bold ml-5 pl-2"
                        style={{ color: "#0b65c2", marginRight: "20px"}}>500+ connections
                        </div>
                   </Row>
                   <Row>
                   <Button className="ml-5 mt-3" style={{borderRadius: "30px", fontWeight: "bold", backgroundColor: "#0b65c2" }}>
                     Message
                   </Button>
                   <Button 
                   className="ml-3 mt-3"  style={{borderRadius: "30px", fontWeight: "bold", border: "1px solid #0b65c2", backgroundColor: "white", color:"#0b65c2"}}>
                       More
                   </Button>

                   </Row>

      </Card>
)

}
export default HeaderProfileFriend