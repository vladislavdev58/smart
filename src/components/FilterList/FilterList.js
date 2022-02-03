import React from 'react'
import {RadioList} from '../RadioList/RadioList'
import {FormControl, FormGroup, FormLabel, RadioGroup} from '@mui/material'
import {CheckboxList} from '../CheckboxList/CheckboxList'
import {observer} from 'mobx-react-lite'

export const FilterList = observer(({item}) => {
    if (item.type === 'radio') {
        return (
            <FormControl sx={{width: '100%'}}>
                <FormLabel>{item.title}</FormLabel>
                <RadioGroup
                    name={item.name}
                    onChange={item.onChange.bind(item)}
                >
                    <RadioList radio={item.items}/>
                </RadioGroup>
            </FormControl>
        )
    }

    if (item.type === 'checkbox') {
        return (
            <FormGroup onChange={item.onChange}>
                <FormLabel>{item.title}</FormLabel>
                <CheckboxList checkboxes={item.items}/>
            </FormGroup>
        )
    }

    return (
        <div>
            Hello
        </div>
    )
})