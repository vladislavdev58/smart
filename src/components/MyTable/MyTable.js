import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'

export const MyTable = ({titles, data}) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {titles.map((item, index) => <TableCell align={index > 0 ? 'right' : 'inherit'} key={item}>{item}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            {
                                Object.keys(row).map((key) => key !== 'name' ?
                                    <TableCell align="right" key={key}>{row[key]}</TableCell> : null)
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}