import {makeAutoObservable} from 'mobx'

class CharactersStore {
    allCharacters = null
    loading = false
    constructor() {
        makeAutoObservable(this)
    }
}

export default new CharactersStore()