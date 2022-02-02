import React from 'react'
import {CardPerson} from '../CardPerson/CardPerson'
import {Grid} from '@mui/material'

export const PersonList = ({persons}) => {
    // айдишников нет с бека, поэтому юзаю индекс, знаю что так плохо =(
    return (
        <Grid container spacing={4}>
            {persons && persons.map(({image, name}, index) =>
                <Grid item xs={2} key={index}>
                    <CardPerson
                        image={image}
                        name={name}
                    />
                </Grid>
            )}
        </Grid>
    )
}