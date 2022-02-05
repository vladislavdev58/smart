import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import CharacterDetailStore from '../store/CharacterDetailStore'
import {runInAction} from 'mobx'
import {MainLayout} from '../layouts/MainLayout'
import {Grid, Typography} from '@mui/material'
import {MyTable} from '../components/MyTable/MyTable'
import {generateDataTable} from '../utils/table'
import stub from '../assets/images/stub.jpg'
import {Navigate} from 'react-router-dom'

export const DetailPage = observer(() => {

    useEffect(() => {
        return () => runInAction(() => CharacterDetailStore.detailData = null)
    }, [])

    const {detailData, configTable} = CharacterDetailStore

    if (!detailData) {
        return (
            <Navigate to="/" replace={true}/>

        )
    }

    return (
        <MainLayout>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <img src={detailData.image ? detailData.image : stub} alt={detailData.name}
                             style={{width: 260, height: 'auto'}}/>
                        <Typography gutterBottom variant="h4" component="div">{detailData.name}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    {detailData &&
                        <MyTable titles={['Name', 'Value']} data={generateDataTable(configTable, detailData)}/>}
                </Grid>
            </Grid>

        </MainLayout>
    )
})