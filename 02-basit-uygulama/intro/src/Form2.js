import alertify from 'alertifyjs';
import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from "reactstrap"


export default class Form2 extends Component {

    state = {email: '', password: '', language: '', description: '' }

    handleCahnge = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        alertify.success(this.state.email + " added somewhere...");
        alertify.success(this.state.password + " added somewhere...");
        alertify.success(this.state.language + " added somewhere...");
        alertify.success(this.state.description + " added somewhere...");
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter email"
                            onChange={this.handleCahnge}
                        />
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={this.handleCahnge}
                        />
                           <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Enter description"
                            onChange={this.handleCahnge}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="language">Language</Label>
                        <Input type="select" id="language" name="language" onClick={this.handleCahnge}>
                            <option></option> 
                            <option>English</option> 
                            <option>Turkish</option> 
                            <option>German</option> 
                            <option>Russian</option> 
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
