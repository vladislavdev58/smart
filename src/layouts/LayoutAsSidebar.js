import React from 'react'
import {MainLayout} from './MainLayout'
import {Grid} from '@mui/material'

export const LayoutAsSidebar = ({sideBar, content}) => {
    return (
        <MainLayout>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    {sideBar}
                </Grid>
                <Grid item xs={8}>
                    {content}
                </Grid>
            </Grid>
        </MainLayout>
    )
}