import React, {Component} from 'react';
import './index.css';
import TimeField from 'react-simple-timefield';
import CheckIcon from '@material-ui/icons/Check';

class AddTodoScreen extends Component {
    state = {
        todo: {
            id: "",
            todo: "",
            memo: "",
            time: '00:00',
        },
        currentId: "4",
        inputValid: false
    };

    handleTodoInputChange = (e) => {
        let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + e.target.value;

        let newTodoValue = Object.assign({}, this.state.todo, {
            id: id,
            todo: e.target.value
        });
        this.setState({
            todo: newTodoValue
        })
    };

    handleMemoInputChange = (e) => {
        let newMemoValue = Object.assign({}, this.state.todo, {
            memo: e.target.value
        });
        this.setState({
            todo: newMemoValue
        })
    };

    handleSelectTimeChange = (e) => {
        let newTimeValue = Object.assign({}, this.state.todo, {
            time: e.target.value
        });
        this.setState({
            todo: newTimeValue
        });
        console.log(this.state)
    };

    handleSubmit = () => {
        if (this.state.todo.todo) {
            this.props.onSubmit(this.state.todo);
            let emptyInputs = Object.assign({}, this.state.todo, {
                id: "",
                todo: "",
                memo: "",
                time: "",
            });
            this.setState({
                inputValid: true,
                todo: emptyInputs
            })

        } else {
            this.setState({inputValid: false});
        }
    };


    render() {
        const inputEntered = {
            border: "1px solid rgba(0,0,0,0.2)"
        };

        if (this.state.inputValid === false) {
            inputEntered.border = "1px solid red";
        }

        const showAddTodoScreen = {
            animationName: "slideUp",
            animationDuration: "0.6s",
        };
        if (this.props.show === false) {
            showAddTodoScreen.animationName = "slideDown";
            showAddTodoScreen.animationDuration = "1s";
        }

        return (
            <div className="AddTodoScreen" style={showAddTodoScreen}>
                <div className="AddTodoScreen-container">
                    <div className="AddTodoScreen-input">
                        <input
                            onChange={this.handleTodoInputChange}
                            value={this.state.todo.todo}
                            className="AddTodoScreen-input__field"
                            placeholder="What do you need to do today?"
                            type="text"
                            style={inputEntered}
                        />
                    </div>
                    <div className="AddTodoScreen-input">
                        <input
                            onChange={this.handleMemoInputChange}
                            value={this.state.todo.memo}
                            className="AddTodoScreen-input__field"
                            placeholder="Optional memo"
                            type="text"/>
                    </div>
                    <div className="AddTodoScreen-input--inline">
                        <div className="AddTodoScreen-input">
                            <TimeField
                                value={this.state.time}
                                onChange={this.handleSelectTimeChange}
                                colon=":"
                                showSeconds={false}
                            />

                        </div>

                    </div>
                    <div onClick={this.handleSubmit} className="AddTodoScreen-submitButton">
                        <button className="AddTodoScreen-submitButton__button">
                            <CheckIcon style={{color: 'white'}}/>
                        </button>
                    </div>
                </div>
                <div className="AddTodoScreen-closeButton">
                    <button onClick={this.props.hide} className="AddTodoScreen-closeButton__button">Close</button>
                </div>
            </div>
        )
    }
}


export default AddTodoScreen;