import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'

export const MySelect = ({label, handleChange, value, items}) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={handleChange}
            >
                {items.map(({value, label}, index) =>
                    <MenuItem value={value} key={index}>{label}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}