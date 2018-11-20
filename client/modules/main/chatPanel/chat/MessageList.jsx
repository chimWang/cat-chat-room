import React, { Component } from 'react';
import './MessageList.less'
import IO from 'socket.io-client'
const socket = new IO("http://localhost:3000")

class MessageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messageList: [],
        }
    }

    componentWillReceiveProps(props) {
        const { messageList } = this.state
        const { ioUserInfo } = props
        socket.on('getMessage', (userInfo, message) => {
            let messageInfo = {}
            messageInfo.content = message
            messageInfo.avatar = userInfo.chooseAvatar
            messageInfo.username = userInfo.username
            messageInfo.userId = userInfo.userId
            messageList.push(messageInfo)
            messageList.forEach(item => {
                if (item.userId === ioUserInfo.userId) {
                    item.myMsg = true
                }
            })
            this.setState({
                messageList
            })

        })
    }
    render() {
        const { messageList, nowIndex } = this.state

        return (
            <div>
                <ul>
                    {
                        messageList.map((item, index) => {
                            return (
                                <li key={index} className={item.myMsg ? 'dialogue right' : 'dialogue'}>
                                    <div className='avatar'>
                                        <p> {item.username}</p>
                                        <img src={item.avatar} />
                                    </div>
                                    <div className='text'>
                                        <p>{item.content}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default MessageList