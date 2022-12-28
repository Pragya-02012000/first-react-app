import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from 'react-bootstrap/Button';
import ContactList from "./ContactList";


const AddContact = () => {
    const [formData, setFormData] = useState([])
    const [value, setValue] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const loginDetail = {
            name: event.target[0].value,
            email: event.target[1].value,
        }
        if (isEdit) {
            const objIndex = formData.findIndex((e,i) => i===selectedIndex)
            let modifiedArr = formData 
            modifiedArr[objIndex]=loginDetail
            setFormData(modifiedArr)
        } else {
            setFormData([...formData, loginDetail])
        }
        setName('')
        setEmail('')
    }

    const handleValue = (event) => {
        setValue(event.target.value)
    }

    const handleSelectedRow = (row,index) => {
        console.log(row,index)
        setSelectedIndex(index)
        setName(row.name)
        setEmail(row.email)
    }


    useEffect(() => {
        //it will execute before page render
        setValue('Test')
    }, [])



    return (
        <div className="form_container">
            <Card className="card_container">
                <CardHeader>
                    Login Form
                </CardHeader>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>

                        {
                            isEdit ?
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                                :
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        }



                    </Form>
                </Card.Body>
            </Card>
            <div className="contactList">

                {/* if empty ,show no data available */}
                {
                    formData.length !== 0 ?
                        <ContactList
                            data={formData}
                            setFormData={setFormData}
                            setIsEdit={setIsEdit}
                            setSelectedRow={(row,index) => handleSelectedRow(row,index)}
                        />
                        : <p>No data available</p>
                }
                {/* else call componenet */}
            </div>
        </div>
    );

}

export default AddContact;