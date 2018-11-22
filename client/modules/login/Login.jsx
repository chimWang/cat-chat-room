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
            nowIndex: 0,
            chooseAvatar: './avatar1.svg'
        }
    }

    chooseAvatar(item, index) {
        this.setState({
            nowIndex: index,
            chooseAvatar: item.imgUrl,
        })
    }

    handleLogin() {
        const { chooseAvatar } = this.state
        let username = this.username.getValue()
        let userId = 'indexCode' + Math.round(Math.random() * 10000)  //随机创建id,用来判断是自身信息还是别人信息  
        if (username) {
            this.props.userInfo({
                username,
                userId,
                chooseAvatar
            })
        } else {
            alert('请输入用户名')
        }

    }

    render() {
        const { avatar, nowIndex } = this.state
        return (
            <div>
                <div className="mask"></div>
                <div className='login'>
                    <header>登录</header>
                    <div className="content" style={{ width: '80%' }}>
                        <div className="login-info">
                            <Input placeholder="输入名称" label="名称：" ref={i => this.username = i} />
                        </div>
                        <div className="avatar">
                            <p>选择头像：</p>
                            <div>
                                {avatar.map((item, index) => {
                                    return (
                                        <img src={item.imgUrl}
                                            key={index}
                                            style={index === nowIndex ? { border: '2px solid #feb9f8' } : null}
                                            onClick={() => this.chooseAvatar(item, index)}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="loginBtn">
                            <button onClick={() => this.handleLogin()}>确定</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login