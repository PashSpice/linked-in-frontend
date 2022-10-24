import { Card, Row, Col }from "react-bootstrap"
import PeopleAlsoViewedPeople from "./PeopleAlsoViewedPeople"
import { connect } from "react-redux";
import { getFriendsWithThunk } from "../app/redux/actions/actions";
import { useEffect } from "react";

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

const PeopleAlsoViewed = (props) => {
      let  friendsWithPics = [...props.friendList.filter(friend => friend.image !== "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png")]
      useEffect(()=>{
            props.getFriends()
        },[]) 
      

      return (
            <Card className="mt-2 mb-4"style={{ width: '22rem', borderRadius: "12px", height: "600px" }}>
                  <Row>
                        <div className="mt-3 ml-4 pl-3 font-weight-bold" style={{fontSize: "17px"}}>People also viewed</div>     
                 </Row>  
                  <div className="pl-2 mt-3">
                  {props.friendList&&
                  friendsWithPics.slice(10,15).map((friend, index) => 
                  <Col key={index}>
                        <PeopleAlsoViewedPeople friend={friend}/>
                  </Col>
                  )} 
                  </div>
                  <hr className="" style={{width: "100%"}}/>
                  <Col className="text-center">
                        <div className="font-weight-bold" style={{color: "#666666"}}>Show more
                        <span className="ml-1"><i className="bi bi-chevron-compact-down"></i></span>
                        </div>
                  </Col>
                     
            </Card>
      )
}
export default  connect(mapStateToProps, mapDispatchToProps)(PeopleAlsoViewed)