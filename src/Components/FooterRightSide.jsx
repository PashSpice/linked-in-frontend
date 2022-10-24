import {Dropdown, DropdownButton, Button, Card}from "react-bootstrap"
import "../css/FooterRightSide.css"

const FooterRightSide = () => {

      return (
          <Card className="mt-4 pb-4 mb-5 footerCard"
                  style={{ width: '18rem', borderRadius: "12px", color: "f3f2ee"}}>
                  <div className="mainsticky mt-4">
            
                  <div className=" d-flex mx-2 justify-content-center">
                    <a
                      href="https://about.linkedin.com/it-it?lr=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="items size"
                    > About
                    </a>
                    <a
                      href="https://www.linkedin.com/accessibility"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" mx-3 items size"
                    > Accesibility
                    </a>
                    <a
                      href="https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIvDJ8flGSJG7%2BUFMDZeaBw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="items size"
                    > Help Center
                    </a>
                  </div>
                  <div className="compact-links2 mt-1 d-flex justify-content-center">
                  <div className="mr-3">
                          <DropdownButton
                            title="Privacy & Terms"
                            size="sm"
                            className="mb-2 btndorpdown1"
                            variant="link"
                          >
                          <Dropdown.Item
                              href="https://www.linkedin.com/legal/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop size"
                            >
                              Privacy Policy
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://www.linkedin.com/legal/user-agreement"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop size"
                            >
                              User Agreement
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://www.linkedin.com/legal/cookie-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop size"
                            > Cookie Policy
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://www.linkedin.com/legal/copyright-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop size"
                            > Copyright Policy
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                        <a className="items size mt-2 pl-5 ml-5"href="https://www.linkedin.com/help/linkedin/answer/62931?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIvDJ8flGSJG7%2BUFMDZeaBw%3D%3D">
                        Ad Choices
                        </a>
                  </div>

                  <div className="d-flex">
                      <a className="mx-2 items size ml-5 mt-2" 
                      href="https://business.linkedin.com/it-it/marketing-solutions/ads?lr=1">
                            Advertising</a>
                      <DropdownButton
                            title="Business Services"
                            className="btndorpdown2"
                            variant="link"
                            size="sm"
                            style={{color: "black"}}
                          >
                            <Dropdown.Item
                              href="https://business.linkedin.com/talent-solutions?trk=flagship_nav&veh=li-header-dropdown-lts-control&src=li-nav"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop2 size" 
                            > Talent Solutions <div className="text-muted drop2sub "><br /> Find attract and recruit talent </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://www.linkedin.com/legal/user-agreement"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop2 size"
                            > Sales solution <div className="text-muted drop2sub "><br /> unlock sales opportunities </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-header-dropdown-lss-control&src=li-nav"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop2 size"
                            > Post a job for free <div className="text-muted drop2sub "><br /> Get your job in front of quality <br /> Candidates</div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://business.linkedin.com/it-it/marketing-solutions/ads?lr=1"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop2 size"
                            > Marketing Solutions <div className="text-muted drop2sub "><br /> develop talent across your <br /> organization</div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://learning.linkedin.com/?trk=d_flagship3_nav&veh=learning_solutions&src=li-nav"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop2 size"
                            > Learning Solutions <div className="text-muted drop2sub "><br /> develop talent across your <br /> organization</div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="https://www.linkedin.com/company/setup/new/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="optionDrop2 mt-2 size"
                            > Create a company Page
                            </Dropdown.Item>
                          </DropdownButton>
                          </div>

                          <div className="compact-links4 d-flex size ml-4 pl-3">
                          <Button size="sm"variant="link" className="" >Get the Linkedin app</Button>
                          <Button size="sm" variant="link">More</Button>
                          </div>


                          <div className="d-flex justify-content-center mt-2">
                                    <img
                              className="mb-2 logoimg"
                              src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo.png"
                              alt=""
                              />
                              <div className="linkedInText">LinkedIn Corporation © 2022</div>
                          </div>

                </div>
          </Card>
      )
}
export default FooterRightSide