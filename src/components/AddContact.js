import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from 'react-bootstrap/Button';
import ContactList from "./ContactList";


const AddContact = () => {
    const [formData, setFormData] = useState([
        {
            name: 'Anil',
            email: 'u@u.com'
        },

        {
            name: 'Pragya',
            email: 'u@a.com'
        }
    ])
    const handleSubmit = (event) => {
        event.preventDefault()
        const loginDetail = {
            name: event.target[0].value,
            email: event.target[1].value,

        }
        setFormData([...formData, loginDetail])
    }
    return (
        <>
            <Card className="card_container">
                <CardHeader>
                    Login Form
                </CardHeader>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <ContactList data={formData} setFormData={setFormData}/>
        </>
        // <div className="ui main">
        //     <h2>Add Contact</h2>
        //     <form className="ui form">
        //         <div className="field">
        //             <label>Name</label>
        //             <input type="text" name="name" placeholder="Name"/>
        //         </div>
        //         <div className="field">
        //             <label>Email</label>
        //             <input type="text" name="email" placeholder="Email"/>
        //         </div>
        //         <button className="ui button blue">Add</button>
        //     </form>
        // </div>
    );

}

export default AddContact;