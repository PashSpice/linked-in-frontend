import { Card, Row, Col} from "react-bootstrap"


const EditProfile = () => {

      

      return (
            <Card className="mt-4"style={{ width: '22rem', borderRadius: "12px", height: "120px" }}>
                  <Row className="mt-3 ml-2">
                        <Col md={9}>
                        <div className="font-weight-bold" style={{color: "#666666", textDecoration: "underline" }}>Edit public profile & URL</div>
                        </Col>
                        <Col md={3}>
                        <i className="bi bi-question-circle-fill pl-3"></i>
                        </Col>
                  </Row>
                  <hr className="ml-3" style={{width: "90%"}}/>
                  <Row className=" ml-2">
                        <Col md={9} className="pr-0">
                        <div className="font-weight-bold" style={{color: "#666666", textDecoration: "underline" }}>Add profile in another language</div>
                        </Col>
                        <Col md={3}>
                        <i className="bi bi-question-circle-fill pl-3"></i>
                        </Col>
                  </Row>
            </Card>
      )
}
export default EditProfile