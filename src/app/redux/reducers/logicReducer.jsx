import { initialState } from "../store/store";
import { LOADING,SEARCH, LIKE, UNLIKE, GET_POSTS, CLEAR_POSTS, GET_MORE_POSTS, ADD_TO_FEED, GET_PICS, UPLOAD, DELETE } from "../actions/actions";
const logicReducer = (state = initialState.logic, action) => {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
        
            loading: action.payload      
        };        
      case SEARCH:
        return {
          ...state,
          search: action.payload          
        };       
      case LIKE:
        return {
          ...state,
         liked: [...state.liked, action.payload]          
        };       
      case UNLIKE:
        return {
          ...state,
         liked: [...state.liked.filter((post) => post._id !== action.payload._id)]    
        }; 
      case GET_POSTS:
        return{
          ...state,
          posts: action.payload
        }      
      case CLEAR_POSTS:
        return{
          ...state,
          posts: action.payload
        }      
      case GET_MORE_POSTS:
        return{
          ...state,
          posts: [/* ...state.posts, */ ...action.payload]
        }      
      case ADD_TO_FEED:
        return{
          ...state,
          feed: [...state.feed, ...action.payload]
        }      
      case GET_PICS:
        return{
          ...state,
          pics: [...state.pics, ...action.payload]
        }     
      case UPLOAD:
        return{
          ...state,
          upload: action.payload
        }      
      case DELETE:
        return{
          ...state,
          posts: [...state.posts.filter((post) => post._id !== action.payload._id)]
        }      
      
      default:
        return state; 
    }
  };
export default logicReducer;