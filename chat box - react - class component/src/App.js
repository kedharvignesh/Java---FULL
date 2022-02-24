
import React from 'react';
import MessageInput from './components/MessageInput';
import Message from './components/Message';
import faker from "@faker-js/faker"



const generateSampleMessages = async () => {
  await new Promise((res) => setTimeout(res, 2500));
  let messages = [];
  for (let i = 0; i < 10; i++) {
    const message = {
      text: faker.lorem.sentence(),
      name: faker.name.findName(),
      time: "" + faker.date.past(),
      id: faker.datatype.uuid(),
      avatar: `${faker.image.nature()}?random=${Date.now()}`
    }
    messages.push(message);
  }
  return messages;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { messages: [], spinnerDisplay: false }
    this.canEnter = true;
    console.log(this.canEnter)
    this.chatBoxRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ spinnerDisplay: true });
    generateSampleMessages().then((newMessages) => {
      this.setState({ messages: [...newMessages, ...this.state.messages], spinnerDisplay: false });

    }).catch((e) => console.error(e))

  }

  storeMessage = (message) => {
    console.log(message);
    this.setState({ messages: [...this.state.messages, message] });
    this.chatBoxRef.current.scrollTop = this.chatBoxRef.current.scrollHeight;
  }

  handleOnScroll = (e) => {
    if (this.canEnter) {

      let element = e.target;
      if (element.scrollTop === 0) {
        this.canEnter = false;
        this.setState({ spinnerDisplay: true });

        let scrlHeight = element.scrollHeight;

        generateSampleMessages().then((newMessages) => {

          this.canEnter = true;
          this.setState({ messages: [...newMessages, ...this.state.messages], spinnerDisplay: false });
          let currentScrollTop = element.scrollTop;
          let newScrollHeight = element.scrollHeight;
          element.scrollTop = (currentScrollTop) + (newScrollHeight - scrlHeight);

        }).catch((e) => console.error(e))
      }
    }
  }


  deleteMessage = (id) => {
    this.setState({
      messages: (this.state.messages.filter((msg) =>
        msg.id !== id
      )),
    });

  }

  render() {


    return (
      <div className="App" >
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-4">
                <div className="box box-warning direct-chat direct-chat-warning">
                  <div className="box-header with-border">
                    <h3 className="box-title">Chat Messages</h3>
                    {this.state.spinnerDisplay && <div className="spinner-border text-info" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>}
                  </div>
                  <div className="box-body" ref={this.chatBoxRef} onScroll={this.handleOnScroll}>
                    {this.state.messages.length > 0 ? (this.state.messages.map((message, index) => (
                      <Message key={index} message={message} onDelete={this.deleteMessage} index={index} />
                    ))) : ("no messages")}
                  </div>
                  <div className="box-footer">
                    <MessageInput onSend={this.storeMessage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



}

export default App;
