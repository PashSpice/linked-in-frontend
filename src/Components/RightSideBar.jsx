import { Button, Card, Container, Row, Image} from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";
import { InfoSquareFill } from "react-bootstrap-icons";
import { getFriendsWithThunk } from "../app/redux/actions/actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import FriendComponent from "./FriendComponent";

const mapStateToProps = state => {
  return {
  loadState: state.logic.loading,
  currentUser: state.user.activeUser,
  friendList: state.user.friends
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFriends: people => {
      dispatch(getFriendsWithThunk());
    },
  };  
};
const RightSideBar = (props) => {
  let friendsWithPics = [];
  useEffect(()=>{
    props.getFriends()
  },[]) 
  friendsWithPics = [...props.friendList.filter(friend => friend.image !== "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png")]
  return (
    <>
    
   {/* {console.log("where my friends at?",friendsWithPics)} 
 */}
 
        <Card className="mt-4 pb-3"style={{ width: '18rem', borderRadius: "12px" }}>
            <div className="pt-3">
              <span className="pl-3 pb-3 text d-flex justify-content-between font-weight-bold">
                Add to your feed 
                <InfoSquareFill className="mr-3 p-1" style={{ fontSize: "22px", color: "gray" }} />
              </span>
              <div className="pl-2">
                <div>
                  <div className="d-flex">                  
                    <div className="profile-details ml-2">
                      
                     {  friendsWithPics.slice(0,3).map((friend,i)=><FriendComponent key={i+friend.name} friend={friend}/>)}

                      </div>
                    </div>
                  </div>
                </div>              
                
                
              </div>
         </Card>
 
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);