import React, {useState} from 'react'
import {CardPerson} from '../CardPerson/CardPerson'
import {Grid, Typography} from '@mui/material'
import {observer} from 'mobx-react-lite'
import {PersonPagination} from '../PersonPagination/PersonPagination'

export const PersonList = observer(({persons}) => {
    const [items, setItems] = useState([])

    if (!persons.length) {
        return (
            <Typography variant="h3" gutterBottom component="div">
                Ничего не найдено 🤔
            </Typography>
        )
    }

    return (
        <>
            <Grid container spacing={4}>
                {/*айдишников нет с бека, поэтому юзаю индекс, знаю что так плохо =(*/}
                {items.map((item, index) =>
                    <Grid item xs={3} key={index}>
                        <CardPerson {...item}/>
                    </Grid>
                )}
            </Grid>
            <PersonPagination persons={persons} setItems={setItems}/>
        </>
    )
})