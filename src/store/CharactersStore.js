import {makeAutoObservable, runInAction} from 'mobx'

class CharactersStore {
    allCharacters = null
    loading = false
    activeFilter = {}
    dataFilter = [
        {
            title: 'Пол:',
            type: 'radio',
            name: 'gender',
            id: 'gender',
            onChange: (event) => {
                const {name, value} = event.target
                this.activeFilter = {...this.activeFilter, [name]: value}
            },
            items: [
                {
                    id: 'humanGender',
                    label: 'Мужской',
                    value: 'male'
                },
                {
                    id: 'femaleGender',
                    label: 'Женский',
                    value: 'female'
                }
            ]
        },
        {
            title: 'Факультет',
            type: 'checkbox',
            id: 'house',
            onChange: (event) => {
                const {checked, name, value} = event.target
                const active = this.activeFilter[name] ? this.activeFilter[name] : []
                if (checked && !active.includes(value)) {
                    active.push(value)
                } else if (active.includes(value)) {
                    const index = active.indexOf(value)
                    active.splice(index, 1)
                }
                this.activeFilter = {...this.activeFilter, [name]: active}
            },
            items: [
                {
                    id: 'gryffindorCheckbox',
                    label: 'Gryffindor',
                    value: 'Gryffindor',
                    name: 'house',
                    checked: false,
                    onChange: function () {
                        this.checked = !this.checked
                    }
                },
                {
                    id: 'slytherinCheckbox',
                    label: 'Slytherin',
                    value: 'Slytherin',
                    name: 'house',
                    checked: false,
                    onChange: function () {
                        this.checked = !this.checked
                    }
                },
                {
                    id: 'hufflepuff',
                    label: 'Hufflepuff',
                    value: 'Hufflepuff',
                    name: 'house',
                    checked: false,
                    onChange: function () {
                        this.checked = !this.checked
                    }
                },
                {
                    id: 'ravenclaw',
                    label: 'Ravenclaw',
                    value: 'Ravenclaw',
                    name: 'house',
                    checked: false,
                    onChange: function () {
                        this.checked = !this.checked
                    }
                },
            ]
        },
        {
            title: 'В живых:',
            type: 'radio',
            name: 'alive',
            id: 'alive',
            onChange: (event) => {
                const {name, value} = event.target
                runInAction(() => this.activeFilter = {...this.activeFilter, [name]: Boolean(value)})
            },
            items: [
                {
                    id: 'aliveYes',
                    label: 'Да',
                    value: 'yes'
                },
                {
                    id: 'aliveNo',
                    label: 'Нет',
                    value: ''
                }
            ]
        },
    ]
    filterResult = null

    constructor() {
        makeAutoObservable(this)
    }

    filter = () => {
        const keys = Object.keys(this.activeFilter)
        if (!keys.length) {
            return null
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

}

export default new CharactersStore()