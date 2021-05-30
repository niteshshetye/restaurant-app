import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu'

export default class RestaurantUpdate extends Component {
    constructor()
    {
        super();
        this.state = {
            "id": null,
            "name": null,
            "email": null, 
            "rating": null,
            "address": null
        }
    }
    componentDidMount()
    {
        fetch('http://localhost:3000/restaurant/' + this.props.match.params.id).then((responce)=>{
            responce.json().then((result)=>{
                this.setState({
                    name: result.name,
                    email: result.email,
                    rating: result.rating,
                    address: result.address,
                    id: result.id
                })
            })
        })
    }
    updateInfo()
    {
        fetch('http://localhost:3000/restaurant/' + this.state.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((responce)=>{
            responce.json().then((result)=>{
                alert('Restaurant Has been Updated Succesfully...!')
            })
        })
    }
    render() {
        
        return (
            <div>
                <NavbarMenu />
                <h1>Update Information</h1>  
                <input type="text" onChange={(e)=>{this.setState({name: e.target.value})}} placeholder = 
                "Enter Restaurant Name" value= {this.state.name}/> <br /> <br />
                <input type="email" onChange={(e)=>{this.setState({email: e.target.value})}} placeholder = "Enter Restaurant Email" value= {this.state.email}/> <br /> <br />
                <input type="text" onChange={(e)=>{this.setState({rating: e.target.value})}} placeholder = "Enter Restaurant Rating" value= {this.state.rating}/> <br /> <br />
                <input type="text" onChange={(e)=>{this.setState({address: e.target.value})}} placeholder = "Enter Restaurant Address" value= {this.state.address}/> <br /> <br />
                <button onClick={()=>{this.updateInfo()}}>Update</button>
            </div>            
        )
    }
}
