import React, { Component } from 'react';
import './MessageList.less'
import IO from 'socket.io-client'
const socket = new IO("http://localhost:3000")

class MessageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messageList: []
        }
    }

    componentDidMount() {
        const { messageList } = this.state
        socket.on('getMessage', (userInfo, message) => {
            let messageInfo = {}
            messageInfo.content = message
            messageInfo.avatar = userInfo.chooseAvatar
            messageInfo.username = userInfo.username
            messageList.push(messageInfo)
            this.setState({
                messageList
            })
        })
    }
    render() {
        const { messageList } = this.state
        return (
            <div>
                <ul>
                    {
                        messageList.map((item, index) => {
                            return (
                                <li key={index} className='dialogue'>
                                    <div className='avatar'>
                                        <p> {item.username}</p>
                                        <img src={item.avatar} />
                                    </div>
                                    <div className='text'>
                                        {item.content}
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