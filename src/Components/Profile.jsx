import { Col, Container, Row, Card,Image } from "react-bootstrap"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Experiences from "./Experiences";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import HeaderProfileFriend from "./HeaderProfileFriend";




const Profile = (props) => {
   const params = useParams()

   const [state, setState] = useState({
      loading: false,
      user: undefined
   })


   useEffect(() => {
      fetchUser(params.userId)
   }, [])

   const fetchUser = async (id) => {
      const options = {
         method: 'GET',
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjY2NDE3MTMsImV4cCI6MTY2Nzg1MTMxM30.vxYdNt2LLznO0U7RmaS7_xKllgxqLcMKZcHjSJAR-ok'

         }
      };

      const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/profile/'
      console.log("1 fetch user")
      setState({
         user: undefined,
         loading: true
      })
      const response = await fetch(baseEndpoint + id, options);
      if (response.ok) {
         const data = await response.json()
         setState({
            loading: false,
            user: data
         })
         console.log("data: ", data);
      } else {
         alert('Error fetching results')
         setState({
            loading: false,
            user: undefined
         })
      }
   }


   return (
      
      <Container>
         {state.user &&
            <Row>
               <Col md={8}>
                  <HeaderProfileFriend user={state.user} fetchUser={fetchUser} />
                  
                  <Experiences userId={state.user._id} canEdit={false}/>
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
export default Profile