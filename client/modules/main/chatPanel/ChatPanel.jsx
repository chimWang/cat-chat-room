import React, { Component } from 'react'
import './ChatPanel.less'
import Input from '@/components/Input'

class ChatPanel extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.onEnter)
    }
    clickBtn() {
        const { userInfo } = this.props
        let message = this.message.getValue()
        this.sendMessage(userInfo, message)
    }

    onEnter(e) {
        let that = this
        const { userInfo } = that.props
        let message = that.message.getValue()
        if (e.keyCode === 13) {
            that.sendMessage(userInfo, message)
        }
    }

    sendMessage() {

    }

    render() {
        return (
            <div className="chatpanel">
                <header>chatroom</header>
                <div className="content">
                </div>
                <footer>
                    <Input placeholder="来吐槽一下~" ref={i => this.message = i} />
                    <button onClick={() => this.clickBtn()}>发送</button>
                </footer>
            </div>
        )
    }
}

export default ChatPanel
