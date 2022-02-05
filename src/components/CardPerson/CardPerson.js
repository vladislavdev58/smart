import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import stub from '../../assets/images/stub.jpg'
import {Link} from 'react-router-dom'
import {runInAction} from 'mobx'
import CharacterDetailStore from '../../store/CharacterDetailStore'
import {observer} from 'mobx-react-lite'
import {FavoriteBtn} from '../FavoriteBtn/FavoriteBtn'
import {checkFavorite} from '../../utils/favorites'

export const CardPerson = observer((item) => {
    const {image, name} = item
    const nameId = name.toLowerCase().replace(/\s/g, '')
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
                <FavoriteBtn data={nameId} keyStorage={'characterFav'} checked={checkFavorite('characterFav', nameId)}/>
            </CardActions>
        </Card>
    )
})