export const LOADING = " LOADING";
export const SEARCH = "SEARCH";
export const LIKE = " LIKE";
export const UNLIKE = "UNLIKE";
export  const SIGN_UP = "SIGN_UP";
export  const SIGN_IN = "SIGN_IN";
export  const SIGN_OUT = "SIGN_OUT";
export  const GET_FRIENDS = "GET_FRIENDS";
export  const GET_OTHER = "GET_OTHER";
export  const GET_POSTS = "GET_POSTS";
export  const CLEAR_POSTS = "CLEAR_POSTS";
export  const GET_MORE_POSTS = "GET_MORE_POSTS";
export  const ADD_TO_FEED = "ADD_TO_FEED";
export  const GET_PICS = "GET_PICS";
export  const UPLOAD = "UPLOAD";
export  const DELETE = "DELETE";


export const setLoading =isLoading =>({
    type:LOADING,
    payload: isLoading
  });
export const setSearch =query =>({
    type:SEARCH,
    payload: query
  });
export const setLike =post =>({
    type:LIKE,
    payload: post
  });
export const setUnLike =post =>({
    type:UNLIKE,
    payload: post
  });
export const setSignUp =person =>({
    type:SIGN_UP,
    payload: person
  });
export const setSignIn =person =>({
    type:SIGN_IN,
    payload: person
  });
export const setSignOut =person =>({
    type:SIGN_OUT,
    payload: person
  });
export const setFriends =people =>({
    type: GET_FRIENDS,
    payload: people
  });
export const setOther =otherUser =>({
    type: GET_OTHER,
    payload: otherUser
  });
export const setPosts =people =>({
    type: GET_POSTS,
    payload: people
  });
export const clearPosts = () =>({
    type: CLEAR_POSTS,
    payload: {}
  });
export const setMorePosts =people =>({
    type: GET_MORE_POSTS,
    payload: people
  });
export const addToFeed =posts =>({
    type: ADD_TO_FEED,
    payload: posts
  });
export const getPics =posts =>({
    type: GET_PICS,
    payload: posts
  });
export const upload =posts =>({
    type: UPLOAD,
    payload: posts
  });
export const delPost =post =>({
    type: DELETE,
    payload: post
  });

export const handleFetchWithThunk = (username) => {
 console.log(process.env.REACT_APP_SERVER_URL)
    const options = {
        method: 'GET' ,
        headers: {Authorization: username} 
      };
 const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}users/me`
  /* console.log("1 get-me-think") */
  return async (dispatch, getState)=>{
    try {
       /* console.log("2 get-me-thank",username)  */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        
         dispatch(setSignIn(data)) 
       /* console.log("thick n THunky",data); */
      } else {
        console.log('Error fetching user')
        alert("Invalid Username")
      }
    } catch (error) {
      console.log(error)
    }finally{/* console.log("3 get-me-thunk") */;dispatch(setLoading(false));}
  }}


  export const addUserWithThunk = (newUser, pic) => {
    
    const options = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newUser) 
      };
 const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}users/`
  /* console.log("1 get-me-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-me-thank",baseEndpoint+id) */
      dispatch(setLoading(true));
      console.log(newUser)
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        const userData = {_id:data._id, ...newUser}
        dispatch(uploadPicWithThunk(pic, userData._id,userData.username))              
         
       /* console.log("thick n THunky",data); */
      } else {
        console.log('Error fetching user')        
      }
    } catch (error) {
      console.log(error)
    }finally{/* console.log("3 get-me-thunk") */;dispatch(setLoading(false));}
  }}


  
export const getFriendsWithThunk = (id) => {
    const options = {
        method: 'GET'
    };
  const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}users/`
 /*  console.log("1 get-friends-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-friends-thank",baseEndpoint) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setFriends(data.users))
       /* console.log("so manyfriends!",data); */
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
       console.log(error) 
    }finally{/* console.log("3 get-friends-thunk") */;dispatch(setLoading(false));}
  }}

export const getFriendWithThunk = (id) => {
    const options = {
        method: 'GET'
    };
  const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}users/${id}`
 /*  console.log("1 get-friends-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-friends-thank",baseEndpoint) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setOther(data))
       /* console.log("so manyfriends!",data); */
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
       console.log(error) 
    }finally{/* console.log("3 get-friends-thunk") */;dispatch(setLoading(false));}
  }}



export const getPostsWithThunk = () => {
    const options = {
        method: 'GET'
    };
  const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}posts/`
  /* console.log("1 get-post-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-post-thank",baseEndpoint) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        let  data  = await response.json()
        data = data.posts.reverse()
        dispatch(clearPosts())
        dispatch(setPosts(data))
        dispatch(addToFeed(data.slice(0,15)))
       console.log("PostPocalypse!",data);
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      /* console.log(error) */
    }finally{/* console.log("3 get-post-thunk") */;dispatch(setLoading(false));}
  }}
  
export const deletePostsWithThunk = (id) => {
    const options = {
        method: 'DELETE'
    };
  const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}posts/`
  return async (dispatch, getState)=>{
    try {
      
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint + id, options);
      if (response.ok) {    
       await  dispatch(delPost(id))
        await dispatch(setPosts({}))   
           dispatch(getPostsWithThunk())
          
       console.log("deleted");
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      /* console.log(error) */
    }finally{ console.log("3 Del-post-thunk");dispatch(setLoading(false));window.location.reload()}
  }}
  
  
  
  export const getMorePostsWithThunk = (posts, n=2) => {
    const options = {
      method: 'GET'
    };
  const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}posts/`
  /* console.log("1 get-post-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-post-thank",baseEndpoint) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setMorePosts(data.reverse().slice(posts.length, posts.length + n)))
        /* console.log("PostPocalypse!",data); */
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{/* console.log("3 get-post-thunk") */;dispatch(setLoading(false));}
  }}

  
  export const uploadPicWithThunk = (postObj,id,username) => {
    const options = {
      method: 'PUT',
      body: postObj
      };
      const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}users/images/${id}/pic`
    console.log("1 submit-post-think")
    return async (dispatch, getState)=>{
      try {
        console.log("2 submit-post-thank",baseEndpoint)
        
        const response = await fetch(baseEndpoint, options);
        if (response.ok) { 

          dispatch(setLoading(true))  
          dispatch(handleFetchWithThunk(username))       
         console.log("PostEntered!");         

        } else {
          alert('Error fetching results')
        }
      } catch (error) {
        console.log(error)
      }finally{console.log("3 submit-post-thunk");}
    }}
    
//export const getPicsWithThunk = () => {
//  const options = {
//    method: 'GET',
//    headers: {
//      Authorization: '' +" "+ pexelKey
//    }
//  };
//  const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}posts/`
//  /* console.log("1 get-post-think") */
//  return async (dispatch, getState)=>{
//    try {
//      /* console.log("2 get-post-thank",baseEndpoint) */
//      dispatch(setLoading(true));
//      const response = await fetch(baseEndpoint, options);
//      if (response.ok) {
//        let  data  = await response.json()
//        data = data.reverse()
//        dispatch(setPosts(data))
//        dispatch(addToFeed(data.slice(0,15)))
//        /*  console.log("PostPocalypse!",data); */
//      } else {
//        alert('Error fetching results')
//      }
//    } catch (error) {
//    /* console.log(error) */
//  }finally{/* console.log("3 get-post-thunk") */;dispatch(setLoading(false));}
//}}



export const postFeedImgWithThunk = (postImg,id) => {
  const options = {
    method: 'PUT',
        body: postImg
    };
    const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}posts/${id}`
  console.log("1 submit-post-think")
  return async (dispatch, getState)=>{
    try {
      console.log("2 submit-post-thank",baseEndpoint)
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) { 
        dispatch(setLoading(false))         
        console.log("PostEntered!");
        window.location.reload()
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{console.log("3 submit-post-thunk");}
  }}




      export const editPostsWithThunk = (postObj, id) => {
          const options = {
              method: 'PUT',
              headers:{"Content-Type":"application/json"},
              body: JSON.stringify(postObj)
          };
        const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}posts/`
        console.log("1 submit-post-think")
        console.log(options.body, 'postObj')
        return async (dispatch, getState)=>{
          try {
            console.log("2 submit-post-thank",baseEndpoint)
            dispatch(setLoading(true));
            const response = await fetch(baseEndpoint + id, options);
            if (response.ok) {
              const  data  = await response.json();
              
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }finally{console.log("3 submit-post-thunk");dispatch(setLoading(false));}
        }}


      export const submitPostsWithThunk = (postObj, postImg = null) => {
          const options = {
              method: 'POST',
              headers:{'Content-Type': 'application/json'},            
              body: JSON.stringify(postObj)
          };
        const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}posts/`
        console.log("1 submit-post-think")
        return async (dispatch, getState)=>{
          try {
            console.log("2 submit-post-thank",baseEndpoint)
            dispatch(setLoading(true));
            const response = await fetch(baseEndpoint, options);
            if (response.ok) {
              const  data  = await response.json();
              console.log("postDataResponse:",data, postImg);
              for(let key of postImg.entries()){
                console.log(key)}
               /* postImg.length >0 ?  */dispatch(postFeedImgWithThunk(postImg, data._id))/* :console.log("nodata") */; 
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }finally{console.log("3 submit-post-thunk");dispatch(setLoading(false));}
        }}

        export const addExperienceWithThunk = (postObj, id) => {
          const options = {
              method: 'PUT',
              body: JSON.stringify(postObj)
          };
        const baseEndpoint = `${process.env.REACT_APP_SERVER_URL}users/experience/${id}`
        console.log("1 submit-post-think")
        return async (dispatch, getState)=>{
          try {
            console.log("2 submit-post-thank",baseEndpoint)
            dispatch(setLoading(true));
            const response = await fetch(baseEndpoint, options);
            if (response.ok) {
              const  data  = await response.json();
              console.log("added experience:",data);              
               /*  window.location.reload();  */
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }finally{console.log("3 submit-post-thunk");dispatch(setLoading(false));}
        }}
        