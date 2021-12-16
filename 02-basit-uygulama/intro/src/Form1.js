import React, { Component } from 'react'

export default class Form1 extends Component {

    state = {userName: '', city: ''}

    onCahngeHandler = (event) => {
        /* this.setState({userName: event.target.value}); */
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input name="userName" onChange={this.onCahngeHandler} type="text" />
                    <h4>User Name is  {this.state.userName}</h4>
                    <input type="submit" value="Save"></input>

                    <h3>City</h3>
                    <input name="city" onChange={this.onCahngeHandler} type="text" />
                    <h4>City Name is  {this.state.city}</h4>

                </form>
            </div>
        )
    }
}
