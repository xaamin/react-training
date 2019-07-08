import React from 'react'

export const ListWithChildren = ({ items }) => {
    let listItems = [];

    for (let index = 0; index < items; index++) {
        listItems.push(<li key={ index }>Item number { index + 1 }</li>)
    }

    return (
        <div>
            <ul>
                { listItems }
            </ul>
        </div>
    )
}

ListWithChildren.defaultProps = {
    items: 10
}

export default ListWithChildren
