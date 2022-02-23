
import { useState, useEffect, useRef } from 'react';
import MessageInput from './components/MessageInput';
import Message from './components/Message';
import faker from "@faker-js/faker"

const generateSampleMessages = async () => {
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

function App() {
  const [messages, setMessages] = useState([]);
  let canEnter = useRef();
  canEnter.current = true;

  let chatBoxRef = useRef();


  useEffect(() => {
    generateSampleMessages().then((newMessages) => {
      newMessages.concat(messages)
      setMessages([...newMessages]);

    })

  }, [])



  const storeMessage = (message) => {
    setMessages([...messages, message]);
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }

  const handleOnScroll = (e) => {
    if (canEnter.current) {

      let element = e.target;
      if (element.scrollTop === 0) {

        canEnter.current = false;
        let scrlHeight = element.scrollHeight;
        generateSampleMessages().then((newMessages) => {
          canEnter.current = true;
          newMessages.concat(messages)
          setMessages([...newMessages, ...messages])

          let newScrollHeight = element.scrollHeight;
          element.scrollTop = newScrollHeight - scrlHeight;
        });
      }
    }
  }


  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) =>
      msg.id !== id
    ));
  }

  return (
    <div className="App">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-4">
              <div className="box box-warning direct-chat direct-chat-warning">
                <div className="box-header with-border">
                  <h3 className="box-title">Chat Messages</h3>
                </div>
                <div className="box-body" ref={chatBoxRef} onScroll={handleOnScroll}>
                  {messages.length > 0 ? (messages.map((message, index) => (
                    <Message key={index} message={message} onDelete={deleteMessage} index={index} />
                  ))) : ("no messages")}
                </div>
                <div className="box-footer">
                  <MessageInput onSend={storeMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
