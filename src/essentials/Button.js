import React from 'react'

const Button = (props) => {
    return (
        <button type="button">
            { props.text }
        </button>
    )
}

Button.defaultProps = {
    text: 'Unnamed'
}

export default Button;