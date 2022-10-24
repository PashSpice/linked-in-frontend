import { Container, Col, Image, Row, Card } from "react-bootstrap";
import "../css/LeftSideBar.css"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const mapStateToProps = state => {
  return {
  loadState: state.logic.loading,
  currentUser: state.user.activeUser
  };
};

const LeftSideBar = (props) => {

const navigate = useNavigate();

 return (


     <Card className="mt-4"style={{ width: '15rem', borderRadius: "12px" }}>
      <Col className="d-flex flex-column justify-content-center">

        <Image 
          src="https://media.istockphoto.com/videos/defocused-seamless-loop-background-video-id1016831586?s=640x640"
          id="backgroundImage" fluid/>

        <Row className="d-flex flex-column align-items-center ">
        <Image className="clickable" src={props.currentUser.image}  roundedCircle id="userImage"onClick={() => {
                navigate("/profile");
              }} />
          <div className="mb-3 mt-n3 text-center">
            <div
              className="font-weight-bold mt-5"
              id="userName" 
              onClick={() => {
                navigate("/profile");
              }}>
             {props.currentUser.name} {props.currentUser.surname}
            </div>
            <div className="text-muted fontSize mt-1 px-2" style={{fontSize: "12px"}}> 
            {props.currentUser.title}
            </div>
          </div>
          <hr className="w-100 mx-0"/>
        </Row>

        <Row className="">
          <div className="pl-3" style={{ fontSize: "14px" }}>
            <div className="d-flex justify-content-between">
              <div className="text-muted mr-5">Connections</div>
              <div className="font-weight-bold pl-4"
                style={{ color: "#0b65c2", marginRight: "20px"}}>500 +
              </div>
            </div>
          </div>
          <hr className="w-100 mx-0"/>
        </Row>

        <Row className="">
          <div className=" my-2" style={{ fontSize: "12px" }}>
            <div className="text-muted items pl-3"> 
            Access exclusive tools & insights
            </div>
            <div className="d-flex flex-row">
              <div>
                <i className="bi bi-square-half pl-3" style={{ color: "gold" }}></i>
              </div>
              <div className="font-weight-bold  px-2" style={{textDecoration: "underline"}}>
                Try Premium for free
              </div>
            </div>
          </div>
          <hr className="w-100 mx-0"/>
        </Row>
       
        <Row className="fontSize headerMiniTag">
          <div
            className="d-flex flex-row pl-3 mb-3"
            style={{ fontSize: "15px" }}>
            <div>
              <i className="bi bi-bookmark-fill mr-2"></i>
            </div>
            <div className="font-weight-bold px-2">
              My items
            </div>
          </div>
        </Row>
      </Col>
      </Card>

  
 )
}
export default connect(mapStateToProps)(LeftSideBar)