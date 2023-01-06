import React, { useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

const CustomProgress = () => {

    // const [progressStatus, setProgressStatus] = useState(0)
    // const [disableAdd, setDisableAdd] = useState(false)
    // const [disableDesc, setDisableDesc] = useState(false)

    const [properties, setProperties] = useState({
        progressStatus: 0,
        disableAdd: false,
        disableDesc: false
    })


    const handleAdd = () => {
        if (properties.progressStatus < 100) {
            // setDisableDesc(false)
            // setProgressStatus(progressStatus + 10)
            setProperties({
                ...properties,
                disableDesc: false,
                progressStatus: properties.progressStatus + 10
            })
        } else {
            // setDisableDesc(false)
            // setDisableAdd(true)
            setProperties({
                ...properties,
                disableDesc: false,
                disableAdd: true
            })
        }
    }
    const handleDesc = () => {
        if (properties.progressStatus > 0) {
            // setDisableAdd(false)
            // setProgressStatus(progressStatus - 10)
            setProperties({
                ...properties,
                disableAdd: false,
                progressStatus: properties.progressStatus - 10
            })
        } else {
            // setDisableAdd(false)
            // setDisableDesc(true)
            setProperties({
                ...properties,
                disableAdd: false,
                disableDesc: true
            })
        }
    }

    return (
        <div className='p-4'>
            <ProgressBar label={`${properties.progressStatus}%`} striped variant="success" now={properties.progressStatus} className="mb-4" />
            <Button variant="danger" className='m-4' onClick={handleDesc} disabled={properties.disableDesc}>Decrease</Button>
            <Button variant="success" onClick={handleAdd} disabled={properties.disableAdd}>Increase</Button>
        </div>
    )
}

export default CustomProgress