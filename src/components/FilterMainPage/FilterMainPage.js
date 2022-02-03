import React, {useEffect} from 'react'
import CharactersStore from '../../store/CharactersStore'
import {observer} from 'mobx-react-lite'
import {Filter} from '../Filter/Filter'

export const FilterMainPage = observer(() => {
    const {activeFilter, dataFilter, filterCharacters, generateFilters} = CharactersStore
    const length = Object.keys(activeFilter)

    useEffect(() => {
        generateFilters()
    }, [generateFilters])

    useEffect(() => {
        console.log('USE')
        filterCharacters()
    }, [length, filterCharacters])
    return (
        <Filter dataFilter={dataFilter}/>
    )
})
