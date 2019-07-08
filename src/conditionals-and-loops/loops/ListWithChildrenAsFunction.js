import React from 'react'

export const ListWithChildrenAsFunction = (props) => {
    let items = [];

    for (let index = 0; index < props.items; index++) {
        items.push(props.children({ index: index }))
    }

    return (
        <div>
            <ul>
                { items }
            </ul>
        </div>
    )
}

ListWithChildrenAsFunction.defaultProps = {
    items: 10
}

export default ListWithChildrenAsFunction
