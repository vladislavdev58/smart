import {makeAutoObservable} from 'mobx'

class CharacterDetailStore {

    detailData = null

    constructor() {
        makeAutoObservable(this)
    }

}

export default new CharacterDetailStore()