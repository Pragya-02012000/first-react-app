import React, { useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

const CustomProgress = () => {

    const [progressStatus, setProgressStatus] = useState(0)
    const [disableAdd, setDisableAdd] = useState(false)
    const [disableDesc, setDisableDesc] = useState(false)


    const handleAdd = () => {
        if (progressStatus < 100) {
            setDisableDesc(false)
            setProgressStatus(progressStatus + 10)
        } else {
            setDisableDesc(false)
            setDisableAdd(true)
        }
    }
    const handleDesc = () => {
        if (progressStatus > 0) {
            setDisableAdd(false)
            setProgressStatus(progressStatus - 10)
        } else {
            setDisableAdd(false)
            setDisableDesc(true)
        }
    }

    return (
        <div className='p-4'>
            <ProgressBar label={`${progressStatus}%`} striped variant="success" now={progressStatus} className="mb-4" />
            <Button variant="danger" className='m-4' onClick={handleDesc} disabled={disableDesc}>Decrease</Button>
            <Button variant="success" onClick={handleAdd} disabled={disableAdd}>Increase</Button>
        </div>
    )
}

export default CustomProgress