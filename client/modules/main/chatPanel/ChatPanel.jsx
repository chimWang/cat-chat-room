import React, { Component } from 'react'
import './ChatPanel.less'
import Input from '@/components/Input'
import MessageList from './chat/MessageList'

import IO from 'socket.io-client';
const socket = new IO("http://localhost:3000");

socket.on('connect', function () {
    console.log("与服务器连接");
});

socket.on('error', function () {
    console.log("发生错误");
});


socket.on('disconnect', function () {
    console.log("与服务器断开");
});


class ChatPanel extends Component {
    componentDidMount() {
        document.addEventListener('keydown', (e) => this.onEnter(e))
    }
    clickBtn() {
        const { userInfo } = this.props
        let message = this.message.getValue()
        this.sendMessage(userInfo, message)
    }

    onEnter(e) {
        const { userInfo } = this.props
        let message = this.message.getValue()
        if (e.keyCode === 13) {
            this.sendMessage(userInfo, message)
        }
    }

    sendMessage(userInfo, message) {
        if (message) {
            socket.emit('sendMessage', userInfo, message, (code) => {
                if (code === 200) {
                    console.log('成功')
                    this.message.clearValue()
                } else {
                    console.log('失败')
                }
            })
        } else {
            alert('输入消息不能为空')
        }
    }

    render() {
        return (
            <div className="chatpanel">
                <header>chatroom</header>
                <div className="content">
                    <MessageList />
                </div>
                <footer>
                    <Input placeholder="来吐槽一下吧~" ref={i => this.message = i} />
                    <button onClick={() => this.clickBtn()}>发送</button>
                </footer>
            </div>
        )
    }
}

export default ChatPanel
