import React from 'react'
import {Container} from '@mui/material'

export const MainLayout = ({children}) => {
    return (
        <Container maxWidth="xl">
            {children}
        </Container>
    )
}