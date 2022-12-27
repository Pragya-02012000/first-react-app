import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';

function ContactList({ data, setFormData }) {
    const handleDelete = (index) => {
        const res = data.filter((item, i) => i != index)
        setFormData(res)
    }
    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><Button onClick={() => handleDelete(index)}><Trash /></Button></td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    );
}

export default ContactList;