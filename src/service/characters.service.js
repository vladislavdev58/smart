import {api} from '../api/api'
import {charactersAPIRoutes} from '../config/routes.config'
import CharactersStore from '../store/CharactersStore'
import {runInAction} from 'mobx'

export const getAll = async () => {
    if (CharactersStore.allCharacters) {
        return null
    }
    runInAction(() => {
        CharactersStore.loading = true
    })

    try {
        const result = await api.get(charactersAPIRoutes.getAll())
        const {data} = result
        runInAction(() => {
            CharactersStore.allCharacters = data
            CharactersStore.loading = false
        })
    } catch (e) {
        console.log(e)
    }
}