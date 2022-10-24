import { Navbar,Container, Nav, FormControl, Form, Image } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/NavBar.css"
import { handleFetchWithThunk, setSearch } from "../app/redux/actions/actions";
import { useEffect } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    loadState: state.logic.loading,
    currentUser: state.user.activeUser,
    query: state.logic.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFetch: person => {
      dispatch(handleFetchWithThunk(person));
    },
    setSearchVal: query =>{
      dispatch(setSearch(query))
    }
    
  };  
};
const NavBar =(props) => {

    useEffect(()=>{
    props.getFetch("me")
},[]) 

return (<>
      

      <Navbar bg="light" expand="lg" className="Navbar">
      <Container>      
        <Navbar.Brand href="/">
        
              <i className="bi bi-linkedin "
              style={{color: "#0b65c2", fontSize: "35px"}}></i>
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
          <div style={{ backgroundColor: "#eef3f8", width: "280px", height: "34px",}}
            className="d-flex justify-content-left align-items-center mt-3">
            <i className="bi bi-search mx-3" style={{ color: "grey", fontSize: "16px" }}></i>
          <Form id="searchBar" className="searchBar d-none d-md-inline-block mr-5">
              <FormControl
                type="text"
                placeholder="Search"
                onChange={(e)=>props.setSearchVal(e.target.value)}
                className="mr-sm-2 "
                style={{
                  backgroundColor: "#eef3f8",
                  border: "none",
                  height: "34px",
                  width: "110%",
                }}
                />
            </Form>
            </div>

      <Navbar.Collapse className="justify-content-end">

         <Nav.Link
            className="d-flex flex-column align-items-center ml-5"
            href="/" style={{width: "90px"}}>
            <i className="icon1 bi bi-house-door-fill" style={{fontSize: "25px"}}>     
            </i>
            <span className="d-none d-md-inline-block" style={{fontSize: "12px"}}>Home</span>
          </Nav.Link>
          <Nav.Link
            className="d-flex flex-column align-items-center pr-3"
            href="#home" style={{width: "90px"}}>
            <i className="icon2 bi bi-people-fill " style={{fontSize: "25px"}}></i>
            <span className="d-none d-md-inline-block mt-n1" style={{fontSize: "12px"}}>Network</span>
          </Nav.Link>
          <Nav.Link
            className="d-flex flex-column align-items-center pr-4"
            href="#home" style={{width: "90px"}}>
            <i className="icon3-4-5 bi bi-briefcase-fill" style={{fontSize: "20px"}}></i>
            <span className="d-none d-md-inline-block mt-n1" style={{fontSize: "12px"}}>Job</span>
          </Nav.Link>
          <Nav.Link
             className="d-flex flex-column align-items-center pr-4"
             href="#home" style={{width: "90px"}}>
            <i className="icon3-4-5 bi bi-chat-dots-fill" style={{fontSize: "20px"}}></i>
            <span className="d-none d-md-inline-block mt-n1" style={{fontSize: "12px"}}>Messaging</span>
          </Nav.Link>
          <Nav.Link
            className="d-flex flex-column align-items-center pr-4"
            href="#home" style={{width: "90px"}}>
            <i className="icon3-4-5 bi bi-bell-fill"  style={{fontSize: "20px"}}></i>
            <span className="d-none d-md-inline-block mt-n1"  style={{fontSize: "12px"}}>Notification</span>
          </Nav.Link>
          <Nav.Link
             className="d-flex flex-column align-items-center pr-4"
             href="/profile" style={{width: "90px"}}>
              <Image className="navPic mt-1" src={props.currentUser.image}/>
            <span className="d-none d-md-inline-block" style={{fontSize: "12px"}}>{props.currentUser.name}</span>
          </Nav.Link>


          <Nav.Link
             className="d-flex flex-column align-items-center "
             href="" style={{width: "90px"}}>
            <i className="icon6 bi bi-grid-3x3-gap-fill" style={{fontSize: "20px"}}></i>
            <span className="d-none d-md-inline-block mt-n1" style={{fontSize: "12px"}}>Work</span>
          </Nav.Link>
          <Nav.Link
            style={{ color: "#915907", width: "100px", textDecoration: "underline"}}
            className="d-flex flex-column align-items-center mt-1 mr-4">
            <div style={{fontSize: "12px"}}>Try Premium <br/> for free</div>

          </Nav.Link>
          </Navbar.Collapse>
          </Nav>
      </Container>
    </Navbar>
               </>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)