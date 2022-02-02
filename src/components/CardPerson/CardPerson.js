import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@mui/material'

const plug = 'https://play-lh.googleusercontent.com/NFq59dFMvx2KaMVze8ogX47sbxxo9_GUEVO-bln5Rv9M7ZzwM8LwKfJcnpg5Au65F0k'

export const CardPerson = ({image, name}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={image ? image : plug}
                    alt={`Photo - ${name}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Fav
                </Button>
            </CardActions>
        </Card>
    )
}