import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import stub from '../../assets/images/stub.jpg'

export const CardPerson = ({image, name}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={image ? image : stub}
                    alt={`Photo - ${name}`}
                    loading="lazy"
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