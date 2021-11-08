import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { Loader } from '../components/Loader'
import { MyInput } from '../components/MyInput'
import { MyTable } from '../components/MyTable'
import { MyContext } from '../context/myContext'

export const Table = () => {

    const {isLoading} = useContext(MyContext)

    return (
        <div>
            {isLoading
            ?
                <Container>
                    <MyInput />
                    <MyTable />
                </Container>
            : <Loader />
            }
        </div>
    )
}
