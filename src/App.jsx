
import React, {useState} from "react";
import {Form, FormGroup, FormControl, FormText, Button, FormLabel, FormCheck} from "react-bootstrap";
import DragDrop from "./DragDrop";
import demo from "./demo.txt";

const dropStyle = {
  backgroundColor: "lightblue", 
  display: "inline-block", 
  width: 500, 
  height: 100, 
  borderRadius: 5, 
  textAlign: "center", 
  paddingTop: 30
}

function App(){
  const [state, setState] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: ""
  });

  return (
    <div className="container mt-2">
      <DragDrop setState={setState}/>
      <Form>
        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" value={state.email}/>
          <FormText className="text-muted">
            We'll never share your email with anyone else
          </FormText>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicName">
          <FormLabel>Full name</FormLabel>
          <FormControl type="text" placeholder="Enter Name" value={state.fullName}/>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FormLabel>Phone Number</FormLabel>
          <FormControl type="text" placeholder="Phone Number" value={state.phoneNumber}/>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FormLabel>Address</FormLabel>
          <FormControl type="text" placeholder="Address" value={state.address} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Password" value={state.password} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicCheckbox">
          <FormCheck type="checkbox" label="Check me out" />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
      <a href={demo} download>
        Download Demo
      </a>
    </div>
  )
}

export default App;
