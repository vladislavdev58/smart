import {makeAutoObservable} from 'mobx'
import {
    generateCheckboxObject,
    generateRadioObject
} from '../utils/filter'

class CharactersStore {

    allCharacters = null
    loading = false
    activeFilter = {}
    dataFilter = []
    filterResult = null
    configFilter = [
        {
            key: 'gender',
            type: 'radio',
            title: 'Gender',
        },
        {
            key: 'hairColour',
            type: 'radio',
            title: 'Hair colour',
        },
        {
            key: 'house',
            type: 'checkbox',
            title: 'House',
        },
        {
            key: 'species',
            type: 'checkbox',
            title: 'Species',
        },
        {
            key: 'patronus',
            type: 'radio',
            title: 'Patronus',
        },
    ]
    paginationConfig = {
        activePage: 1,
        showItems: 8,
        pageLimit: 0,
        selectShowItems: [
            {value: 8, label: 8},
            {value: 10, label: 10},
            {value: 20, label: 20},
        ]
    }
    selectShowItems = [
        {value: 8, label: 8},
        {value: 10, label: 10},
        {value: 20, label: 20},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    filterCharacters = () => {
        this.paginationConfig.activePage = 1
        const keys = Object.keys(this.activeFilter)
        if (!keys.length) {
            return this.filterResult = null
        }
        this.filterResult = this.allCharacters.filter((person) => {
            let flag = false
            for (let key = 0; key < keys.length; key++) {
                if (Array.isArray(this.activeFilter[keys[key]])) {
                    for (let i = 0; i < this.activeFilter[keys[key]].length; i++) {
                        const elem = this.activeFilter[keys[key]][i]
                        flag = elem === person[keys[key]]
                        if (flag) {
                            break
                        }
                    }
                } else {
                    flag = this.activeFilter[keys[key]] === person[keys[key]]
                }
                if (!flag) {
                    break
                }
            }
            return flag
        })
    }

    generateFilters = (configFilter) => {
        if (this.dataFilter.length) {
            return null
        }
        configFilter.forEach((config) => {
            const result = []
            this.allCharacters.forEach((item) => {
                if (!result.includes(item[config.key]) && item[config.key]) {
                    result.push(item[config.key])
                }
            })
            if (config.type === 'radio') {
                this.dataFilter.push(generateRadioObject(result, config))
            }
            if (config.type === 'checkbox') {
                this.dataFilter.push(generateCheckboxObject(result, config))
            }
        })
    }

}

export default new CharactersStore()