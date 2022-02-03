import React from 'react'
import {FilterList} from '../FilterList/FilterList'
import {observer} from 'mobx-react-lite'
import {Preloader} from '../Preloader/Preloader'

export const Filter = observer(({dataFilter}) => {

    if (!dataFilter.length) {
        return <Preloader/>
    }

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
