import { Card, Row, Col } from "react-bootstrap"


const Analytics = () => {

      

      return (
            <Card className="mt-2"style={{ width: '46rem', borderRadius: "12px", height: "200px" }}>
                 <Row>
                        <div className="mt-4 ml-5 font-weight-bold" style={{fontSize: "20px"}}>Analytics</div>
                 </Row>  
                 <Row>
                        <i className="bi bi-eye-fill ml-5"></i>
                         <div className="ml-2" style={{fontSize: "15px"}}>Private to you</div>
                  </Row>
                  <Row className="px-4 mt-3">
                        <Col md={4}>
                              <Col>
                                    <i className="bi bi-people-fill" style={{fontSize: "25px"}}></i>
                                    <span className="ml-2 font-weight-bold" style={{fontSize: "16px"}}>49 profile views</span>
                                    <div className="ml-4 pl-2" style={{fontSize: "13px"}}>Discover who's viewed your profile.</div>
                              </Col>
                        </Col>
                        <Col md={4}>
                        <Col>
                                    <i className="bi bi-bar-chart-line-fill" style={{fontSize: "25px"}}></i>
                                    <span className="ml-2 font-weight-bold" style={{fontSize: "16px"}}>824 post</span>
                                    <div className="ml-4 pl-2" style={{fontSize: "13px"}}>Check out who's engaging with you.</div>
                              </Col>
                        </Col>
                        <Col md={4}>
                        <Col>
                                    <i className="bi bi-search" style={{fontSize: "25px"}}></i>
                                    <span className="ml-2 font-weight-bold" style={{fontSize: "16px"}}>19 search</span>
                                    <div className="ml-4 pl-2" style={{fontSize: "13px"}}>See how often you appear in search.</div>
                              </Col>
                        </Col>     
                  </Row>
            </Card>
      )
}
export default Analytics