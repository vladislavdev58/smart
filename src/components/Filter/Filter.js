import React from 'react'
import {FilterList} from '../FilterList/FilterList'
import {observer} from 'mobx-react-lite'
import {Preloader} from '../Preloader/Preloader'
import {Box} from '@mui/material'

export const Filter = observer(({dataFilter}) => {

    if (!dataFilter.length) {
        return <Preloader/>
    }

    return (
        <Box sx={{
            p: 2,
            border: '1px solid grey',
            borderRadius: 1
        }}>
            {
                dataFilter && dataFilter.map(item =>
                    <FilterList item={item} key={item.id}/>
                )
            }
        </Box>
    )
})
