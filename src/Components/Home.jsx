import { useEffect } from "react";
import { Container, Row, Col, Card,Image} from "react-bootstrap";
import { connect } from "react-redux";
import { addToFeed, setSearch } from '../app/redux/actions/actions';
import FooterRightSide from "./FooterRightSide";
import RightSideBar from "./RightSideBar";
import AddPost from "./AddPost";
import Loader from './Loader';
import LeftSideBar from "./LeftSideBar";
import LeftDownSideBar from "./LeftDownSideBar";
import NewsFeed from "./NewsFeed";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPostsWithThunk } from "../app/redux/actions/actions";
import { Translate } from "react-bootstrap-icons";

const mapStateToProps = state => {
    return {
    loadState: state.logic.loading,
    postList: state.logic.posts,
    feed: state.logic.feed,  
    query: state.logic.search
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setQuery: query => {
        dispatch(setSearch(query));
      },
      getAllPosts: people => {
        dispatch(getPostsWithThunk());
      },
      getMorePosts: (posts,n) => {
        dispatch(getPostsWithThunk(posts,n));
      },
      addToFeed: posts => {
        dispatch(addToFeed(posts));
      }
      
    };  
  };
const Home = (props)=>{  
  

function addMoreToFeed(){
  props.addToFeed(props.postList.slice(props.feed.length, props.feed.length+15))
}

  useEffect(()=>{
    props.getAllPosts()
  },[]) 

  useEffect(()=>{
  },[props.feed]) 

return(
<>
{console.log("loading:",props.loadState)}
<Container style={{transform: "translateY(50px)"}}>
{props.loadState && <Loader/>}

  <Row>
    <Col xs={12} md={4} lg={3}>
      <LeftSideBar/>
      <LeftDownSideBar/>
    </Col>
    <Col xs={12} md={6} lg={6} style={{ height: "100%" }}>
     <div className="border-bottom pb-3">
     <AddPost />
     </div>
     <InfiniteScroll
        dataLength={props.feed.length} 
        next={addMoreToFeed}
        hasMore={true}
        loader={<div className="d-flex justify-content-center overflow-hidden">
          <h4>Loading...</h4>
        </div>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Congrats! You've linked all the way in!</b>
          </p>
        }

      >
          {<div>
            {props.feed.filter((post)=>post.text.toLowerCase().includes(props.query.toLowerCase()) ).map((post, index)=><NewsFeed key={index} user={post.user} image={post.image} createdAt={post.createdAt} username={post.username} text={post.text} postId={post._id}  />)}
            </div>}   
      </InfiniteScroll>
     
    </Col>
    <Col md={3}>
      
      <RightSideBar style={{zIndex:0}} />
      <Card className="mt-3 pl-2 pr-2" style={{ width: '18rem', borderRadius: "12px", height: "220px"}}>
      <Image src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                        fluid/>                        
      </Card>
      <FooterRightSide />
    </Col>
  </Row>
</Container>
</>
)
}
export default connect(mapStateToProps, mapDispatchToProps)( Home)