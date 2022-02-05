import React from 'react'
import {Pagination, Stack} from '@mui/material'

export const MyPagination = ({pageLimit, setActivePage, page}) => {
    return (
        <div>
            <Stack spacing={2}>
                <Pagination onChange={(event, page) => setActivePage(page)} count={pageLimit} page={page} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    )
}