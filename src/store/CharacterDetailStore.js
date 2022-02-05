import {makeAutoObservable} from 'mobx'

class CharacterDetailStore {

    detailData = null
    configTable = [
        {
            name: 'Date of birth',
            keys: ['dateOfBirth']
        },
        {
            name: 'Species',
            keys: ['species']
        },
        {
            name: 'Gender',
            keys: ['gender']
        },
        {
            name: 'House',
            keys: ['house']
        },
        {
            name: 'Actor',
            keys: ['actor']
        },
        {
            name: 'Patronus',
            keys: ['patronus']
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

}

export default new CharacterDetailStore()