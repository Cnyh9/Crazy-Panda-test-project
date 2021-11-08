import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { MyContext } from '../context/myContext'

export const MyInput = () => {

    const {handleSearch, searchValue} = useContext(MyContext)

    return (
        <Box component="form" sx={{marginTop: '30px'}}>
            <TextField 
                value={searchValue}
                type="search"
                onChange={handleSearch}  
                fullWidth
                placeholder="Search..."
                margin="normal"
                variant="standard"
            />
        </Box>
    )
}
