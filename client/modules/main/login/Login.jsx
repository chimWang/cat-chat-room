import React, { Component } from 'react'

import './Login.less'
import Input from '@/components/Input'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: ['./avatar1.svg', './avatar2.svg', './avatar3.svg', './avatar4.svg']
        }
    }

    chooseAvatar() {
        this.setState({

        })
    }

    render() {
        const { avatar, avatarBorder } = this.state
        return (
            <div className='login'>
                <header>登录</header>
                <div className="login-info">
                    <Input placeholder="输入名称" label="名称" />
                </div>
                <div className="avatar">
                    <p>选择头像</p>
                    <div>
                        {avatar.map((item, index) => {
                            return (
                                <a
                                    href="javascript:;"
                                    key={index}>
                                    <img src={item}
                                        onClick={() => this.chooseAvatar()}
                                    />
                                </a>
                            )
                        })}

                    </div>
                </div>


            </div>
        )
    }
}

export default Login