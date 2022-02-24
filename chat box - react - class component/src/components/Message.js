import React from 'react'




class Message extends React.Component {
    constructor(props) {
        super(props);
        this.message = props.message;
        this.onDelete = props.onDelete;
    }

    render() {
        return (
            <div className="direct-chat-msg">
                <div className="direct-chat-info clearfix"> <span
                    className="direct-chat-name pull-left">{this.message.name}</span> <span
                        className="direct-chat-timestamp pull-right">{this.message.time}</span> </div> <img
                    className="direct-chat-img"
                    src={this.message.avatar}
                    alt="message user image" />
                <svg
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => this.onDelete(this.message.id)}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
                <div className="direct-chat-text">{this.message.text} </div>
            </div>
        )
    }
}


export default Message