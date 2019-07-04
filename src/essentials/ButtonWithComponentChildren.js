import React from 'react'

const styles = {
    submit: {
        backgroundColor: '#F5831F',
        color: '#ffffff'
    }
}

const ButtonWithComponentChildren = (props) => {
    let style = {};

    if (props.type === 'submit') {
        style = styles.submit;
    }

    return (
        <button { ...props } style={ style }>
            { props.children }
            { props.loader }
        </button>
    )
}

ButtonWithComponentChildren.defaultProps = {
    text: 'Unnamed',
    type: 'button',
    loader: null
}

export default ButtonWithComponentChildren;