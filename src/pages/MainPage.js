import React, {useEffect} from 'react'
import {MainLayout} from '../layouts/MainLayout'
import {PersonList} from '../components/PersonList/PersonList'
import {getAll} from '../service/characters.service'
import CharactersStore from '../store/CharactersStore'
import {Preloader} from '../components/Preloader/Preloader'
import {observer} from 'mobx-react-lite'
import {LayoutAsSidebar} from '../layouts/LayoutAsSidebar'
import {Filter} from '../components/Filter/Filter'

export const MainPage = observer(() => {
    const {loading, allCharacters, dataFilter} = CharactersStore

    useEffect(() => {
        getAll()

        // const result = []
        // allCharacters.map((i) => {
        //     if (!result.includes(i.species)) {
        //         result.push(i.species)
        //     }
        // })
        // console.log(result)
    }, [])

    if (loading) {
        return (
            <MainLayout>
                <Preloader/>
            </MainLayout>
        )
    }

    return (
        <LayoutAsSidebar
            content={<PersonList persons={allCharacters}/>}
            sideBar={<Filter dataFilter={dataFilter}/>}
        />
    )
})
