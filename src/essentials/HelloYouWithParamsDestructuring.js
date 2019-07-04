import React from 'react';

const HelloYouWithParamsDestructuring = ({ name }) => {
    return (
        <p>Hello { name }</p>
    )
}

HelloYouWithParamsDestructuring.defaultProps = {
    name: 'John Doe'
}

export default HelloYouWithParamsDestructuring;