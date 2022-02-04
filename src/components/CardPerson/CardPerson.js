import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import stub from '../../assets/images/stub.jpg'
import {Link} from 'react-router-dom'
import {runInAction} from 'mobx'
import CharacterDetailStore from '../../store/CharacterDetailStore'
import {observer} from 'mobx-react-lite'

export const CardPerson = observer((item) => {
    const {image, name} = item
    return (
        <Card>
            <CardActionArea>
                <Link to='/detail' onClick={() => runInAction(() => CharacterDetailStore.detailData = item)}>
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
                </Link>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Fav
                </Button>
            </CardActions>
        </Card>
    )
})