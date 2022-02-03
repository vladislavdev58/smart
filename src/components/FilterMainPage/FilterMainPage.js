import React, {useEffect} from 'react'
import CharactersStore from '../../store/CharactersStore'
import {observer} from 'mobx-react-lite'
import {Filter} from '../Filter/Filter'

export const FilterMainPage = observer(() => {
    const {activeFilter, dataFilter, filter} = CharactersStore
    useEffect(() => {
        filter()
    }, [activeFilter, filter])
    return (
        <Filter dataFilter={dataFilter}/>
    )
})
