import React, { Component } from 'react'
import Main from './modules/main/Main'
import Login from './modules/login/Login'
import './theme/index.less'
import './App.less'
import socket from '@/socket';

const storage = window.localStorage;

class App extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     userInfo:  {},
        //     loginInfo: true
        // }
        if (storage['userInfo']) {
            this.state = {
                userInfo:  JSON.parse(storage['userInfo']),
                loginInfo: false
            }
        }else{
            this.state = {
                userInfo:  {},
                loginInfo: true
            }
        }

    }

    componentDidMount() {
        // storage.removeItem('messageList')
        // storage.removeItem('userInfo')
        if (!storage) {
            alert('该浏览器不支持localstorage')
        } else {
            if (storage['userInfo']) {
                this.setState({
                    userInfo: JSON.parse(storage['userInfo']),
                    loginInfo: false
                })
            }
        }
    }

    getUserInfo(info) {
        const storage = window.localStorage;
        storage['userInfo'] = JSON.stringify(info)
        socket.emit('login', info)
        console.log(info)
        this.setState({
            userInfo: JSON.parse(storage['userInfo']),
            loginInfo: false
        })

    }

    render() {
        const { loginInfo } = this.state

        return (
            <div>
                <Main userInfo={this.state.userInfo} />
                {loginInfo ? <Login userInfo={(info) => this.getUserInfo(info)} /> : null}
            </div>

        )
    }

}

export default App