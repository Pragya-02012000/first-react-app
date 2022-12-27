import Table from 'react-bootstrap/Table';

function ContactList({data}) {
    // const data = [{
    //     name: 'Anil',
    //     email: 'u@u.com'
    // },

    // {
    //     name: 'Pragya',
    //     email: 'u@a.com'
    // }]
    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    );
}

export default ContactList;