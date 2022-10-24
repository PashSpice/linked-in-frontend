
import { Container, Col, Row, Button, Card} from "react-bootstrap";

const LeftDownSideBar = () => {
  return (
   
     <Card className="mt-4"style={{ width: '15rem', borderRadius: "12px" }}>
        <Col className="px-0">
          <Row className="flex-column mt-2 mx-3">
            <div className="fontSizeRecent text-left font-weight-bolder mb-2" style={{ fontSize: "13px" }}>
              Recent
            </div>
            <div className="recent-divone">
              <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i className="bi bi-calendar"></i>
                <div className="ml-2" style={{ fontSize: "13px" }}>
                   Front End Developer Group
                </div>
              </div>
              <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i className="bi bi-calendar"></i>
                <div className="ml-2" style={{ fontSize: "13px" }}>
                  Full Stack Development
                </div>
              </div>
              <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i className="bi bi-calendar"></i>
                <div className="ml-2"style={{ fontSize: "13px" }}>
                  IT Designer session
                  </div>
              </div>
            </div>
          </Row>

          <Row className="flex-column my-3 mx-3">
            <div className="groups-div">
              <div className="font-weight-bolder text-left mb-2" style={{ fontSize: "13px", color: "#0b65c2" }}>
                    Groups
              </div>
              <div className="">
                <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
                  <i className="bi bi-people-fill"></i>
                  <div className="ml-2"style={{ fontSize: "13px" }}>
                    Javascript Full Stack 
                  </div>
                </div>
                <div className="fontSizeTagSection d-flex align-items-baseline">
                  <i className="bi bi-people-fill"></i>
                  <div className="ml-2"style={{ fontSize: "13px" }}>
                    Front End Developer Group
                  </div>
                </div>
                <div className="fontSizeTagSection d-flex align-items-baseline">
                  <i className="bi bi-people-fill"></i>
                  <div className="ml-2"style={{ fontSize: "13px" }}>
                    UX Designer
                  </div>
                </div>
                <Button variant="link" className="d-block ml-3 pl-1 font-weight-bolder" style={{fontSize: "13px", color: "gray"}}>
                  Show More
                  <i style={{ fontSize: "13px" }}
                    className="bi bi-chevron-compact-down"></i>
                </Button>
              </div>
            </div>
          </Row>

          <Row className="justify-content-between my-1 mx-3 font-weight-bolder">
            <div style={{color: "#0b65c2", fontSize: "13px" }}>Events</div>
            <div>
              <i className="bi bi-plus-lg" id="plusEventsSign"></i>
            </div>
          </Row>

          <Row className="fontSizeGroups mx-3 font-weight-bolder">
            <div style={{color: "#0b65c2", fontSize: "13px" }}>Followed Hashtags</div>
          </Row>

          <hr className="w-100 mx-0"/>
          <Row className="mt-2 mb-3">
            <div className="m-auto font-weight-bolder">Discover More</div>
          </Row>
        </Col>
        </Card>
   
  );
};

export default LeftDownSideBar;