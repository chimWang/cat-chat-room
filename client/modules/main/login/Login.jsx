import React, { Component } from 'react'

import './Login.less'
import Input from '../../../components/Input'

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <Input placeholder="输入名称" label="名称"/>
            </div>
        )
    }
}

export default Login