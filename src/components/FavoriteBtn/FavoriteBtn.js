import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox'
import {FavoriteBorder, Favorite} from '@mui/icons-material'
import {addFavorite, removeFavorite} from '../../utils/favorites'

export const FavoriteBtn = ({data, keyStorage, checked = false}) => {

    const [active, setActive] = useState(checked)

    const handleAdd = () => {
        if (addFavorite(keyStorage, data)) {
            setActive(true)
        }
    }

    const handleRemove = () => {
      if (removeFavorite(keyStorage, data))
        setActive(false)
    }

    return (
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} checked={active}
                  onClick={active ? handleRemove : handleAdd}/>
    )
}