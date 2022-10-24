import { Card, Row, Modal, Button, Col} from "react-bootstrap"
import { useState } from "react";

const SuggestedMyProfile = () => {

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
            <Card className="mt-2"style={{ width: '46rem', borderRadius: "12px", height: "340px" }}>
                  <Row>
                        <div className="mt-4 ml-5 font-weight-bold" style={{fontSize: "20px"}}>Suggested for you</div>
                 </Row>      
                  <Row>
                       <i className="bi bi-eye-fill ml-5"></i>
                        <div className="ml-2 font-weight-light" style={{fontSize: "15px"}}>Private to you</div>
                  </Row>
                  <Row>
                        <div className="mt-3 ml-5 font-weight-bold" style={{fontSize: "16px"}}>Intermediate</div>
                        {/* line here */}
                 </Row>  
                 <Row>
                        <div className="mt-3 ml-5" style={{fontSize: "15px"}}>Complete 1 step to archive
                        <span className="ml-1" onClick={handleShow} style={{textDecoration: "underline", color: "#0b65c2"}}>All-star</span>
                        </div>
                        <Modal show={show} onHide={handleClose} className="modal-image">
                              <Modal.Header closeButton>
                              <Modal.Title>Profile status</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <div style={{fontSize: "14px"}}>
                                    Profile level shows how complete your profile is. 
                                    Complete the recommended sections and build toward achieving your professional goals.
                              </div>
                              <div className="font-weight-bold mt-3"> Beginner </div>
                              <div style={{fontSize: "14px"}}> All members start off as beginners and completing 4 sections will help you advance to Intermediate.</div>
                              <div className="font-weight-bold mt-3"> Intermediate </div>
                              <div style={{fontSize: "14px"}}> Members with intermediate profiles see more relevant job recommendations and refined connection suggestions. Complete 4 sections to achieve Intermediate.</div>
                              <div className="font-weight-bold mt-3"> All-star </div>
                              <div className="mb-3" style={{fontSize: "14px"}}> Members with All-star profiles see more relevant feed updates and receive more profile views. Complete 7 sections to achieve All-star.</div>
                              </Modal.Body>
                        </Modal> 
                 </Row>  
                 <Row>
                  <Card className="mt-3 ml-5"style={{ width: '42rem', borderRadius: "8px", height: "140px" }}>
                        <Row>
                             <Col md={1} > 
                             <i className="bi bi-briefcase-fill ml-3" style={{fontSize: "40px"}}></i>
                              </Col>
                              <Col md={10} className="mt-3">
                              <span className="ml-3 font-weight-bold">Where do you currently work?</span>
                              </Col>
                              <Col md={1} className="mt-2">
                              <i className="bi bi-x-lg"></i>
                              </Col>
                        </Row> 
                        <Row>
                              <span className="ml-4" style={{fontSize: "15px"}}>Members who include at least one position receive up to 3.5 times as many profile views.</span>
                        </Row>
                        <Row>
                              <Button variant="outline-secondary" className="ml-4 mt-2" style={{borderRadius: "30px", fontWeight: "bold"}}>
                              Add position
                              </Button>
                        </Row>
                  </Card>
                 </Row>
            </Card>
      )
}
export default SuggestedMyProfile