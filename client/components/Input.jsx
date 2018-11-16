import React, { Component } from 'react'
import propTypes from 'prop-types'
import './components.less'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

    }
    handleInput(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        const { placeholder, label } = this.props
        const { value } = this.state
        return (
            <div className="component-input">
                <div><label>{label}：</label></div>
                <div>
                    <input
                        value={value}
                        onInput={(e) => { this.handleInput(e) }}
                        onChange={(e) => { this.handleInput(e) }}
                        ref={i => this.input = i}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        )
    }
}

Input.propTypes = {
    placeholder: propTypes.string,
    label: propTypes.string,
}

export default Input
