
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
    messages.unshift(message);
  }
  return messages;
}

function App() {
  const [messages, setMessages] = useState([]);
  const [enter, setEnter] = useState(true);

  let chatBoxRef = useRef();


  useEffect(() => {
    generateSampleMessages().then((randomMessages) => {
      randomMessages.forEach(msg => {
        messages.unshift(msg);
      })
      setMessages([...messages])

    })

  }, [])



  const storeMessage = (message) => {
    messages.push(message);
    setMessages([...messages]);
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }

  const handleOnScroll = async (e, canEnter) => {
    if (canEnter) {

      let element = e.target;
      if (element.scrollTop === 0) {
        setEnter(false);

        let scrlHeight = element.scrollHeight;
        let res = await generateSampleMessages();
        if (res) {
          setEnter(true);
          res.forEach(msg => {
            messages.unshift(msg);
          })
          setMessages([...messages]);
          let newScrollHeight = element.scrollHeight;
          element.scrollTop = newScrollHeight - scrlHeight;
        }
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
                <div className="box-body" ref={chatBoxRef} onScroll={(e) => handleOnScroll(e, enter)}>
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
