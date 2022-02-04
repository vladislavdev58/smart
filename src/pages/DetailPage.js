import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import CharacterDetailStore from '../store/CharacterDetailStore'
import {runInAction} from 'mobx'
import {MainLayout} from '../layouts/MainLayout'

export const DetailPage = observer(() => {

    useEffect(() => {
        return () => runInAction(() => CharacterDetailStore.detailData = null)
    }, [])

    const {detailData} = CharacterDetailStore
    const {image} = detailData

    // if (!detailData) {
    //     return (
    //         <Redirect to='/'/>
    //     )
    // }

    return (
        <MainLayout>
            <img src={image} alt=""/>
        </MainLayout>
    )
})