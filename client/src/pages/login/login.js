import React from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container, Col } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";


export default function LogIn() {
 
  
  return (
    <Container>
    <Col lg={3}></Col>
    <Jumbotron className="login">
    <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password" />
    </FormGroup>
    <Button className="btn btn-warning float-right" href="/">Log In</Button>
    </Form>
    </Jumbotron>
    <Col lg={3}></Col>
    </Container>
  )
}

