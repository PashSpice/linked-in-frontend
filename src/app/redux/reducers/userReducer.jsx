import { initialState } from "../store/store";
import { SIGN_UP, SIGN_IN, SIGN_OUT, GET_FRIENDS, GET_OTHER } from "../actions/actions";
const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
      case SIGN_UP:
        return {
          ...state,
          users: [...state.users, action.payload]         
        };        
      case SIGN_IN:
        return {
          ...state,
      
          activeUser: action.payload         
        };       
      case SIGN_OUT:
        return {
          ...state,
          activeUser: {}          
        };       
      
      case GET_FRIENDS:
        return {
          ...state,
          friends: action.payload          
        };       
      case GET_OTHER:
        return {
          ...state,
          otherUser: action.payload          
        };       
      
      default:
        return state; 
    }
  };
export default userReducer;