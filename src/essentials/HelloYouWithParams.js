import React from 'react';

const HelloYouWithParams = (props) => {
    return (
        <p>Hello { props.name }</p>
    )
}

HelloYouWithParams.defaultProps = {
    name: 'John Doe'
}

export default HelloYouWithParams;