import React, { Component } from 'react'

import './Login.less'
import Input from '@/components/Input'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: [
                {
                    imgUrl: './avatar1.svg',
                    avatarValue: 1
                },
                {
                    imgUrl: './avatar2.svg',
                    avatarValue: 2
                },
                {
                    imgUrl: './avatar3.svg',
                    avatarValue: 3
                },
                {
                    imgUrl: './avatar4.svg',
                    avatarValue: 4
                }
            ],
            nowIndex: 0
        }
    }

    chooseAvatar(index) {
        this.setState({
            nowIndex: index
        })
    }

    render() {
        const { avatar, nowIndex } = this.state
        return (
            <div className='login'>
                <header>登录</header>
                <div className="center">
                    <div className="login-info">
                        <Input placeholder="输入名称" label="名称" />
                    </div>
                    <div className="avatar">
                        <p>选择头像</p>
                        <div>
                            {avatar.map((item, index) => {
                                return (
                                    <img src={item.imgUrl}
                                        key={index}
                                        style={index === nowIndex ? { border: '2px solid #666' } : null}
                                        onClick={() => this.chooseAvatar(index)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="loginBtn">
                        <button>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login