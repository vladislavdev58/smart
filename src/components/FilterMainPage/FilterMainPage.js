import React, {useEffect, useRef} from 'react'
import CharactersStore from '../../store/CharactersStore'
import {observer} from 'mobx-react-lite'
import {Filter} from '../Filter/Filter'

export const FilterMainPage = observer(() => {
    const {activeFilter, dataFilter, configFilter, filterCharacters, generateFilters} = CharactersStore
    const length = Object.keys(activeFilter)
    const isFirst = useRef(true)

    useEffect(() => {
        generateFilters(configFilter)
    }, [generateFilters, configFilter])

    useEffect(() => {
        if (!isFirst.current) {
            filterCharacters()
        }
        isFirst.current = false
    }, [length, filterCharacters])
    return (
        <Filter dataFilter={dataFilter}/>
    )
})
