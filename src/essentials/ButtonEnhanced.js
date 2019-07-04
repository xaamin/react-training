import React from 'react'

const styles = {
    submit: {
        backgroundColor: '#F5831F',
        color: '#ffffff'
    }
}

const ButtonEnhanced = ({text, ...rest}) => {
    let style = {};

    if (rest.type === 'submit') {
        style = styles.submit;
    }

    return (
        <button type="button" { ...rest } style={ style }>
            { text }
        </button>
    )
}

ButtonEnhanced.defaultProps = {
    text: 'Unnamed'
}

export default ButtonEnhanced;