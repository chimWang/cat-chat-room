import React, { Component } from 'react'
import Main from './modules/main/Main'
import Login from './modules/login/Login'
import './theme/index.less'
import './App.less'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {},
            loginInfo: true
        }
    }

    componentDidMount() {
        const storage = window.localStorage;
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
        console.log(info)
        this.setState({
            loginInfo: false
        })
        storage['userInfo'] = JSON.stringify(info)
    }

    render() {
        const { loginInfo } = this.state

        return (
            <div>
                <Main userInfo={this.userInfo}/>
                {loginInfo ? <Login userInfo={(info) => this.getUserInfo(info)} /> : null}
            </div>

        )
    }

}

export default App