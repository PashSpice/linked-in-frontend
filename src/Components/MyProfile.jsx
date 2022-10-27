import { Col, Container, Row, Card, Image} from "react-bootstrap"
import { connect } from "react-redux";
import HeaderProfile from "./HeaderProfile"
import Experiences from "./Experiences";
import SuggestedMyProfile from "./SuggestedMyProfile";
import Analytics from "./Analytics";
import EditProfile from "./EditProfile";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import About from "./About";


const mapStateToProps = state => {
      return {
            loadState: state.logic.loading,
            currentUser: state.user.activeUser
      };
};
    
const MyProfile = (props) => {

return (

      <Container style={{transform: "translateY(50px)"}}>
            <Row>
                  <Col md={8}>
                        <HeaderProfile user={props.currentUser}/>

                        <SuggestedMyProfile />
                  
                        <Analytics />
                        
                        <About user={props.currentUser}/>

                        <Experiences userId={props.currentUser._id} canEdit={true}/>


                  </Col>

                  <Col md={4}>
                        <EditProfile />

                        <Card className="mt-2 pl-2 pr-2" style={{ width: '22rem', borderRadius: "12px", height: "280px"}}>
                              <Image src={"https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"}
                              fluid/>                 
                        </Card>

                       <PeopleAlsoViewed />

                  </Col>
            </Row>
           
      </Container>

)
}
export default connect(mapStateToProps) (MyProfile)