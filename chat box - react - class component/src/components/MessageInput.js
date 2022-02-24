import React from "react"
import faker from "@faker-js/faker"



class Messageinput extends React.Component {
    constructor(props) {
        super(props);
        this.onSend = props.onSend;
        this.state = { text: "" };

        this.name = "Kedhar";
        this.time = "" + faker.date.past();
        this.id = faker.datatype.uuid();
        this.avatar = "https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
    }

    onClick = (e) => {
        e.preventDefault()

        let inputMessage = {
            text: this.state.text,
            name: this.name,
            time: this.time,
            id: this.id,
            avatar: this.avatar
        }

        if (this.statetext != "") {
            this.onSend(inputMessage);
        }

        this.setState({ text: '' })
    }


    render() {



        return (
            <form onSubmit={this.onClick} >
                <div className="input-group"> <input type="text"
                    placeholder="Type Message ..." className="form-control" value={this.state.text}
                    onChange={(e) => this.setState({ text: e.target.value })} /> <span
                        className="input-group-btn"> <button type="button"
                            className="btn btn-warning btn-flat" onClick={this.onClick}>Send</button> </span> </div>
            </form>
        )
    }
}

export default Messageinput