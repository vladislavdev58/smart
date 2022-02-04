import React from 'react'
import {Pagination, Stack} from '@mui/material'

export const MyPagination = ({pageLimit, setActivePage}) => {
    return (
        <div>
            <Stack spacing={2}>
                <Pagination onChange={(event, page) => setActivePage(page)} count={pageLimit} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    )
}