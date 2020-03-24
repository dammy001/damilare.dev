import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

class Side extends Component {
    constructor(props){
        super(props)
        this.state = {
            sidebarOpen: true
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    }

    onSetSidebarOpen(open){
        this.setState({ sidebarOpen: open })
    }

    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar Content</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "black", color: "white" }}}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>sidebar</button>
            </Sidebar>
        )
    }
}

export default Side