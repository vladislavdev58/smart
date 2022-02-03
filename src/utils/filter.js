import CharactersStore from '../store/CharactersStore'
import {runInAction} from 'mobx'

export const changeRadio = (event) => {
    const {name, value} = event.target
    runInAction(() => CharactersStore.activeFilter = {...CharactersStore.activeFilter, [name]: value})
}

export function changeCheckbox() {
    this.checked = !this.checked
}

export const changeCheckboxGroup = (event) => {
    const {checked, name, value} = event.target
    const active = CharactersStore.activeFilter[name] ? CharactersStore.activeFilter[name] : []
    if (checked && !active.includes(value)) {
        active.push(value)
    } else if (active.includes(value)) {
        const index = active.indexOf(value)
        active.splice(index, 1)
    }
    if (!active.length) {
        delete CharactersStore.activeFilter[name]
    } else {
        runInAction(() => CharactersStore.activeFilter = {...CharactersStore.activeFilter, [name]: active})
    }
}

const RadioItem = function (key, config) {
    this.id = key + config.title
    this.label = key[0].toUpperCase() + key.slice(1)
    this.value = key
}

const RadioGroup = function (keys, config) {
    this.title = config.title
    this.type = 'radio'
    this.name = config.key
    this.id = config.key
    this.onChange = changeRadio
    this.items = keys.map((key) => new RadioItem(key, config))
}

const CheckboxItem = function (key, config) {
    this.id = key + config.title
    this.label = key[0].toUpperCase() + key.slice(1)
    this.value = key
    this.name = config.key
    this.checked = false
    this.onChange = changeCheckbox
}

const CheckboxGroup = function (keys, config) {
    this.title = config.title
    this.type = 'checkbox'
    this.id = config.key
    this.onChange = changeCheckboxGroup
    this.items = keys.map((key) => new CheckboxItem(key, config))
}

export const generateRadioObject = (keys, config) => new RadioGroup(keys, config)

export const generateCheckboxObject = (keys, config) => new CheckboxGroup(keys, config)