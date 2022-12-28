import { Button } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';

function ContactList({ data, setFormData, setIsEdit,setSelectedRow }) {
    const handleDelete = (index) => {
        const res = data.filter((item, i) => i !== index)
        setFormData(res)
    }
    const handleEdit =(item,index)=>{
        setSelectedRow(item,index)
        setIsEdit(true)
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
                            <td>
                                <Button onClick={() => handleEdit(item,index)}><Pencil /></Button>
                                <Button style={{ marginLeft: 2 }} onClick={() => handleDelete(index)}><Trash /></Button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    );
}

export default ContactList;