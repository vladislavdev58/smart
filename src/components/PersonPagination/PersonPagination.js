import React, {useEffect} from 'react'
import {Box, Grid} from '@mui/material'
import {MyPagination} from '../MyPagination/MyPagination'
import {MySelect} from '../MySelect/MySelect'
import {observer} from 'mobx-react-lite'
import CharactersStore from '../../store/CharactersStore'
import {runInAction} from 'mobx'

export const PersonPagination = observer(({persons, setItems}) => {
    const {activePage, showItems} = CharactersStore.paginationConfig
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
    }, [persons, activePage, showItems, setItems])

    const handleChangeActivePage = (page) => runInAction(() => CharactersStore.paginationConfig.activePage = page)
    const handleChangeShowItems = (event) => runInAction(() => CharactersStore.paginationConfig.showItems = event.target.value)

    return (
        <Grid container justifyContent="space-between" alignItems="center" sx={{marginTop: 3}}>
            <Box>
                <MyPagination pageLimit={pageLimit} page={activePage} setActivePage={handleChangeActivePage}/>
            </Box>
            <Box sx={{width: '100%', maxWidth: 120}}>
                <MySelect label="Display by" handleChange={handleChangeShowItems}
                          value={showItems} items={selectItems}/>
            </Box>
        </Grid>
    )
})