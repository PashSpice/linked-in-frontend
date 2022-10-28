import { Card, Row, Col, Button } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react"
import ExperiencesList from "./ExperiencesList"
import ExperiencesEditModal from "./ExperiencesEditModal"
import ExperiencesAddModal from "./ExperiencesAddModal"
import { connect } from "react-redux"
import {handleFetchWithThunk} from '../app/redux/actions/actions';
const mapStateToProps = state => {
   return {
      loadState: state.logic.loading,
      currentUser: state.user.activeUser
   };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
     fetchExperiences: username => {
       dispatch(handleFetchWithThunk(username));
     }
     
   };  
 };

const Experiences = (props) => {

   const [experiences, setExperiences] = useState([])
   const [loading, setLoading] = useState(true)

   const [showAddModal, setShowAddModal] = useState(false);

   const handleCloseAddModal = () => {
      setShowAddModal(false)
       props.fetchExperiences(props.username)
   }
   const handleShowAddModal = () => setShowAddModal(true);

   const [showEditModal, setShowEditModal] = useState(false);
   const [editingExperience, setEditingExperience] = useState(null);

   const handleCloseEditModal = () => {
      setShowEditModal(false)
      props.fetchExperiences(props.username) 
   }
   const handleShowEditModal = (experience) => {
      setEditingExperience(experience)
      setShowEditModal(true)
   }


   useEffect(() => {
      setExperiences(props.currentUser.experiences) 
   }, [])

 
   return (
      <Card className="mt-2 pb-3 mb-4" style={{ width: '46rem', borderRadius: "12px", minHeight: "120px" }}>
         <ExperiencesAddModal userId={props.userId} show={showAddModal} handleClose={handleCloseAddModal} />
         <ExperiencesEditModal userId={props.userId} experience={editingExperience} show={showEditModal} handleClose={handleCloseEditModal} />
         <Row>
            <Col md={10} className="mr-0 mb-3">
               <div className="mt-4 ml-4 font-weight-bold" style={{ fontSize: "20px" }}>Experiences</div>
            </Col>
            {props.canEdit &&
               <Col md={2} className="mt-4">
                  <Button variant="light" style={{ borderRadius: "50%" }}
                     onClick={handleShowAddModal}><i className="bi bi-plus-lg"></i>
                  </Button>
               </Col>
            }
         </Row>
         {experiences &&
            experiences.map((experience, index) => {
               return <div key={index + "exp"}>
                  <Row>
                     <Col md={10}>
                        <ExperiencesList experience={experience} /* fetchExperiences={fetchExperiences} */ />
                     </Col>
                     {props.canEdit &&
                        <Col md={2}>
                           <Button variant="light" style={{ borderRadius: "100%" }}
                              onClick={() => handleShowEditModal(experience)}><i className="bi bi-pencil"></i>
                           </Button>
                        </Col>
                     }
                  </Row>
               </div>
            })}
      </Card>
   )

}
export default  connect(mapStateToProps, mapDispatchToProps)(Experiences)