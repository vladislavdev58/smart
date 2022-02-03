import {makeAutoObservable, runInAction} from 'mobx'

class Radio {
    constructor(store, title, name, items) {
        this.store = store
        this.title = title
        this.type = 'radio'
        this.name = name
        this.id = name
        this.items = items
    }

    onChange = (event) => {
        const {name, value} = event.target
        this.store.activeFilter = {...this.store.activeFilter, [name]: value}
    }
}

class Checkbox {
    constructor(store, title, id, items) {
        this.store = store
        this.title = title
        this.type = 'checkbox'
        this.id = id
        this.items = this.generateItem(items)
    }

    onChange = (event) => {
        console.log('startr')
        const {checked, name, value} = event.target
        const active = this.store.activeFilter[name] ? this.store.activeFilter[name] : []
        if (checked && !active.includes(value)) {
            active.push(value)
        } else if (active.includes(value)) {
            const index = active.indexOf(value)
            active.splice(index, 1)
        }
        this.store.activeFilter = {...this.store.activeFilter, [name]: active}
    }

    generateItem = (items) => items.map(({id, label, name, checked}) => new CheckboxItem(id, label, name, checked))
}

class CheckboxItem {
    constructor(id, label, name, checked) {
        this.id = id
        this.label = label
        this.value = label
        this.name = name
        this.checked = checked
    }

    onChange() {
        console.log(this)
        this.checked = !this.checked
    }
}

class CharactersStore {
    radio = new Radio(this, 'Пол', 'gender', [
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
    ])
    checkbox = new Checkbox(this, 'Факультет', 'house', [
        {
            id: 'gryffindorCheckbox',
            label: 'Gryffindor',
            name: 'house',
            checked: false,
        },
        {
            id: 'slytherinCheckbox',
            label: 'Slytherin',
            name: 'house',
            checked: false
        }
    ])
    allCharacters = null
    loading = false
    activeFilter = {}
    dataFilter = [
        {...this.radio},
        {...this.checkbox},
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

}

export default new CharactersStore()