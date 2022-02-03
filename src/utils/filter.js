import CharactersStore from '../store/CharactersStore'
import {runInAction} from 'mobx'

export const changeRadio = (event) => {
    const {name, value} = event.target
    runInAction(() => CharactersStore.activeFilter = {...CharactersStore.activeFilter, [name]: value})
}

export function changeCheckbox() {
    this.checked = !this.checked
}

export const changeCheckboxMain = (event) => {
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

export const generateRadioObject = (keys, config) => ({
    title: config.title,
    type: 'radio',
    name: config.key,
    id: config.key,
    onChange: changeRadio,
    items: keys.map((key) => ({
        id: key + config.title,
        label: key[0].toUpperCase() + key.slice(1),
        value: key
    }))
})

export const generateCheckboxObject = (keys, config) => ({
    title: config.title,
    type: 'checkbox',
    id: config.key,
    onChange: changeCheckboxMain,
    items: keys.map((key) => ({
        id: key+config.title,
        label: key[0].toUpperCase() + key.slice(1),
        value: key,
        name: config.key,
        checked: false,
        onChange: changeCheckbox
    }))
})