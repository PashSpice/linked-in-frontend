import { Button, Card } from "react-bootstrap"
import { connect } from "react-redux";
import { upload, uploadPicWithThunk } from "../app/redux/actions/actions";

const mapStateToProps = state => {
    return {
    uploaded: state.logic.upload,
    currentUser: state.user.activeUser
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      uploadToState: file => {
        dispatch(upload(file));
      },
      uploadToSite: (file,id) =>{
        dispatch(uploadPicWithThunk(file,id))
      }
      
    };  
  };
const FileUploadTestComp = (props)=>{
    const uploadImage = ()=>{
        const formData = new FormData();
        formData.append("profile", props.uploaded)
        props.uploadToSite(formData,props.currentUser._id);
    }
    return(
<div>
<Card className="mt-4 pl-2 pr-2" style={{ width: '18rem', borderRadius: "12px", height: '5rem'}}>
    {props.uploaded.length>0 && <img src={props.uploaded} alt="uploaded"/>}
<input type="file" onChange={(e)=>{
    props.uploadToState(e.target.files[e.target.files.length-1]);
}}></input>
<Button className="btn btn-primary" variant="outline-primary" onClick={()=>{uploadImage(); console.log("uploadedImage", props.uploaded)}}>Upload</Button>

</Card>
</div>
)
}
export default connect(mapStateToProps, mapDispatchToProps)(FileUploadTestComp)