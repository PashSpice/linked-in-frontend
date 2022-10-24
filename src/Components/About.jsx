import { Card, Row} from "react-bootstrap"


const About= (props) => {

      

      return (
            <Card className="mt-2"style={{ width: '46rem', borderRadius: "12px", height: "130px" }}>
                 <Row>
                        <div className="mt-4 ml-5 font-weight-bold" style={{fontSize: "20px"}}>About</div>
                 </Row>  
                 <Row>
                         <div className="ml-5 mt-2 pr-5" style={{fontSize: "14px"}}>{props.user.bio}</div>
                  </Row>

               
            </Card>
      )
}
export default About