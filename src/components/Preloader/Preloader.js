import React from 'react'
import {CircularProgress, Grid} from '@mui/material'

export const Preloader = () => {
    return (
        <Grid container justifyContent={'center'}>
            <CircularProgress />
        </Grid>
    )
}
