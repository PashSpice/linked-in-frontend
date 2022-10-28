import { Col, Container, Row, Card,Image } from "react-bootstrap"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Experiences from "./Experiences";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import HeaderProfileFriend from "./HeaderProfileFriend";
import { connect } from "react-redux";


const mapStateToProps = state => {
   return {
   loadState: state.logic.loading   
   };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
     fetchUser: id => {
       dispatch((id));
     }
   };  
 };
const Profile = (props) => {
   const params = useParams()

   const [state, setState] = useState({      
      user: undefined
   })


   useEffect(() => {
      props.fetchUser(params.userId)
   }, [])

  

   return (
      
      <Container style={{transform: "translateY(50px)"}}>
         {state.user &&
            <Row>
               <Col md={8}>
                  <HeaderProfileFriend user={state.user} fetchUser={props.fetchUser} />
                  
                  {/* <Experiences userId={state.user._id} canEdit={false}/> */}
               </Col>

               <Col md={4}>
                  <Card className="mt-4 pl-2 pr-2" style={{ width: '22rem', borderRadius: "12px", height: "280px"}}>
                        <Image src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                        fluid/>                
                  </Card>
                  <PeopleAlsoViewed />
                     
               </Col>
            
            </Row>
              
              
         }
        
      </Container>

   )
}
export default connect(mapStateToProps, mapDispatchToProps)( Profile)