import React, {useEffect} from 'react'
import {MainLayout} from '../layouts/MainLayout'
import {PersonList} from '../components/PersonList/PersonList'
import {getAll} from '../service/characters.service'
import CharactersStore from '../store/CharactersStore'
import {Preloader} from '../components/Preloader/Preloader'
import {observer} from 'mobx-react-lite'

export const MainPage = observer(() => {
    const {loading, allCharacters} = CharactersStore

    useEffect(() => {
        getAll()
    }, [])

    return (
        <MainLayout>
            {loading && <Preloader/>}
            <PersonList persons={allCharacters}/>
        </MainLayout>
    )
})
