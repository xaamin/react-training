import React from 'react'

const styles = {
    submit: {
        backgroundColor: '#F5831F',
        color: '#ffffff'
    }
}

const ButtonWithComponentChildAsProp = ({text, loader, functional, ...rest}) => {
    let style = {};

    if (rest.type === 'submit') {
        style = styles.submit;
    }

    const Functional = functional;

    return (
        <button { ...rest } style={ style }>
            { text } { loader }
            &nbsp;
            &nbsp;
            &nbsp;
            <Functional text="Enviando..." />

            &nbsp;
            &nbsp;
            &nbsp;

            { functional({text: '...enviando'}) }
        </button>
    )
}

ButtonWithComponentChildAsProp.defaultProps = {
    text: 'Unnamed',
    type: 'button',
    loader: null
}

export default ButtonWithComponentChildAsProp;