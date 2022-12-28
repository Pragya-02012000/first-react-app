import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () =>{
    return (
        // <div className='ui fixed menu'>
        //     <div className='ui container center'>
        //         <h2>Contact Manager</h2>
        //     </div>
        // </div>
        <Navbar expand="lg" variant="dark" className="custom_navbar">
        {/* <Container> */}
          <Navbar.Brand href="#">Pretzels</Navbar.Brand>
        {/* </Container> */}
      </Navbar>
  
    );
}

export default Header;