import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

class AccountSettings extends Component {
  render() {
    return (
      <div>
        <Row>
          <Topbar />
        </Row>
        <Row id="body-row">
          <div className="position-fixed">
            <Sidebar />
          </div>
          <div class="col offset-md-2 displayArea">
            <h2>Account Settings</h2>
            <Form className="mt-4">
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input type="text" name="firstName" id="exampleEmail" placeholder="i.e. John" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input type="text" name="lastName" id="examplePassword" placeholder="i.e. Smith" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="i.e. johnsmith@gmail.com" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="******" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>School</Label>
                  <Input type="text" name="school" id="exampleAddress" placeholder="i.e. University of Central Florida"/>
                </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
              <Label>Team</Label>
              <Input type="text" name="team" id="exampleAddress2" placeholder="i.e. Knights"/>
            </FormGroup>
            </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" placeholder="i.e. Orlando"/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState" placeholder="i.e. Florida"/>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip" placeholder="i.e. 32817"/>
                </FormGroup>  
              </Col>
            </Row>
            <Button outline color="success">Save Edits</Button>
          </Form>
          </div>
        </Row>
      </div>
    );
  }
}

export default AccountSettings;
