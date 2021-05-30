import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu'

export default class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name: null, 
            email: null, 
            address: null, 
            rating: null
        }
    }
    createAccount()
    {
        fetch('http://localhost:3000/restaurant', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((responce)=>{
            responce.json().then((result)=>{
                alert('Restaurant Has been Added Succesfully...!')
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarMenu />
                <h1>Restaurant Create</h1>
                <input type="text" onChange={(e)=>{this.setState({name: e.target.value})}} placeholder = 
                "Enter Restaurant Name"/> <br /> <br />
                <input type="email" onChange={(e)=>{this.setState({email: e.target.value})}} placeholder = "Enter Restaurant Email"/> <br /> <br />
                <input type="text" onChange={(e)=>{this.setState({rating: e.target.value})}} placeholder = "Enter Restaurant Rating"/> <br /> <br />
                <input type="text" onChange={(e)=>{this.setState({address: e.target.value})}} placeholder = "Enter Restaurant Address"/> <br /> <br />
                <button onClick={()=>{this.createAccount()}}>Register Your Restaurant here..</button>
            </div>
        )
    }
}
