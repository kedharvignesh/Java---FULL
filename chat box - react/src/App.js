
import { useState, useEffect, useRef } from 'react';
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

function App() {
  const [messages, setMessages] = useState([]);
  const [spinnerDisplay, setSpinnerDisplay] = useState(false);
  let canEnter = useRef(true);
  let chatBoxRef = useRef();


  useEffect(() => {
    setSpinnerDisplay(true);
    generateSampleMessages().then((newMessages) => {
      setMessages((oldMessages) => [...newMessages, ...oldMessages]);
      setSpinnerDisplay(false)
    }).catch((e) => console.error(e))

  }, [])



  const storeMessage = (message) => {
    setMessages((oldMessages) => [...oldMessages, message]);
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }

  const handleOnScroll = (e) => {
    if (canEnter.current) {

      let element = e.target;
      if (element.scrollTop === 0) {
        canEnter.current = false;
        setSpinnerDisplay(true);

        let scrlHeight = element.scrollHeight;

        generateSampleMessages().then((newMessages) => {

          canEnter.current = true;
          setMessages((oldMessages) => [...newMessages, ...oldMessages])
          let currentScrollTop = element.scrollTop;
          let newScrollHeight = element.scrollHeight;
          element.scrollTop = (currentScrollTop) + (newScrollHeight - scrlHeight);
          setSpinnerDisplay(false)

        }).catch((e) => console.error(e))
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
                  {spinnerDisplay && <div class="spinner-border text-info" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>}
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
