import React from 'react'
import {toJS} from 'mobx'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material'

export const RadioList = ({radio}) => {
    return (
        <>
            {radio.map((elem) =>
                <FormControlLabel value={elem.value} control={<Radio/>} label={elem.label} key={elem.id}/>
            )}
        </>
    )
}