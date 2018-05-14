import React from 'react'
import FA from 'react-fa'
import classNames from 'classnames'

export default function IconComponent(props) {
    if (props.visible === false)
        return null

    let showStyle = props.showStyle

    if (props.disabled) {
        showStyle = 'disabled'
    }

    let className = 'mk-icon'
    className = classNames({
        [className]: true,
        [`mkicon--${showStyle}`]: !!showStyle,
        [props.className]: !!props.className
    })
    return <FA {...props} className={className} name={props.type} />

}
