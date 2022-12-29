import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/Button";
import ContactList from "./ContactList";

const AddContact = () => {
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAddEnabled, setIsAddEnabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginDetail = {
      name: event.target[0].value,
      email: event.target[1].value,
    };
    if (isEdit) {
      const objIndex = formData.findIndex((e, i) => i === selectedIndex);
      let modifiedArr = formData;
      modifiedArr[objIndex] = loginDetail;
      setFormData(modifiedArr);
    } else {
      setFormData([...formData, loginDetail]);
    }
    localStorage.setItem('users',formData)    
    clearAllItems();
  };
  
  const clearAllItems=()=>{
    setName("");
    setEmail("");
    setIsAddEnabled(false)
  }

  const handleSelectedRow = (row, index) => {
    setSelectedIndex(index);
    setName(row.name);
    setEmail(row.email);
  };
  
  
  
  const handleAdd=()=>{
    console.log(JSON.parse(localStorage.getItem('users')))
    setIsAddEnabled(true)
  }

  return (
    <div className="form_container">
      <div className="contactList">
        {/* if empty ,show no data */}
        <Button
          variant="primary"
          type="submit"
          onClick={handleAdd}
        >
          Add
        </Button>
        {formData.length !== 0 ? (
          <ContactList
            data={formData}
            setFormData={setFormData}
            setIsEdit={setIsEdit}
            setSelectedRow={(row, index) => handleSelectedRow(row, index)}
          />
        ) : (
          <p>No data available</p>
        )}
        {/* else call componenet */}
      </div>
      {isAddEnabled && (
        <Card className="card_container">
          <CardHeader>Login Form</CardHeader>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              {isEdit ? (
                <Button variant="primary" type="submit">
                  Update
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              )}
              <Button style={{marginLeft:4}} variant="secondary" onClick={clearAllItems}>
                Cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default AddContact;
