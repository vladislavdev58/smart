import React from 'react'
import {FilterList} from '../FilterList/FilterList'
import {observer} from 'mobx-react-lite'

export const Filter = observer(({dataFilter}) => {

    return (
        <div style={{border: '1px solid red'}}>
            {
                dataFilter && dataFilter.map(item =>
                    <FilterList item={item} key={item.id}/>
                )
            }
        </div>
    )
})
