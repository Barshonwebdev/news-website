import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from '../qzone/Qzone';
import bg from '../../../assets/bg.png'

const Rightnav = () => {
    return (
      <div className='mt-3'>
        <h4>Login with</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle className="me-2"></FaGoogle>Login with google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub className="me-2"></FaGithub>Login with github
        </Button>

        <div>
          <h4 className="mt-3">Find us on</h4>
          <ListGroup>
            <ListGroup.Item><FaFacebook className='text-primary me-2'></FaFacebook>Facebook</ListGroup.Item>
            <ListGroup.Item><FaTwitter className='text-primary me-2'></FaTwitter>Twitter</ListGroup.Item>
            <ListGroup.Item><FaInstagram className='text-danger me-2'></FaInstagram>Instagram</ListGroup.Item>
            
          </ListGroup>
        </div>
        <Qzone></Qzone>
        <div>
            <img src={bg} alt="" />
        </div>
      </div>
    );
};

export default Rightnav;