import React, { Component } from 'react';
import './MessageList.less'
import socket from '@/socket';

const storage = window.localStorage;
if (!storage.messageList) {
    storage.setItem('messageList', JSON.stringify([]))
}
class MessageList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messageList: JSON.parse(storage.messageList),
            msgInfo: ''
        }
        const { ioUserInfo } = props
        this.state.messageList.forEach(item => {
            if (item.userId === ioUserInfo.userId) {
                item.myMsg = true
            } else {
                item.myMsg = false
            }
        })
    }


    componentWillReceiveProps(props) {
        const { messageList } = this.state
        const { ioUserInfo } = props

        socket.on('getLogin', (info) => {
            if (info.userId === ioUserInfo.userId) {
                this.setState({
                    msgInfo: '你进入了聊天室'
                })
                setTimeout(() => {
                    this.setState({
                        msgInfo: ''
                    })
                }, 4000)
            } else {
                this.setState({
                    msgInfo: `${info.username}进入了聊天室`
                })
                setTimeout(() => {
                    this.setState({
                        msgInfo: ''
                    })
                }, 4000)
            }
        })

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
            storage.messageList = JSON.stringify(messageList)
            this.setState({
                messageList
            })
            document.querySelector('#msg_end').scrollIntoView()
        })
    }

    render() {
        const { messageList, msgInfo } = this.state

        return (
            <div style={{ position: 'relative' }}>
                {msgInfo !== '' ? <p className='msgInfo'>{msgInfo}</p> : null}
                <ul>
                    {
                        messageList.map((item, index) => {
                            return (
                                <li key={index} className={item.myMsg ? 'dialogue right' : 'dialogue'}>
                                    <div className='dialogue-main'>
                                        <div className='avatar'>
                                            <img src={item.avatar} />
                                        </div>
                                        <div className='text'>
                                            <p> {item.username}</p>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div id="msg_end" style={{ overflow: 'hidden' }}></div>
            </div>
        )
    }
}

export default MessageList