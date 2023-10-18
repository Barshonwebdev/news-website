import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
      <Container>
        <div className="text-center mt-4 mb-5">
          <img className="" src={logo} alt="" />
          <h5 className="mt-3">Where fear is replaced by courage</h5>
          <p>{moment().format("MMMM DD, YYYY")}</p>
        </div>

        <div className="d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee className="text-danger" speed={100}>
            News Flash! Ongoing conflicts, finances, sports, entertainment and
            all! Daily updates, daily inclusion and daily feedbacks. Get your
            copy on a weekly/monthly/yearly subscription from us!
          </Marquee>
        </div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary rounded mt-2">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="secondary">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default Header;