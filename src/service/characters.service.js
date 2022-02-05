import {api} from '../api/api'
import {charactersAPIRoutes} from '../config/routes.config'
import CharactersStore from '../store/CharactersStore'
import {runInAction} from 'mobx'

export const getAll = () => {
    if (CharactersStore.allCharacters) {
        return null
    }
    runInAction(() => {
        CharactersStore.loading = true
    })
    api.get(charactersAPIRoutes.getAll())
        .then(r => runInAction(() => {
            CharactersStore.allCharacters = r.data
            CharactersStore.loading = false
        }))
}