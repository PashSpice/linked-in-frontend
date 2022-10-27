import { Form, Button, Modal, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const ExperiencesEditModal = (props) => {
   const [experience, setEditExperience] = useState(null)
   const [loading, setLoading] = useState(true)

   const inputChange = (e) => {
      setEditExperience({
         ...experience,
         [e.target.name]: e.target.value

      })
      console.log(experience)
   }

   useEffect(() => {
      if (props.experience) {
         setEditExperience({
            role: props.experience.role,
            area: props.experience.area,
            company: props.experience.company,
            description: props.experience.description,
            startDate: props.experience.startDate.slice(0, 10),
            endDate: props.experience.endDate.slice(0, 10),
         })
      } else {
         setEditExperience(null)
      }
   }, [props.experience])

   const editExperience = async (event) => {
      event.preventDefault()
      const options = {
         method: 'PUT',
         body: JSON.stringify(experience),
         headers: new Headers({
            "Content-type": "application/json"
         })
      };
      console.log("2 EDIT exp:")
      const baseEndpoint = `${process.env.SERVER_URL}/api/profile/${props.userId}/experiences/${props.experience._id}`
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
         const data = await response.json()
         console.log("data exp:", data)
         setLoading(false)
         props.handleClose()
      } else {
         alert('Error fetching results edit exp')
      }
   }

   const deleteExperience = async (event) => {
      event.preventDefault()
      const options = {
         method: 'DELETE',
         headers: new Headers({
         })
      };
      console.log("2 DELETE exp:")
      const baseEndpoint = `${process.env.SERVER_URL}/api/profile/${props.userId}/experiences/${props.experience._id}`
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
         setLoading(false)
         props.handleClose()
      } else {
         alert('Error fetching results DELETE exp')
      }
   }



   return (
      <Modal size="lg" show={props.show} onHide={props.handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Edit Experience</Modal.Title>
         </Modal.Header>
         {experience &&
            <Modal.Body><Form onSubmit={(event) => editExperience(event)}>
               <Form.Label className="text-muted">Title</Form.Label>
               <Form.Control
                  style={{ height: "30px", marginTop: "-8px", fontSize: "14px" }}
                  className="mb-3"
                  name="role"
                  type="text"
                  placeholder="Ex: Retail Sales Manager"
                  value={experience?.role}
                  onChange={(e) => { inputChange(e) }}
               />
               <Form.Label className="text-muted">Company</Form.Label>
               <Form.Control
                  style={{ height: "30px", marginTop: "-8px", fontSize: "14px" }}
                  className="mb-3"
                  name="company"
                  type="text"
                  placeholder="Ex: Microsoft"
                  value={experience?.company}
                  onChange={(e) => { inputChange(e) }}
               />
               <Form.Label className="" style={{ fontSize: "13px" }}>Location</Form.Label>
               <Form.Control
                  style={{ height: "30px", marginTop: "-8px", fontSize: "14px" }}
                  className="mb-3"
                  name="area"
                  type="text"
                  placeholder="Ex: London, United Kingdom"
                  value={experience?.area}
                  onChange={(e) => { inputChange(e) }}
               />
               <Form.Row>
                  <Form.Group as={Col}>
                     <Form.Label className="text-muted">Start Date</Form.Label>
                     <Form.Control
                        style={{ height: "30px", marginTop: "-8px" }}
                        className="mb-3"
                        name="startDate"
                        type="date"
                        value={experience?.startDate}
                        onChange={(e) => { inputChange(e) }}
                     />
                  </Form.Group>
                  <Form.Group as={Col}>
                     <Form.Label className="text-muted">End Date</Form.Label>
                     <Form.Control
                        style={{ height: "30px", marginTop: "-8px" }}
                        className="mb-3"
                        name="endDate"
                        type="date"
                        value={experience?.endDate}
                        onChange={(e) => { inputChange(e) }}
                     />
                  </Form.Group>
               </Form.Row>
               <Form.Group >
                  <Form.Label className='text-mutted' size="sm"> Description</Form.Label>
                  <Form.Control
                     style={{ marginTop: "-8px", fontSize: "14px" }}
                     className="mb-3"
                     name="description"
                     as="textarea" rows={3}
                     value={experience?.description}
                     onChange={(e) => { inputChange(e) }}
                  />
               </Form.Group>
               <Button
                  className='mt-3'
                  variant="primary"
                  type="submit">
                  Update
               </Button>
            </Form>

            </Modal.Body>
         }
         <Modal.Footer>
            <Button
               variant="secondary" onClick={props.handleClose}>
               Close
            </Button>
            <Button
               variant="primary" onClick={deleteExperience}>
               Delete
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default ExperiencesEditModal