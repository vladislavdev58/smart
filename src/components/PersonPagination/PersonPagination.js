import React, {useEffect, useState} from 'react'
import {Box, Grid} from '@mui/material'
import {MyPagination} from '../MyPagination/MyPagination'
import {MySelect} from '../MySelect/MySelect'

export const PersonPagination = ({persons, setItems}) => {
    const [activePage, setActivePage] = useState(1)
    const [showItems, setShowItems] = useState(8)
    const pageLimit = Math.ceil(persons.length / showItems)

    const selectItems = [
        {value: 8, label: 8},
        {value: 10, label: 10},
        {value: 20, label: 20},
    ]

    useEffect(() => {
        const offset = (activePage - 1) * showItems
        const newItems = persons.slice(offset, offset + showItems)
        setItems(newItems)
    }, [persons, activePage, showItems])

    return (
        <Grid container justifyContent="space-between" alignItems="center" sx={{marginTop: 3}}>
            <Box>
                <MyPagination pageLimit={pageLimit} setActivePage={setActivePage}/>
            </Box>
            <Box sx={{width: '100%', maxWidth: 120}}>
                <MySelect label="Display by" handleChange={(event) => setShowItems(event.target.value)}
                          value={showItems} items={selectItems}/>
            </Box>
        </Grid>
    )
}