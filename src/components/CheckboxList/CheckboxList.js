import React from 'react'
import {Checkbox, FormControlLabel} from '@mui/material'
import {observer} from 'mobx-react-lite'

export const CheckboxList = observer(({checkboxes}) => {
    return (
        <>
            {checkboxes && checkboxes.map((elem) =>
                <FormControlLabel
                    control={<Checkbox checked={elem.checked} onChange={elem.onChange.bind(elem)} value={elem.value}/>}
                    name={elem.name} label={elem.label} key={elem.id}/>
            )}
        </>
    )
})