import { Image, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";


const PeopleAlsoViewedPeople = (props) => {

      const navigate = useNavigate();

      return (
            <div className="d-flex pb-3">
                  <Image src={props.friend.image}
                  onClick={() => {
                        navigate(`/profile/${props.friend._id}`);
                        window.location.reload();}}
                  className="clickable"
                  style={{ width: "50px", height: "50px" }}
                  roundedCircle />
                  <div className="profile-details ml-2">
                  <div className="text-left font-weight-bold" id="userName" style={{ fontSize: "14px" }}
                  /* onClick={() => {
                        navigate(`/profile/${props.friend._id}`);
                        window.location.reload();
                  }} */ >{props.friend.name} {props.friend.surname} </div>
                  <div className="profile-title" style={{ fontSize: "12px" }}>{props.friend.title}</div>
                  <div className="profile-message">
                  <Button
                        className="rounded-pill btn-sm d-flex align-items-center mt-1"
                        variant="outline-dark" style={{ width: "100px" }}>
                        <Plus className="ml-2" style={{ fontSize: "20px" }} />
                        Follow
                  </Button>
                  </div>
                  </div>
            </div>
      )
}
export default PeopleAlsoViewedPeople