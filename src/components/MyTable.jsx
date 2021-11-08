import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MyContext } from '../context/myContext'

export const MyTable = () => {

    const {comments, searchValue} = useContext(MyContext)


    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(15)
    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderby, setValueToOrderBy] = useState('')


    function descendingComparator(a, b, orderBy) {
        if( b[orderBy] < a[orderBy] ) {
            return -1
        }
        if( b[orderBy] > a[orderBy] ) {
            return 1
        }
        return 0
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b ,orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy)
    }

    const sortedComments = (rowArray, comparator) => {
        const stabiliziedArray = rowArray.map((el, i) => [el, i])
        stabiliziedArray.sort((a, b) => {
            const order = comparator(a[0], b[0])
            if(order !== 0) {
                return order
            }
            return a[1] - b[2]
        })
        const stabArr = stabiliziedArray.map(el => el[0])
        const sortedAndSearchedComm = stabArr.filter(item => item.name.toLowerCase().includes(searchValue))
        return sortedAndSearchedComm
    }


    const pageChangeHandler = (event, newPage) => {
        setPage(newPage)
    }

    const changeRowsPerPageHandler = e => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
    }

    const requestSortHandler = (event, property) => {
        const isAsc = (valueToOrderby === property && orderDirection === 'asc')
        setOrderDirection(isAsc ? 'desc' : 'asc')
        setValueToOrderBy(property)
        
    }

    const createSortHandler = (property) => (event) => {
        requestSortHandler(event, property)
    }

    return (
        <Paper sx={{margin: '30px 0'}} variant="outlined">
        <TableContainer >   
            <Table sx={{minWidth: 900}}>
                <TableHead>
                    <TableRow>
                        <TableCell key="id">
                            <TableSortLabel 
                                active={valueToOrderby === 'id'}
                                direction={valueToOrderby === 'id' ? orderDirection : 'asc'}
                                onClick={createSortHandler('id')}
                            >
                                ID
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="comm">
                            <TableSortLabel 
                                active={valueToOrderby === 'name'}
                                direction={valueToOrderby === 'name' ? orderDirection : 'asc'}
                                onClick={createSortHandler('name')}
                            >
                                Comm
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="email" >
                            <TableSortLabel
                                active={valueToOrderby === 'email'}
                                direction={valueToOrderby === 'email' ? orderDirection : 'asc'}
                                onClick={createSortHandler('email')}
                            >
                                User email
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedComments(comments, getComparator(orderDirection, valueToOrderby))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(comment => (
                            <TableRow key={comment.id}>
                                <TableCell>{comment.id}</TableCell>
                                <TableCell align="left">{comment.name}</TableCell>
                                <TableCell align="left">{comment.email}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination 
            component={'div'}
            sx={{marginTop: '30px'}}
            rowsPerPageOptions = {[5, 15, 25, 50, 100]}
            count={comments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={pageChangeHandler}
            onRowsPerPageChange={changeRowsPerPageHandler}
        />
        </Paper >
    )
}
