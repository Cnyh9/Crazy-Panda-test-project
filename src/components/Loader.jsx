import { CircularProgress } from '@mui/material'
import React from 'react'

export const Loader = () => {
    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress size={100} thickness={2}/>
        </div>
    )
}
