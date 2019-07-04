import React from 'react'

const Loader = ({ text }) => {
    return (
        <span>{ text }</span>
    )
}

Loader.defaultProps = {
    text: '...'
}

export default Loader;