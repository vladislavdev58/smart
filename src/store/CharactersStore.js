import {makeAutoObservable, toJS, values} from 'mobx'

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
                    value: 'human'
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
                    active.splice(index, 1);
                }
                this.activeFilter = {...this.activeFilter, [name]: active}
            },
            items: [
                {
                    id: 'gryffindorCheckbox',
                    label: 'Gryffindor',
                    value: 'gryffindor',
                    name: 'house',
                    checked: false,
                    onChange: function () {
                        this.checked = !this.checked
                    }
                },
                {
                    id: 'slytherinCheckbox',
                    label: 'Slytherin',
                    value: 'slytherin',
                    name: 'house',
                    checked: false,
                    onChange: function () {
                        this.checked = !this.checked
                    }
                },
                {
                    id: 'hufflepuff',
                    label: 'Hufflepuff',
                    value: 'hufflepuff',
                    name: 'house',
                    checked: false,
                    onChange: function () {
                        this.checked = !this.checked
                    }
                },
                {
                    id: 'ravenclaw',
                    label: 'Ravenclaw',
                    value: 'ravenclaw',
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
                this.activeFilter = {...this.activeFilter, [name]: Boolean(value)}
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

    constructor() {
        makeAutoObservable(this)
    }
}

export default new CharactersStore()