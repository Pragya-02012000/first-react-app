import React from 'react'
import Button from 'react-bootstrap/Button';


const CustomButton = ({ label = "Default", variant = "primary" }) => {
    return (
        <Button variant={variant}>{label}</Button>
    )
}

export default CustomButton