import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../pages/Shared/leftnav/Leftnav';
import Rightnav from '../pages/Shared/rightnav/Rightnav';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <Container>
          <Row>
            <Col lg={3}><Leftnav></Leftnav></Col>
            <Col lg={6}> Main content coming soon</Col>
            <Col lg={3}><Rightnav></Rightnav></Col>
          </Row>
          
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;