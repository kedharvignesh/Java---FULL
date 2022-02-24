import { useState } from "react"
import faker from "@faker-js/faker"

const Messageinput = ({ onSend }) => {
    const [text, setText] = useState('')
    const name = "Kedhar";
    const time = "" + faker.date.past();
    const id = faker.datatype.uuid();
    const avatar = "https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"

    const onClick = (e) => {
        e.preventDefault()

        if (text != "") {
            onSend({ text, name, time, id, avatar });
        }

        setText('')
    }
    return (
        <form onSubmit={onClick} >
            <div className="input-group"> <input type="text"
                placeholder="Type Message ..." className="form-control" value={text}
                onChange={(e) => setText(e.target.value)} /> <span
                    className="input-group-btn"> <button type="button"
                        className="btn btn-warning btn-flat" onClick={onClick}>Send</button> </span> </div>
        </form>
    )
}


export default Messageinput