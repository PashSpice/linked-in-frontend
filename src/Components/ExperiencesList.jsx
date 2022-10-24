import { Col, Container, Row, Image} from 'react-bootstrap'

const ExperiencesList = (props) => {

      return (
           
            <Container className="" style={{maxHeight: "200px"}}>
                  <Row>
                  <Col md={1}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3OEVxWnMEGekDEUZA-ScFV4xT6AiDvx12JFU1fL7nA&s"
                        style={{ width: "50px"}} />
                  </Col>
                  <Col md={11}>
                     <div className="font-weight-bold">{props.experience.role}</div>
                     <div className="" style={{marginTop: "-4px"}}>{props.experience.company}</div>
                     <div style={{fontSize: "13px"}}> 
                     <span> From </span>{props.experience.startDate.slice(0,10)} 
                     <span> to </span>{props.experience.endDate?.slice(0,10)}
                     </div>
                     <div style={{fontSize: "13px"}}>{props.experience.area}</div>
                     <div className="mt-3" style={{fontSize: "14px"}}>{props.experience.description}</div>
                  </Col>
                 </Row>
                 <hr className="w-100 mx-0"/>
            </Container>
            
           
      )
}

export default ExperiencesList