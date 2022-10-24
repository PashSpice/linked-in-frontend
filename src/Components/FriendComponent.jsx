import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";


const FriendComponent = (props)=>{
  const navigate = useNavigate();

   return(

<>
    <div>
                  <div className="d-flex">
                  <div className="profilePicStyle">
           {props.friend?.image ?   
            <img className="profImg clickable" 
            onClick={() => {
                navigate(`/profile/${props.friend._id}`);
                window.location.reload();}}
                 src={props.friend?.image} alt="profile pic"/> :
                  <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="prof pic"/> }
              </div>
                    <div className="profile-details ml-2 mt-2">
                      <div className="text-left font-weight-bold" id="userName" 
                       onClick={() => {
                        navigate(`/profile/${props.friend._id}`);
                      }}
                      >{props.friend?.name+" "+props.friend?.surname}</div>
                      <div className="profile-title" style={{fontSize: "12px"}}>{props.friend?.title}</div>
                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center mt-1"
                          variant="outline-dark" style={{width: "100px"}}>
                          <Plus className="ml-2"style={{ fontSize: "20px"}}/>
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
    </div>
                
</>
)
}

export default FriendComponent