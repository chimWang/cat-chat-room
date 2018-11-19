import React, { Component } from 'react'
import ChatPanel from './chatPanel/ChatPanel'

class Main extends Component {
    render() {
        return (
            <div>
                <ChatPanel userInfo={this.props.userInfo} />
            </div>

        )
    }
}
export default Main
