import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            userPass: ''
        }
    }

    Login(){
        fetch('http://localhost:3000/login?q='+ this.state.userName).then((responce)=>{
            responce.json().then((result)=>{
                console.warn("Result", result)
                if(result.length > 0){
                    localStorage.setItem('login', JSON.stringify(result))
                    console.warn(this.props.history.push('list'))
                }else{
                    alert("Please enter Valid the User name")
                }
            })
        })
        
    }

    render() {
        return (
            <div>
                <NavbarMenu />
                <h1>Welcome To Nitesh Resto</h1>
                <label htmlFor="name">User Name: </label>
                <input type="text" name = 'name' onChange={(e)=> this.setState({userName: e.target.value})}/> <br/><br/>
                <label htmlFor="pass">Password: </label>
                <input type="Password" name = 'pass' onChange = {(e)=>this.setState({userPass: e.target.value})}/> <br/><br/>
                <button onClick={()=>{this.Login()}}>Login</button>
            </div>
        )
    }
}
