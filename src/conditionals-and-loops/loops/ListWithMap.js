import React from 'react'

const ListItem = ({ item }) => (<li>{ item }</li>)

const renderListItem = (item) => (<ListItem key={ item} item={ item } />)

export const ListWithMap = ({ items }) => {
    return (
        <div>
            <ul>
                { items.map(renderListItem) }
            </ul>
        </div>
    )
}

ListWithMap.defaultProps = {
    items: []
}

export default ListWithMap
